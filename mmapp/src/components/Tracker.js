import React from 'react';
import './Tracker.css';

const Tracker = ({ nN, theState }) => {
	return(
		<div className="Tracker">
			<div>{`${nN+1} of ${theState.searched.objectIDs.length}`}</div>
		</div>
	)
}

export default Tracker;