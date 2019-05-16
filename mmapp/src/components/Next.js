import React from 'react';

const Next = ({ singleFetch }) => {
	return(
		<div>
			<img onClick={singleFetch} alt="next" height="50px" src="https://cdn2.iconfinder.com/data/icons/arrows-vol-1-1/32/right2-512.png" />
		</div>
	)
}

export default Next;