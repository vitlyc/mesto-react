import React from 'react';
// import cousteau from '../images/Cousteau.jpg';
import api from "../utils/Api";
import Card from './Card'

function Main(props) {


    const [userInfo, setUserInfo] = React.useState({ userName: '', userAbout: '', userAvatar: '' });
    const [cards, setCards] = React.useState([]);
    
    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, initialCards]) => {
                setUserInfo({
                    userName: userData.name,
                    userAbout: userData.about,
                    userAvatar: userData.avatar,
                });
                setCards(initialCards);
                // console.log(initialCards);
            })

            .catch((err) => {
                console.log(err);
            });
    }, []);
    

    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-container">
                    <img src={userInfo.userAvatar} className="profile__avatar" alt="Кусто" />
                    <button className="profile__edit-avatar" type="button" onClick={props.isEditAvatarPopupOpen}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userInfo.userName}</h1>
                    <button className="profile__edit-button" type="button" onClick={props.isEditProfilePopupOpen}></button>
                    <p className="profile__subtitle">{userInfo.userAbout}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.isAddPlacePopupOpen}></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card) => {
                        
                        return (
                            <Card key= { card._id }  card={card} onCardClick={props.onCardClick} />
                        )
                    })}
                </ul>
            </section>
        </main>)
}

export default Main;



