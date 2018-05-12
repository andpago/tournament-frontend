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
					Cookies.set('key', json.key);

					this.loginWithToken(json.key);
				});
			} else {
				if (res.status === 400) {
					res.json().then(json => {
						if (json.hasOwnProperty('non_field_errors') && 
							json.non_field_errors[0] == 'Unable to log in with provided credentials.') {
							this.setState({
								valid: false,
							});
						}
					});
				}

				console.log('failed to login');
			}
		});

		event.preventDefault();
	}

	constructor(props) {
		super(props);
		this.state = {
			valid: true,
		}
		this.sendForm = this.sendForm.bind(this);
		this.loginWithToken = this.loginWithToken.bind(this);
	}

	render() {
		const validClass = this.state.valid ? '' : 'is-invalid';

		return (
				<form id="login-form" className="form-inline my-2 my-lg-0" action="/rest-auth/login/" method="POST">
					<input  className={"form-control mr-sm-2 " + validClass}
							name="username" 
							type="input" 
							placeholder="логин" 
							onChange={ this.changeLogin }
							aria-label="логин" />
					<input  className={"form-control mr-sm-2 " + validClass}
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
