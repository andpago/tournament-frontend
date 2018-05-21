import React from 'react';
import { loginAction } from '../actions/LoginForm.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cookies from 'js-cookie';
import '../styles/LogoutForm.scss';

class LogoutForm extends React.Component {
	logout() {
		this.props.loginAction(null); 
		Cookies.remove('key');

		fetch('/rest-auth/logout/', {
			method: 'POST',
		});
	}

	constructor(props) {
		super(props);

		this.logout = this.logout.bind(this);
	}

	render() {
		return ([
			<span className="logout-form-username">{ this.props.user.username } </span>,
			<button className="btn" onClick={ this.logout }>Выйти</button>
		]);
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ loginAction }, dispatch);

const mapStateToProps = store => ({
    user: store.loginFormReducer.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoutForm);