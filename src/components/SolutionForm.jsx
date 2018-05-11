import React from 'react';
import Cookies from 'js-cookie';

class SolutionForm extends React.Component {
	sendForm(event) {
		event.preventDefault();

		fetch('/api/solutions/submit/', {
			method: 'PUT',
			headers: new Headers({
				'Authorization': 'Token ' + Cookies.get('key'),
			}),
			body: new FormData(document.getElementById('solution-form')),
		});

		this.props.reloadHook();
		this.setState({
			text: "",
		});
	}

	constructor(props) {
		super(props);

		this.sendForm = this.sendForm.bind(this);
		this.state = {
			text: "",
		}
	}

	render() {
		return (
			<form id="solution-form">
				<div className="form-group">
					<label htmlFor="solution">Текст решения</label>
					<textarea className="form-control" 
							  name="text" 
							  id="solution-form-textarea" 
							  cols="30" 
							  rows="10" 
							  onChange={ () => { this.setState({text: this.value}); } }
							  value={ this.state.text } />
				</div>
				<input name="task" type="hidden" value={ this.props.task_id } />
				<button onClick={ this.sendForm } className="btn btn-primary"> Отправить </button>
			</form>
		);
	}
}

export default SolutionForm;