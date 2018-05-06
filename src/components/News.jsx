import React from 'react';
import { Post } from './Post.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPosts, setNextUrl } from '../actions/News.js';

class News extends React.Component {
	componentDidMount() {
		this.triggerUpdate();
	}

	triggerUpdate() {
		fetch(this.props.nextUrl).then(response => {
			if (response.status != 200) {
				console.log('could not load news: status code ' + response.status);
				return;
			}

			response.json().then(data => {
				this.props.setPosts(this.props.data.concat(data.results));
				this.props.setNextUrl(data.next);
			});
		});
	}

	constructor(props) {
		super(props);
		this.triggerUpdate = this.triggerUpdate.bind(this);
	}

	render() {
		console.log('rerendering news');
		console.log(this.props);

		const posts = this.props.data.map(function(postData, index) {
			return <Post data={ postData } key={ index } />;
		});

		return (
	        <div className="row">
	            { posts }
	        </div>
	    );
	}
};

const mapStateToProps = store => ({
    data: store.newsReducer.data,
    nextUrl: store.newsReducer.nextUrl,
});

const mapDispatchToProps = dispatch => bindActionCreators({ setPosts, setNextUrl }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(News);