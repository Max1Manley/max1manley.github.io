//Max Manley 2019
import React, { Component } from 'react';
import publicDomain from './publicDomain';
import SearchBar from '../components/SearchBar';
import Tracker from '../components/Tracker';
import SquareCard from '../components/SquareCard';
import Next from '../components/Next';
import Back from '../components/Back';
import './App.css';

//figure out searchbar / future home button placement

var nN = 0;

class App extends Component {
	constructor () {
		super();
		this.state = {
			randomsLoaded: 0,
			random0: {},
			random1: {},
			random2: {},
			searched: null,
			route: "",
			test: null,
			nN: 0,
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
			this.setState({	nN: 0, });
			nN = 0;
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
						test: art,
						route: "displaySearch",
					})
				})
			})					
		}
	}

	singleFetch = () =>{
		if (nN < this.state.searched.objectIDs.length - 1){
			fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.state.searched.objectIDs[nN+1]}`)
			.then(response => response.json())
			.then(art => {
				this.setState({
					test: art,
					nN: this.state.nN + 1,
				})
				nN++;
			})			
		}
	}

	backFetch = () =>{
		if(nN > 0){
			fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.state.searched.objectIDs[nN-1]}`)
			.then(response => response.json())
			.then(art => {
				this.setState({
					test: art,
					nN: this.state.nN - 1,
				})
				nN--;
			})			
		}
	}

	render() {
		if (this.state.randomsLoaded >= 3 && this.state.route === "displaySearch") {
			console.log('displaySearch', this.state.searched.objectIDs.length);
			return (
		    	<div className="App">
		    		<SearchBar onSearchChange={this.onSearchChange} />
		    		<Tracker nN={this.state.nN} theState={this.state} />
			      	<div className="flexVC">
			      		<Back Fetch={this.backFetch} />
			      		<SquareCard theState={this.state.test} />
			      		<Next Fetch={this.singleFetch} />
			    	</div>
		    	</div>   				
			)
		} else if (this.state.randomsLoaded >= 3) {	
    		console.log('ranodms loaded', this.state);
        	return (
		    	<div className="App">
			      	<SearchBar onSearchChange={this.onSearchChange} />
			      	<div className="white flexVC">
			      		<SquareCard theState={this.state.random0} />
			    	</div>
			    	<div className="lightGrey flexVC">
			    		<SquareCard theState={this.state.random1} />
			    	</div>
			    	<div className="grey flexVC">
			    		<SquareCard theState={this.state.random2} />
		    		</div>
		    	</div>    			
    		)		
    	} else {
    		return <div>Loading...</div>
    	}
	}	

	componentDidMount(){}		
}

//Artist I've learned of/more about while making this.
//henri de toulouse-lautrec
//Gustave Moreau
//el greco


export default App;