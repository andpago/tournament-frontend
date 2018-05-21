import React from 'react';
import '../styles/Post.scss';


class Post extends React.Component {
	getData() {
		fetch('/api/news/' + this.props.match.params.id + '/').then(resp => {
			if (resp.status == 200) {
				resp.json().then(json => {
					this.setState({
						data: json,
						ok: true,
					});
				});
			} else {
				this.setState({
					data: {},
					ok: false,
				})
			}
		});
	}

	constructor(props) {
		super(props);

		this.getData = this.getData.bind(this);
		this.state = {
			data: {},
			ok: null,
		}
	}

	componentDidMount() {
		if (!this.props.data) {
			this.getData();
		} else {
			this.setState({
				data: this.props.data,
				ok: true,
			});
		}
	}

	render() {

		if (this.state.ok === true) {
			return (
				<div className="post col-md-8 col-sm-12">
					<h1 className="post-title">{ this.state.data.title }</h1>
					<p>{ this.state.data.text }</p>
				</div>
			);
		} else if (this.state.ok === null) {
			return <p>Загрузка...</p>;
		} else {
			return <h3>Кажется, что-то сломалось :(</h3>;
		}
	}
}

export default Post;
