import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm.jsx';
import LogoutForm from './LogoutForm.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function NavItem(props) {
  return (
    <li className={ 'nav-item ' + ((props.location == props.path) ? 'active' : '')}>
        <Link className="nav-link" to={ props.path }>{ props.text }</Link>
    </li>
  );
}

class Header extends React.Component {
  render() {
    const path = this.props.location.pathname;
    const loginData = this.props.user ? 
        <LogoutForm />: 
        <LoginForm />;

    const userLinks = this.props.user ? [
      <NavItem path="/my_tournaments" location={ path } text="Мои чемпионаты" />,
      <NavItem path="/my_solutions" location={ path } text="Мои решения" />,
    ] : null;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">Турнир</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse"
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
  aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <NavItem path="/" location={ path } text="Новости" />
      <NavItem path="/tournaments" location={ path } text="Чемпионаты" />
      <NavItem path="/profile" location={ path } text="Профиль" />
      { userLinks }
    </ul>
    { loginData }
  </div>
</nav>
    );
  }
}

const mapStateToProps = store => ({
    user: store.loginFormReducer.user,
});

export default connect(mapStateToProps, null)(Header);

