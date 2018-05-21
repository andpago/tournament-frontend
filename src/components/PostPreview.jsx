import React from 'react';
import '../styles/PostPreview.scss';


export function PostPreview(props) {
	return (
		<div className="post col-md-8 col-sm-12">
			<h3 className="post-title">{ props.data.title }</h3>
			<p>{ props.data.text }</p>
		</div>
	);
}