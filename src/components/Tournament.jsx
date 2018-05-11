import React from 'react';
import { Link } from 'react-router-dom';

class Tournament extends React.Component {
	loadData(id) {
		fetch('/api/tournaments/' + id + '/').then(res => {
			if (res.status != 200) {
				console.log('could not load tournament with id = ' + id);
				this.setState({tournament: null});
				return;
			}

			res.json().then(json => {
				this.setState({tournament: json});
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
			tournament: 'loading'
		}
	}

	render() {
		console.log('props', this.props);

		if (this.state.tournament === 'loading') {
			return <h3>Чемпионат грузится...</h3>;
		} else if (this.state.tournament) {
			console.log('tournament', this.state.tournament);
			return (
				<div>
					<h1 className="tournament-title">{ this.state.tournament.title }</h1>
					<p className="tournament-description"> { this.state.tournament.description } </p>
					<h3>Раунды:</h3>
					<ol>
						{ this.state.tournament.rounds.map(round => 
							<li>
								<Link to={ '/round/' + round.id } key={ round.id }>
								{ round.title }
								</Link>
							</li>) }
					</ol>
				</div>
			);
		} else {
			return <h1>Такого чемпионата нет</h1>;
		}
	}
}

export default Tournament;