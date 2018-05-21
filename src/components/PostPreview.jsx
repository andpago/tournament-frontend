import React from 'react';
import '../styles/PostPreview.scss';
import { Link } from 'react-router-dom';


export function PostPreview(props) {
	const text = props.data.text.length > 500 ? props.data.text.slice(0, 500) + ' ...' : props.data.text;
	return (
		<div className="post col-md-8 col-sm-12">
			<h3 className="post-title">{ props.data.title }</h3>
			<p>{ text }</p>
			<Link to={'/post/' + props.data.id} className="btn btn-primary"> Читать </Link>
		</div>
	);
}