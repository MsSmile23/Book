const btnlogout = document.getElementById('link6');

btnlogout.addEventListener('click', async () => {
  try {
    const response = await fetch('http://localhost:3000/logout');
    console.log(response);
    if (response.redirected) {
      window.location.href = response.url;
    }
  } catch (err) {
    console.log(err);
  }
});

const commentdelebuttons = document.querySelectorAll('.bdt-delete');

for (let i = 0; i < commentdelebuttons.length; i += 1) {
  commentdelebuttons[i].addEventListener('click', async (event) => {
    try {
      const { id } = event.target.dataset;
      const response = await fetch(`http://localhost:3000/user/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      if (response.status === 200) {
        const entryElememt = event.target.closest('.outer-card');
        entryElememt.remove();
      } else if (response.status === 400) {
        alert('У вас нет прав для удаления');
      }
    } catch (err) { console.log(err); }
  });
}

const commentchangebuttons = document.querySelectorAll('.bdt-change');

for (let i = 0; i < commentdelebuttons.length; i += 1) {
  commentchangebuttons[i].addEventListener('click', (event) => {
    const { id } = event.target.dataset;
    const changeform = document.getElementById(`change-form_${id}`);
    changeform.style.setProperty('display', 'block');
    changeform.style.setProperty('visibility', 'visible');
  });
}

const changecompany = document.querySelectorAll('.commentform');
const innercard = document.querySelectorAll('.inner-card');
const outercard = document.querySelectorAll('.outer-card');

for (let i = 0; i < changecompany.length; i += 1) {
  changecompany[i].addEventListener('submit', async (event) => {
    try {
      event.preventDefault();
      const name = event.target.name.value;
      const telephone = event.target.telephone.value;
      const { id } = event.target.dataset;
      console.log(id, name, telephone);
      const response = await fetch('http://localhost:3000/user/update', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, name, telephone }),
      });
      const postinfo = await response.json();
      innercard[0].innerHTML = `
    <p>
          Компания:
          ${postinfo.name}
          Телефонный номер:
          ${postinfo.telephone}
        </p>
    `;
      const changeform = document.getElementById(`change-form_${id}`);
      changeform.style.setProperty('display', 'none');
      changeform.style.setProperty('visibility', 'hidden');
      outercard.remove(innercard[i]);
    } catch (err) { console.log(err); }
  });
}

const save = document.querySelectorAll('.save-number');

for (let i = 0; i < save.length; i += 1) {
  save[i].addEventListener('click', async (event) => {
    try {
      event.preventDefault();
      const { id } = event.target.dataset;
      console.log(id);
      const response = await fetch('http://localhost:3000/favour', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      if(response.status === 200){
        alert('Вы сохранили данные контакты или они у вас уже сохранены. Проверьте вашу вкладку)')
      }
    } catch (err) { console.log(err); }
  });
}

const saveddelete = document.querySelectorAll('.saved-delete');

for (let i = 0; i < saveddelete.length; i += 1) {
  saveddelete[i].addEventListener('click', async (event) => {
    try {
      console.log(event);
      const { id } = event.target.dataset;
      const response = await fetch('http://localhost:3000/remove', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      if (response.status === 200) {
        const entryElememt = event.target.closest('.outer-card');
        entryElememt.remove();
      } else if (response.status === 400) {
        alert('У вас нет прав для удаления');
      }
    } catch (err) { console.log(err); }
  });
}
