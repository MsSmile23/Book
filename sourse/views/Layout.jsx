const React = require('react');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/js/index.js" />
        <title>Fallout Forum</title>
      </head>
      <body>
        <div className="headers">
          <p className="link-group">
            <a href="/"><button id="link1">На главную страницу</button></a>
            <a href="/user"><button id="link2">Мои номера и компании</button></a>
            {user ? (
              <>
                <a href="/newcompany"><button id="link7">Добавить новую компанию</button></a>
                <a href="/logout"><button id="link6">Выйти из профиля</button></a>
              </>
            ) : (
              <>
                <a href="/registration"><button id="link3">Регистрация</button></a>
                <a href="/login"><button id="link4">Авторизация</button></a>
              </>
            )}
          </p>
        </div>
        {children}
      </body>
    </html>
  );
};
