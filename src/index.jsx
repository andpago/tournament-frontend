import React from 'react';
import ReactDOM from 'react-dom';
import { initStore } from './util/store';
import { Provider } from 'react-redux';
import { Header } from './components/Header.jsx';
import News from './components/News.jsx';
import 'bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const store = initStore([]);

function App(props) {
    return (
    	<Provider store={ store }>
            <div>
                <Header />
                <br />
        		<div className="container" id="content">
                    <News data={ [] }/>
                </div>
            </div>
    	</Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
