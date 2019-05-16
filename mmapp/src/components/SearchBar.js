import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearchChange }) => {
	return(
		<div className="sticky">
			<input 
			placeholder="Search Met Museum"
			onKeyPress={onSearchChange} />
		</div>
	);
}

export default SearchBar;
