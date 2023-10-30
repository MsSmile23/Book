const React = require('react');
const Layout = require('./Layout');
const CompanyCard = require('./CompanyCard');

module.exports = function Home({ user, companies }) {
  return (
    <Layout user={user}>
      <div className="body">
        {user?.name && <h1 className="headerTitle">{`C возвращением ${user.name}!`}</h1>}
        <h1 className="headerTitle">Главаня страница</h1>
      </div>
      <div>
        {companies.map((company) => (
          <CompanyCard company={company} />
        ))}
      </div>
    </Layout>
  );
};
