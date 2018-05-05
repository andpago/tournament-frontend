import React from 'react';
import ReactDOM from 'react-dom';
import { initStore } from './util/store';
import { Provider } from 'react-redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const store = initStore([]);

function App(props) {
    return (
    	<Provider store={ store }>
    		<div>
                HELLO REACT
                <button className="btn btn-success"> Button </button>
            </div>
    	</Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
