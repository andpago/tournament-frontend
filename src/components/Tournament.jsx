import React from 'react';
import { Link } from 'react-router-dom';

export default function roundnament(props) {
	console.log(props);

	const rounds = props.data.rounds.map((round, index) => {
		return <li key={ index }> {round.title}</li>;
	});

	return (
		<div className="tournament col-12 post">
			<h4 className="post-title">{ props.data.title }</h4>
			<p>{ props.data.description }</p>
			<ul>
				{ rounds }
			</ul>
			<button className="btn">
				<Link to={ "/tournament/" + props.data.id }>Перейти к чемипонату</Link>
			</button>
		</div>
	);
}