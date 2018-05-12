import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Round extends React.Component {
	loadData(id) {
		fetch('/api/rounds/' + id + '/').then(res => {
			if (res.status != 200) {
				console.log('could not load round with id = ' + id);
				this.setState({round: null});
				return;
			}

			res.json().then(json => {
				this.setState({round: json});
			});
		});
	}

	componentDidMount() {
		this.loadData(this.props.match.params.id);
	}

	constructor(props) {
		super(props);

		this.loadData = this.loadData.bind(this);

		this.state = {
			round: 'loading'
		}
	}

	render() {
		if (this.state.round === 'loading') {
			return <h3>Раунд грузится...</h3>;
		} else if (this.state.round) {
			const badges = [];

			if (this.state.round.is_selection) {
				badges.push(<span className="badge badge-warning">отборочный</span>);
			}
			if (this.state.round.is_final) {
				badges.push(<span className="badge badge-danger">финал</span>);
			}
			if (this.props.user && this.props.user.rounds.includes(this.state.round.id)) {
				badges.push(<span className="badge badge-primary">вы участвуете</span>);
			}


			return (
				<div>
					<h1 className="round-title">{ this.state.round.title } { badges }</h1>
					<Link to={ '/tournament/' + this.state.round.tournament }>Перейти к чемпионату</Link>

					<p className="round-description"> { this.state.round.description } </p>
					<h3>Таски:</h3>
					<ol>
						{ this.state.round.tasks.map(task => 
							<li>
								<Link to={ '/task/' + task.id } key={ task.id }>
								{ task.title }
								</Link>
							</li>) }
					</ol>
				</div>
			);
		} else {
			return <h1>Такого раунда нет</h1>;
		}
	}
}

const mapStateToProps = store => ({
    user: store.loginFormReducer.user,
});

export default connect(mapStateToProps, null)(Round);