import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './util/store';
import { Provider } from 'react-redux';
import { Header } from './components/Header.jsx';
import BottomDetector from './components/BottomDetector.jsx';
import News from './components/News.jsx';
import 'bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


function App(props) {
    return (
    	<Provider store={ store }>
            <div>
                <Header />
                <br />
        		<div className="container" id="content">
                    <News data={ [] }/>
                </div>
                <BottomDetector />
            </div>
    	</Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
