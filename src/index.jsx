import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './util/store';
import { Provider } from 'react-redux';
import Header from './components/Header.jsx';
import BottomDetector from './components/BottomDetector.jsx';
import News from './components/News.jsx';
import Tournaments from './components/Tournaments.jsx';
import Tournament from './components/Tournament.jsx';
import Round from './components/Round.jsx';
import Task from './components/Task.jsx';
import 'bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import Profile from './components/Profile.jsx';

function App(props) {
    const HeaderWithRouter = withRouter(Header);

    return (
    	<Provider store={ store }>
            <BrowserRouter>
                <div>
                    <HeaderWithRouter />
                    <br />
            		<div className="container" id="content">
                        <Switch>
                            <Route exact path='/'>
                                <News />
                            </Route>
                            <Route path='/tournaments'>
                                <Tournaments />
                            </Route>
                            <Route path='/profile'>
                                <Profile />
                            </Route>
                            <Route path='/tournament/:id' component={ Tournament } />
                            <Route path='/round/:id' component={ Round } />
                            <Route path='/task/:id' component={ Task } />
                        </Switch>
                    </div>
                    <BottomDetector />
                </div>
            </BrowserRouter>
    	</Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
