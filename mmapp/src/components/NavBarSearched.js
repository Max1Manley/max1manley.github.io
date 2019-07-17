import React from 'react';

const NavBarSearched = ({ onSearchChange, onClickHome, onClickAbout }) => {

	return(
		<div className="topBar">
			
			<font className="pointer leftPadding" onClick={onClickHome}>
				Home
			</font>
			
			<font className="pointer leftPadding" onClick={onClickAbout}>
				About
			</font>			

			<span className="air">
				<input 
				placeholder="Search Met Museum"
				onKeyPress={onSearchChange} />
			</span>

		</div>
	);
}

export default NavBarSearched;