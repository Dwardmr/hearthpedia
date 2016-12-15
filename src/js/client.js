import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Search from './pages/Search/Search';
import store from './store';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const app = document.getElementById('app')

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="about" component={About}></Route>
			<Route path="search" component={Search}></Route>
		</Route>
	</Router>
, app);
