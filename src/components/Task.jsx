import React from 'react';
import { Link } from 'react-router-dom';
import SolutionForm from './SolutionForm.jsx';
import Cookies from 'js-cookie';
import '../styles/Task.scss';

class Task extends React.Component {
	loadData(id) {
		fetch('/api/tasks/' + id + '/', {
			headers: new Headers({
				'Authorization': 'Token ' + Cookies.get('key'),
			}),
		}).then(res => {
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

	updateComponent() {
		this.loadData(this.props.match.params.id);
	}

	componentDidMount() {
		this.updateComponent();
	}

	constructor(props) {
		super(props);

		this.loadData = this.loadData.bind(this);
		this.updateComponent = this.updateComponent.bind(this);

		this.state = {
			task: 'loading'
		}
	}

	render() {
		if (this.state.task === 'loading') {
			return <h3>Задача грузится...</h3>;
		} else if (this.state.task) {
			const solutions = this.state.task.solutions.map(solution => (
				<div className="solution">
					<p> 
						{ solution.text }
						{ solution.correct ? <span className="badge badge-success">верно</span> : <span className="badge badge-danger">неверно</span> }
					</p>
				</div>
			));

			return (
				<div>
					<h1 className="task-title">{ this.state.task.title }</h1>

					<Link to={ '/round/' + this.state.task.round }>Перейти к раунду</Link>
					<h3>Задание:</h3>
					<p className="task-text"> { this.state.task.text } </p>

					<h3>Ваши решения:</h3>
					{ solutions }

					<h3>Решать:</h3>
					<SolutionForm 
						task_id={ this.state.task.id } 
						reloadHook={ () => {setTimeout(this.updateComponent, 100);} } />
				</div>
			);
		} else {
			return <h1>Такой задачи нет</h1>;
		}
	}
}

export default Task;