### 1. Проектирование:

Разделение монолитного фронтенд будет проводиться на 3 домена:
- Вход и авторизация
- Действия с профилем пользователя
- Работа с фотографиями

В качестве метода реализации выбрана Run time клиентская компоновка

В качестве инструмента используется **Webpack Module Federation** с разделением на основное (host) приложение
и 3 (remote) модуля с межмодульным взаимодействием через глобальное состояние

### 2. Планирование изменений:

```
/microfrontend
  /host
    /src
      /components              // Компоненты общей формы
        Footer.js              
        Header.js              
        ProtectedRoute.js
      /images
      /styles                  // Стили для общей формы
      /vendor                  // Внешние ресурсы для стилезации
  /auth-microfrontend
    /src
      /components
        InfoTooltip.js         // Компонент отображения информации
        Login.js               // Компонент входа пользователя
        Register.js            // Компонент регистрации пользователя
      /images                  // Изображения, используемые в интерфейсах
      /styles
        auth-form              // Стили для компонента регистрации
        login                  // Стили для компонента входа
      /utils
        auth.js                // Утилиты для аутентификации
      index.js                 // Точка входа микрофронтенда
    package.json               // Зависимости и скрипты микрофронтенда
    webpack.config.js
  /cards-microfrontend
    /src
      /components              // Компоненты модуля для работы с фото
        /AddPlacePopup.js
        /Card.js
        /ImagePopup.js
        /Mian.js
        /PopupWithForm.js
      /images                  // Изображения для стилей
        /add-icon.svg
        /close.svg
        /delete-icon.svg
        /edit-icon.svg
        /like-active.svg
        /like-inactive.svg
      /styles                  // Стили
        /card
        /places
        /popup
      /utils                   // API и функции
        /api.js
  /profile-microfrontend       
    /src
      /components             // Компоненты для работы с профилем
        /EditAvatarPopup.js
        /EditProfilePopup.js
        /PopupWithForm.js
      /styles                  // Стили
        /profile
      /utils                   // API и функции
        /api.js
```

### 3. Проведенные изменения

Создал все модули через 
```
npx create-mf-app
```

Разнес файлы по каталогам, настроил webpack.config.js (exposes, remotes)

Начал разнесение api.js и функций, но застрял из-за отсутствия опыта и достаточных знаний во frontend разработке  