import React from 'react';
import { connect } from 'react-redux';

class Profile extends React.Component {
	render() {
		if (this.props.user) {
			return (
				<div className="profile">
					<h1 className="profile-username"> { this.props.user.username } </h1>
					<img src={ this.props.user.avatar } alt="avatar" className="avatar"/>
					<p className="bio"> { this.props.user.bio } </p>
				</div>
			);
		} else {
			return <h1>Вы не залогинены</h1>;
		}
	}
}

const mapStateToProps = store => ({
    user: store.loginFormReducer.user,
});

export default connect(mapStateToProps, null)(Profile);

