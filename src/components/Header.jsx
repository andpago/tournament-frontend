import React from 'react';

export function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Турнир</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse"
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
  aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Новости <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Чемпионаты</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Решения</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Профиль</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0" action="/login" method="POST">
      <input className="form-control mr-sm-2" type="input" placeholder="логин" aria-label="логин" />
      <input className="form-control mr-sm-2" type="password" placeholder="пароль" aria-label="пароль" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Войти</button>
    </form>
  </div>
</nav>
    );
}
