const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <div className="registation-card">
        <div className="registation-form">
          <h2 className="headerTitle">Регистрация</h2>
          <div>
            <form action="/registration" method="POST">
              <div className="register-data">
                <label>
                  Имя пользователя
                </label>
                <br />
                <input
                  name="name"
                  type="name"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="register-data">
                <label>
                  Пароль
                </label>
                <br />
                <input
                  name="password"
                  type="password"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="register-data">
                <label>
                  Электронная почта
                </label>
                <br />
                <input
                  name="email"
                  type="mail"
                  id="exampleInputMail"
                />
              </div>
              <br />
              <div className="submit-register">
                <button type="submit" className="registation-btn">
                  Зарегистрироваться
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
