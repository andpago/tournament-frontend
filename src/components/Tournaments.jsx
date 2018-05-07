import React from 'react';
import { Post } from './Post.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTournaments, setNextTournamentsUrl } from '../actions/Tournaments.js';
import { ACTION_AT_BOTTOM } from '../actions/BottomDetector.js';
import { store } from '../util/store.js';

class Tournaments extends React.Component {
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
				this.props.setTournaments(this.props.data.concat(data.results));
				this.props.setNextTournamentsUrl(data.next);
			});
		});
	}

	constructor(props) {
		super(props);
		this.triggerUpdate = this.triggerUpdate.bind(this);


		store.subscribe(() => {
			setTimeout(() => {
				if (this.props.lastAction.type == ACTION_AT_BOTTOM) {
					console.log('tournaments component updates');
					this.triggerUpdate();
				}
			}, 100); // FIXME: this is a very bad practice, should be removed
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
    data: store.tournamentsReducer.data,
    nextUrl: store.tournamentsReducer.nextUrl,
    lastAction: store.lastAction,
});

const mapDispatchToProps = dispatch => bindActionCreators({ setTournaments, setNextTournamentsUrl }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tournaments);

