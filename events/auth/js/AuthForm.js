'use strict';
function AuthForm({onAuth}) {
  let userName;
  let userEmail;
  let userPassword;

  const authorize = event => {
    event.preventDefault();

    const data = {
      name: userName.value,
      email: userEmail.value,
      password: userPassword.value
    };

    if (onAuth && typeof onAuth === 'function') {
      onAuth(data);
    }
  };

  return (
    <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={authorize}>

      <div className="Input">
        <input required type="text" placeholder="Имя" ref={el => userName = el} />
        <label></label>
      </div>

      <div className="Input">
        <input type="email" placeholder="Электронная почта" onChange={validateEmail} ref={el => userEmail = el} />
        <label></label>
      </div>

      <div className="Input">
        <input required type="password" placeholder="Пароль" onChange={validatePassword} ref={el => userPassword = el} />
        <label></label>
      </div>

      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>

    </form>
  );
}

function validateEmail(event) {
  const currentValue = event.currentTarget.value;
  event.currentTarget.value = currentValue.replace(/[^A-Z0-9_@\-\.]/ig, '');
}

function validatePassword(event) {
  const currentValue = event.currentTarget.value;
  event.currentTarget.value = currentValue.replace(/\W/ig, '');
}