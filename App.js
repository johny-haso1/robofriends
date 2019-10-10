import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cardlist from './Cardlist';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import './App.css';

import { setSearchField, requestRobots } from './action';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}


class App extends Component {
			componentDidMount() {
			this.props.onRequestRobots();
		}


	render() {
		const {searchField, onSearchChange, robots, isPending} = this.props;
		const filteredRobots = robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return isPending ?
			<h1>loading...</h1> :
			
			(
				<div className='tc'>
					<h1 className='f1'>roboFriends</h1>
					<SearchBox searchChange={onSearchChange}/> 
				<Scroll>
					<Cardlist robots={filteredRobots}/>
				</Scroll>
				</div>
			);
		}
	}
export default connect(mapStateToProps, mapDispatchToProps)(App);