import React from 'react';
import { PostPreview } from './PostPreview.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPosts, setNextUrl } from '../actions/News.js';
import { ACTION_AT_BOTTOM } from '../actions/BottomDetector.js';
import { store } from '../util/store.js';

class News extends React.Component {
	componentDidMount() {
		this.triggerUpdate();
	}

	triggerUpdate() {
		console.log('trying to load more posts...');
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

		store.subscribe(() => {
			setTimeout(() => {
				console.log('subsciption called, lastAction.type == ' + this.props.lastAction.type);
				if (this.props.lastAction.type == ACTION_AT_BOTTOM) {
					console.log('news component updates');
					this.triggerUpdate();
				}
			}, 100); // FIXME: this is a very bad practice, should be removed
		});
	}

	render() {
		console.log('rerendering news');
		console.log(this.props);

		const posts = this.props.data.map(function(postData, index) {
			return <PostPreview data={ postData } key={ index } />;
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
    lastAction: store.lastAction,
});

const mapDispatchToProps = dispatch => bindActionCreators({ setPosts, setNextUrl }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(News);

