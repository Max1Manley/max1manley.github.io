import React from 'react';
import './SearchResult.css';

const SearchResult = ({theState}) => {
	return(
		<div className="SearchResult">
			<div>{theState.test0.title}</div>
			<div>{theState.test1.title}</div>
			<div>{theState.test2.title}</div>
		</div>
	)
}

export default SearchResult;