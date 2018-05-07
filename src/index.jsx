import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './util/store';
import { Provider } from 'react-redux';
import { Header } from './components/Header.jsx';
import BottomDetector from './components/BottomDetector.jsx';
import News from './components/News.jsx';
import Tournaments from './components/Tournaments.jsx';
import 'bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App(props) {
    return (
    	<Provider store={ store }>
            <BrowserRouter>
                <div>
                    <Header />
                    <br />
            		<div className="container" id="content">
                        <Switch>
                            <Route exact path='/'>
                                <News />
                            </Route>
                            <Route path='/tournaments'>
                                <Tournaments />
                            </Route>
                        </Switch>
                    </div>
                    <BottomDetector />
                </div>
            </BrowserRouter>
    	</Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
