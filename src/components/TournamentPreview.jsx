import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TournamentPreview.scss';

export default function TournamentPreview(props) {
	console.log(props);

	const rounds = props.data.rounds.map((round, index) => {
		return <li key={ index }> {round.title}</li>;
	});

	return (
		<div className="tournament-preview col-12">
			<h4 className="tounament-preview-title">{ props.data.title }</h4>
			<p>{ props.data.description }</p>
			<ul>
				{ rounds }
			</ul>
			<Link to={ "/tournament/" + props.data.id }>
				<button className="btn btn-primary">
					Перейти к чемпионату
				</button>
			</Link>
		</div>
	);
}