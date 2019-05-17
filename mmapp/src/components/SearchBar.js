import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearchChange }) => {
	return(
		<div>
			<input 
			placeholder="Search Met Museum"
			onKeyPress={onSearchChange} />
		</div>
	);
}

export default SearchBar;
