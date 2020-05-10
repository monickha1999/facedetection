import React from 'react';
import './hi.css';
const SearchBox = ({searchfield, searchChange}) =>
{
	return(
		<div className='pa2'>
		<input
		className='pa3 ba b--green bg-lightest-blue' 
		type='search' 
		placeholder='search robots' 
		onChange= {searchChange}
		/>
		</div>

	);


}
export default SearchBox;