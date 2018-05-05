import React from 'react';
import ReactDOM from 'react-dom';
import { initStore } from './util/store';
import { Provider } from 'react-redux';

const store = initStore([]);

function App(props) {
    return (
    	<Provider store={ store }>
    		<div>HELLO REACT</div>
    	</Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
