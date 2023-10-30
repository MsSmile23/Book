const React = require('react');
const Layout = require('./Layout');
const UserCompanyCard = require('./UserCompanyCard');
const Favour = require('./SavedNumbers')

module.exports = function UserPage({ user, companies, favourites }) {
  return (
    <Layout user={user}>
      <div className="body">
        {user?.name && <h1 className="headerTitle">{`Добро пожаловать на домашнюю страницу ${user.name}!`}</h1>}
        <h1 className="headerTitle">Страница пользователя</h1>
        <p>Компании, добавленные пользователем</p>
      </div>
      <div>
        {companies.map((company) => (
          <UserCompanyCard company={company} />
        ))}
      </div>
      <div>
        <br />
        <p>Компании, которые вы сохранили</p>
        {favourites.map((favour) => (
          <Favour favour={favour} />
        ))}
      </div>
    </Layout>
  );
};
