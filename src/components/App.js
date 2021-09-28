// serve - s build
// npm start

import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from "./PopupWithForm.js";


function App(props) {
   
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [selectedCard, selectCard] = React.useState({});


    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }
   
    function handleCardClick(card) {
        selectCard(card);
        setIsImagePopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsImagePopupOpen(false);
    }

    return ((
        <div className="page">
            <Header />
            <Main isEditProfilePopupOpen={handleEditProfileClick} isAddPlacePopupOpen={handleAddPlaceClick} isEditAvatarPopupOpen={handleEditAvatarClick}
                onCardClick={handleCardClick} card={selectedCard}
            />

            <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} closeAllPopups={closeAllPopups} />

            <PopupWithForm name="user-data" title="Редактировать профиль" buttonName="Сохранить" isOpen={isEditProfilePopupOpen} closeAllPopups={closeAllPopups}>
                <input id="name-input" className="popup__text popup__text_type_name" type="text" name="name" minLength="2"
                    maxLength="40" required placeholder="Имя"/>
                <span className="popup__error name-input-error" id="name-input-error"></span>
                <input id="profession-input" className="popup__text popup__text_type_profession" type="text" name="profession"
                    minLength="2" maxLength="200" required placeholder="Профессия"/>
                <span className="popup__error profession-input-error" id="profession-input-error"></span>
            </PopupWithForm>
            

            <PopupWithForm name="place-data" title="Новое место" buttonName="Сохранить" isOpen={isAddPlacePopupOpen} closeAllPopups={closeAllPopups}>
                <input id="place-input" className="popup__text popup__text_type_place" placeholder="Название" type="text" name="name" minLength="2" maxLength="30" required/>
                <span id="place-input-error" className="popup__error place-input-error"></span>
                <input id="url-input" type="url" name="link" placeholder="Ссылка на картинку" className="popup__text popup__text_type_source" required/>
                <span className="popup__error url-input-error"></span>
            </PopupWithForm>

            <PopupWithForm name="update-avatar" title="Обновить аватар" buttonName="Сохранить" isOpen={isEditAvatarPopupOpen} closeAllPopups={closeAllPopups}>
                 <input id="avatar-input" type="url" name="link" placeholder="Ссылка на картинку" className="popup__text popup__text_type_source" required/>                   
                <span className="popup__error avatar-input-error popup__error_avatar"></span>
                            </PopupWithForm>

            <PopupWithForm name="approval" title="Вы уверены?" buttonName="Да" isOpen={false} />
            <Footer />
        </div>
    ));
}
export default App;









