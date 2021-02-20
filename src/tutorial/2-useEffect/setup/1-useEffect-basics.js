import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
	const [value, setValue] = useState(2);
	useEffect(() => {
document.title = `new messages(${value})`
	})

	return <>
		<h1>{value}</h1>
		<button className='btn' onClick={() => setValue(value + 1)}>click</button>
	</>;
};

export default UseEffectBasics;
