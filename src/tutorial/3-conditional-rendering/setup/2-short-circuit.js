import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const[text,setText]=useState('')
	const [isError, setIsError]=useState(false)
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return <>
	<h2>{firstValue}</h2>
	<h2>value: {secondValue}</h2>
	<button className='btn' onClick={()=>setIsError(!isError)}>Toggle error</button>
	{isError && <h1>error...</h1>}
	</>;
};

export default ShortCircuit;
