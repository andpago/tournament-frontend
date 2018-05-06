import React from 'react';
import { Post } from './Post.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPosts } from '../actions/News.js';

class News extends React.Component {
	componentDidMount() {
		fetch('/api/news?limit=10&offset=0&format=json').then(response => {
			if (response.status != 200) {
				console.log('could not load news: status code ' + response.status);
				return;
			}

			response.json().then(data => {
				console.log('incoming data');
				console.log(data);
				this.props.setPosts(data);
			});
		});
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
});

const mapDispatchToProps = dispatch => bindActionCreators({ setPosts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(News);