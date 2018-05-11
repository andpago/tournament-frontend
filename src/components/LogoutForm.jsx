import React from 'react';
import { loginAction } from '../actions/LoginForm.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cookies from 'js-cookie';

class LogoutForm extends React.Component {
	logout() {
		this.props.loginAction(null); 
		Cookies.remove('key');

		fetch('/rest-auth/logout/', {
			method: 'POST',
		}).then((res) => {
			console.log(res);
		});
	}

	constructor(props) {
		super(props);

		this.logout = this.logout.bind(this);
	}

	render() {
		return <button className="btn" onClick={ this.logout }>Выйти</button>
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ loginAction }, dispatch);

export default connect(null, mapDispatchToProps)(LogoutForm);