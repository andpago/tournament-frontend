import React from 'react';
import { Link } from 'react-router-dom';

class Task extends React.Component {
	loadData(id) {
		fetch('/api/tasks/' + id + '/').then(res => {
			if (res.status != 200) {
				console.log('could not load task with id = ' + id);
				this.setState({task: null});
				return;
			}

			res.json().then(json => {
				this.setState({task: json});
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
			task: 'loading'
		}
	}

	render() {
		console.log('props', this.props);

		if (this.state.task === 'loading') {
			return <h3>Задача грузится...</h3>;
		} else if (this.state.task) {
			console.log('task', this.state.task);
			return (
				<div>
					<h1 className="task-title">{ this.state.task.title }</h1>

					<Link to={ '/round/' + this.state.task.round }>Перейти к раунду</Link>
					<h3>Задание:</h3>
					<p className="task-text"> { this.state.task.text } </p>

					<h3>Решать:</h3>
					<textarea />
				</div>
			);
		} else {
			return <h1>Такой задачи нет</h1>;
		}
	}
}

export default Task;