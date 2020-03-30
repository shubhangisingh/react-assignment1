import React from 'react'
const userOutput = (props) => {
	return (
		<div >
		
		      <p > I'm {props.name} </p>
		      <p>{props.name}  is a good {props.gender} </p>
		</div>
		)

}

export default userOutput;