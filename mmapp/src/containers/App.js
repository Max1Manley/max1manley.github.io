import React, { Component } from 'react';
import publicDomain from './publicDomain';
import SearchBar from '../components/SearchBar';
import SquareCard from '../components/SquareCard';
import './App.css';

// http://api.openweathermap.org/data/2.5/weather?q=73013,us&APPID=727c2f55c3d9cc48f85080101f3b4ef0
class App extends Component {
	constructor () {
		super();
		this.state = {
			randomsLoaded: 0,
			random1: {},
			random2: {},
			random3: {},
			searched: {},
			searchfield: "",
		}
	}

	componentWillMount() {	

		fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${publicDomain[Math.floor(Math.random()*publicDomain.length)]}`)
		.then (response => response.json())
		.then (art => {
			this.setState({
				random1: art,
				randomsLoaded: this.state.randomsLoaded + 1,
			})
		});	
		fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${publicDomain[Math.floor(Math.random()*publicDomain.length)]}`)
		.then (response => response.json())
		.then (art => {
			this.setState({
				random2: art,
				randomsLoaded: this.state.randomsLoaded + 2,
			})
		});	
		// fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${publicDomain[Math.floor(Math.random()*publicDomain.length)]}`)
		// .then (response => response.json())
		// .then (art => {
		// 	this.setState({
		// 		random3: art,
		// 		randomsLoaded: this.state.randomsLoaded + 1,
		// 	})
		// });	


		fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/441352')
		.then (response => response.json())
		.then (data => {
			this.setState({
				random3: data,
			})
		});	


	}

	onSearchChange = (event) => {
		console.log('events is happening');
		if (event.key === 'Enter'){
			fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${event.target.value}`)
			.then (response => response.json())
			.then (art => {
				this.setState({
					searched: art,
				})
			});					
		}
	}

	render() { 
    	if (this.state.randomsLoaded >= 3) {	
    		console.log(this.state.random3.tags)
        	return (
		    	<div className="App">
			      	<SearchBar onSearchChange={this.onSearchChange} />
			      	<div className="flex">
				      	<SquareCard theState={this.state.random1}/>
				      	<SquareCard theState={this.state.random2}/>
				      	<SquareCard theState={this.state.random3}/>
				    </div>
		      	</div>    			
    		)		
    	} else {
    		return <div> Loading... </div>
    	}
	}	
	componentDidMount(){}		
}



export default App;