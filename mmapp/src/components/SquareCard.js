import React from 'react';
import './SquareCard.css';

const SquareCard = ({theState}) => {
	return(
		<div className="container">
			<div className="centered">{theState.title}</div>
			<img 
			alt="art"
			height="auto"
			width="75%"
			src={theState.primaryImageSmall} />
		</div>
	)
}

export default SquareCard;