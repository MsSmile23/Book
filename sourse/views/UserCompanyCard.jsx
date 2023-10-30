const React = require('react');

function PostCard({ company }) {
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
        <div className="btn-user">
          <button data-id={company.id} className="bdt-delete">Удалить</button>
          <button data-id={company.id} className="bdt-change">Изменить</button>
        </div>
        <form className="commentform" name="comment" data-id={company.id}>
          <div id={`change-form_${company.id}`} className="change-form">
            <label>
              Изменить название компании
            </label>
            <br />
            <input
              name="name"
              type="name"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <br />
            <label>
              Изменить телефон
            </label>
            <br />
            <input
              name="telephone"
              type="tel"
              id="exampleInputPassword1"
            />
            <br />
            <button type="submit" className="registation-post">
              Внести изменения
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

module.exports = PostCard;
