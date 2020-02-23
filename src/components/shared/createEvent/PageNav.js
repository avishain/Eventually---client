import React from 'react';
import MdArrowDropright from 'react-ionicons/lib/MdArrowDropright';
import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward'
import { useEffect, useState } from 'react';




const PageNav = path => {

	


	return (

		<div className="PageNavClass" style={{ width: '100%', display: 'flex', flex: '1' }}>
			<div style={path.title === 'General details' ? selectedStyle : notSelectedStyle}  >
				General details
				<MdArrowDropright color='black' />
			</div>
			<div style={path.title === 'Participants' ? selectedStyle : notSelectedStyle}>
				Participants
				{/* <h1>{path.title}</h1> */}
				<MdArrowDropright color='black' />
			</div>
			<div style={path.title === 'Confirmation' ? selectedStyle : notSelectedStyle}>
				Confirmation
			</div>

		</div >



	);
}


const notSelectedStyle = {
	color: 'grey'

}
const selectedStyle = {
	color: 'black',
	fontWeight: 'bold',
}

export default PageNav;