import React from 'react';

const UserInput = ({ onChange, style, value }) => {
	return(
		<input value={value} onChange={onChange} style={style} />
	);
};

export default UserInput;