import React from 'react';
import { loginAction } from '../actions/LoginForm.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cookies from 'js-cookie';

class LogoutForm extends React.Component {
	render() {
		return <button className="btn" onClick={ () => { 
			this.props.loginAction(null); 
			Cookies.remove('key');
			Cookies.remove('username');
		} }>Выйти</button>
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ loginAction }, dispatch);

export default connect(null, mapDispatchToProps)(LogoutForm);