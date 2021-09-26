import React from 'react';

function Card(props) {
      function handleClick() {
          props.onCardClick(props.card);
          }

    return ((
        <li className="element" key={props.card._id}>
            <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
            <button className="element__remove-button" type="button"></button>
            <div  className="element__heading">
                <p  className="element__title">{props.card.name}</p>
                <div  className="element__container">
                    <button  className="element__heart element__heart_disabled" type="button"></button>
                    <p className='element__counter'>{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    ));
};

export default Card;