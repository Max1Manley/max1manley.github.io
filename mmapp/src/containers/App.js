//Max Manley 2019
import React, { Component } from 'react';
import publicDomain from './publicDomain';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import SquareCard from '../components/SquareCard';
import './App.css';

class App extends Component {
	constructor () {
		super();
		this.state = {
			randomsLoaded: 0,
			random0: {},
			random1: {},
			random2: {},
			searched: null,
			searchfield: "",
			searchReply: 0,
			route: "",
			test0: null,
			test1: null,
			test2: null,
		}
	}

	componentWillMount() {	

		fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${publicDomain[Math.floor(Math.random()*publicDomain.length)]}`)
		.then (response => response.json())
		.then (art => {
			this.setState({
				random0: art,
				randomsLoaded: this.state.randomsLoaded + 1,
			})
		});	
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
				randomsLoaded: this.state.randomsLoaded + 1,
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
				fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.state.searched.objectIDs[0]}`)
				.then(response => response.json())
				.then(art => {
					this.setState({
						test0: art,
						searchReply: this.state.searchReply + 1,
					})
				})
				fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.state.searched.objectIDs[1]}`)
				.then(response => response.json())
				.then(art => {
					this.setState({
						test1: art,
						searchReply: this.state.searchReply + 1,
					})
				})
				fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.state.searched.objectIDs[2]}`)
				.then(response => response.json())
				.then(art => {
					this.setState({
						test2: art,
						searchReply: this.state.searchReply + 1,
					})
				})
			});					
		}
	}

	render() {
		if (this.state.randomsLoaded >= 3 && this.state.searchReply >= 3) {
			console.log(this.state);
			return (
		    	<div className="App">
		    		<SearchBar className="sticky" onSearchChange={this.onSearchChange} />
		    		<SearchResult theState={this.state} />
			      	<div className="white">
			      		<SquareCard theState={this.state.test0} />
			    	</div>
			    	<div className="lightGrey">
			    		<SquareCard theState={this.state.test1} />
			    	</div>
			    	<div className="grey">
			    		<SquareCard theState={this.state.test2} />
		    		</div>
		    	</div>   				
			)
		} else if (this.state.randomsLoaded >= 3) {	
    		console.log(this.state);
        	return (
		    	<div className="App">
			      	<SearchBar className="sticky" onSearchChange={this.onSearchChange} />
			      	<div className="white">
			      		<SquareCard theState={this.state.random0} />
			    	</div>
			    	<div className="lightGrey">
			    		<SquareCard theState={this.state.random1} />
			    	</div>
			    	<div className="grey">
			    		<SquareCard theState={this.state.random2} />
		    		</div>
		    	</div>    			
    		)		
    	}  

    	else {
    		return <div>Loading...</div>
    	}
	}	

	componentDidMount(){}		
}



export default App;