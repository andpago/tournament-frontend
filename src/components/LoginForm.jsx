import React from 'react';
import FormData from 'form-data';
import Cookies from 'js-cookie';
import { loginAction } from '../actions/LoginForm.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LoginForm extends React.Component {
	componentDidMount() {
		const key = Cookies.get('key');

		if (key && !this.props.user) {
			this.loginWithToken(key);
		}
	}

	loginWithToken(token) {
		console.log('logging in with token ' + token);

		const headers = new Headers({
			Authorization: 'Token ' + token,
		});

		console.log(headers);

		fetch('/rest-auth/get_user_info/', {
			headers,
		}).then(response => {
			response.json().then(json => {
				this.props.loginAction(json);
			});
		});
	}

	sendForm(event) {
		fetch('/rest-auth/login/', {
			method: 'POST',
			body: new FormData(document.getElementById('login-form')),
		}).then((res) => {
			if (res.status === 200) {
				res.json().then(json => {
					console.log('logged in as ' + this.state.login);
					Cookies.set('key', json.key);

					this.loginWithToken(json.key);
				});
			} else {
				console.log('failed to login');
			}
		});

		event.preventDefault();
	}

	changeLogin(event) {
		this.state = {
			login: event.target.value,
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			login: '',
		}
		this.sendForm = this.sendForm.bind(this);
		this.changeLogin = this.changeLogin.bind(this);
		this.loginWithToken = this.loginWithToken.bind(this);
	}

	render() {
		return (
				<form id="login-form" className="form-inline my-2 my-lg-0" action="/rest-auth/login/" method="POST">
					<input  className="form-control mr-sm-2" 
							name="username" 
							type="input" 
							placeholder="логин" 
							onChange={ this.changeLogin }
							aria-label="логин" />
					<input  className="form-control mr-sm-2" 
							name="password" 
							type="password"
							placeholder="пароль" 
							aria-label="пароль" />
					<button className="btn btn-outline-success my-2 my-sm-0" 
							onClick={ this.sendForm }>
								Войти
					</button>
			    </form>
		);
	}
};

const mapDispatchToProps = dispatch => bindActionCreators({ loginAction }, dispatch);

export default connect(null, mapDispatchToProps)(LoginForm);
