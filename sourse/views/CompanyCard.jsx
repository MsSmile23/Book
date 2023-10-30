const React = require('react');

function PostCard({ user, company }) {
  return (
    <div className="outer-card">
      <div className="inner-card">
        <p>
          Компания:
          {' '}
          {company.name}
          {' '}
          {' '}
          {' '}
          Телефонный номер:
          {' '}
          {company.telephone}
        </p>
        <p>
          Сколько раз был сохранен данный номер:
          {' '}
          {company.company.length}
        </p>
        <button type="submit" data-id={company.id} className="save-number">
          Сохранить у себя
        </button>
      </div>
    </div>
  );
}

module.exports = PostCard;
