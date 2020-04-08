import React from 'react'
import './userInput.css'
const userInput = (props) => {
	return (
		<div className= 'box' >
		 <h3> Input text</h3>
		     
		      <input 
		      type='text' 
		      onChange= {props.changed} />
		</div>
		)

}

export default userInput;