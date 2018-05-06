import React from 'react';
import '../styles/Post.scss';


export function Post(props) {
	return (
		<div className="post col-md-8 col-sm-12">
			<h3 className="post-title">{ props.data.title }</h3>
			<p>{ props.data.text }</p>
		</div>
	);
}