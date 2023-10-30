const React = require('react');

function SavedCard({ user, favour }) {
  return (
    <div className="outer-card">
      <div className="inner-card">
        <p>
          Компания:
          {' '}
          {favour.Company.name}
          {' '}
          {' '}
          {' '}
          Телефонный номер:
          {' '}
          {favour.Company.telephone}
          <button data-id={favour.company_id} className="saved-delete">Удалить</button>
        </p>
      </div>
    </div>
  );
}

module.exports = SavedCard;
