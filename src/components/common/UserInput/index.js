import React from 'react';

const UserInput = ({ value, placeholder, onChange, style }) => {
	return(
		<input value={value} placeholder={placeholder} onChange={onChange} style={style} />
	);
};

export default UserInput;