import React from 'react';
import './SquareCard.css';

const SquareCard = ({ theState }) => {
	let adn;
	if (theState.artistDisplayName) { adn = theState.artistDisplayName } else { adn = 'Unknown Artist' };
	let abd;
	if (theState.artistBeginDate && theState.artistEndDate) { abd = `(${theState.artistBeginDate}-${theState.artistEndDate})` }
	else if (theState.artistBeginDate) { abd = `(b. ${theState.artistBeginDate})` } else { abd = "" };
	let tst;
	if (theState.title) {tst = `${theState.title}`} else { tst = "" };
	let tsod;
	if (theState.objectDate) { tsod = `, ${theState.objectDate}` } else { tsod = "" };

	return(
		<div className="container">
			<a href={theState.primaryImage} target="_blank">
				<img 
				className="shadow"
				height={window.innerHeight / 1.35}
				width="auto"
				alt="Not Public Domain"
				src={theState.primaryImageSmall} />
			</a>
			<ul className="shadow">
			<li><strong>{adn} </strong>{abd}</li>
			<li><strong className="ital">{tst}</strong>{tsod}</li>
			<li className="smalltxt">{theState.medium}</li>
			</ul>
		</div>
	)
}

export default SquareCard;