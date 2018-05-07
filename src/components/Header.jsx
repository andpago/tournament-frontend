import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link className="nav-link" to="/">Новости <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/tournaments">Чемпионаты</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/solutions">Решения</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/profile">Профиль</Link>
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
