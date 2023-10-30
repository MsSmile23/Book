const React = require('react');
const Layout = require('./Layout');

module.exports = function NewCompany({ user }) {
  return (
    <Layout user={user}>
      <div className="body">
        {user?.name && <h1 className="headerTitle">{`C возвращением ${user.name}!`}</h1>}
        <h1 className="headerTitle">Добавление компании</h1>
      </div>
      <div>
        <form action="/newcompany" method="POST">
          <div className="register-data">
            <label>
              Название компании
            </label>
            <br />
            <input
              name="name"
              type="name"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <br />
          <br />
          <div className="register-data">
            <label>
              Телефон
              <br />
              <br />
              Пожалуйста, заполните в одном из следующих форматов:
              <br />
              +79261234567
              <br />
              89261234567
              <br />
              79261234567
              <br />
              +7 926 123 45 67
              <br />
              8(926)123-45-67
              <br />
              123-45-67
              <br />
              9261234567
              <br />
              79261234567
              <br />
              (495)1234567
              <br />
              (495) 123 45 67
              <br />
              89261234567
              <br />
              8-926-123-45-67
              <br />
              8 927 1234 234
              <br />
              8 927 12 12 888
              <br />
              8 927 12 555 12
              <br />
              8 927 123 8 123
              <br />
              <br />
              В случае неудачи, вы будете перенаправлены сюда для повторного заполнения формы
            </label>
            <br />
            <input
              name="telephone"
              type="tel"
              id="exampleInputPassword1"
            />
          </div>
          <br />
          <div className="submit-register">
            <button type="submit" className="registation-btn">
              Добавить
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
