import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SearchName from './pages/SearchName/SearchName';
import AllCards from './pages/Criteria-Pages/AllCards/AllCards';
import store from './store';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const app = document.getElementById('app')

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="about" component={About}></Route>
			<Route path="search-name" component={SearchName}></Route>
			<Route path="criteria/search-all-cards" component={AllCards}></Route>
		</Route>
	</Router>
, app);
