import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearchChange }) => {
	return(
		<div>
			<div>
				<input 
				placeholder="Search Art" 
				onKeyPress={onSearchChange} />
			</div>
		</div>
	);
}

export default SearchBar;
