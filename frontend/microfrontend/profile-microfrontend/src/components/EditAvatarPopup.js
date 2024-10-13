import React from 'react';
import PopupWithForm from './PopupWithForm';
import api from '../utils/api';

const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

function EditAvatarPopup({ isOpen, onUpdateAvatar, onClose }) {
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsInfoToolTipOpen(false);
    setSelectedCard(null);
  }

  function handleUpdateAvatar(avatarUpdate) {
    api
        .setUserAvatar(avatarUpdate)
        .then((newUserData) => {
          setCurrentUser(newUserData);
          closeAllPopups();
        })
        .catch((err) => console.log(err));
  }

  return (
    <PopupWithForm
      isOpen={isOpen} onSubmit={handleSubmit} onClose={onClose} title="Обновить аватар" name="edit-avatar"
    >

      <label className="popup__label">
        <input type="url" name="avatar" id="owner-avatar"
               className="popup__input popup__input_type_description" placeholder="Ссылка на изображение"
               required ref={inputRef} />
        <span className="popup__error" id="owner-avatar-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
