import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { atBottomAction } from '../actions/BottomDetector.js';

class BottomDetector extends React.Component {
	componentDidMount() {
		window.onscroll = ev => {
		    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		    	console.log('bottom detected');
		        this.props.atBottomAction();
		    }
		};
	}

	render() {
		return (
			<div className="bottom-detector" style={{display: 'none'}} />
		);
	}
};

const mapDispatchToProps = dispatch => bindActionCreators({ atBottomAction }, dispatch);

export default connect(null, mapDispatchToProps)(BottomDetector);