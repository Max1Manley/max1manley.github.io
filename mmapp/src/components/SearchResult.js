import React from 'react';
import './SearchResult.css';

const SearchResult = ({theState}) => {
	return(
		<div className="SearchResult">
			<div>{theState.test.title}</div>
		</div>
	)
}

export default SearchResult;