import React, { useEffect, useState } from 'react';
import { Component } from "react";
import Calendar from 'react-calendar'
import { MDBSelect } from "mdbreact";
import Select, { components } from 'react-select';
import PageNav from './PageNav'
import List from 'react-list-select'
import makeAnimated from 'react-select/animated/';
import NextButtonCustom from './NextButtonCustom';
import 'bootstrap/dist/css/bootstrap.css';






const Confirm = () => {
	return (
		
		<div style={{ display: "flex" }}>
			<PageNav title="Confirmation" />
			<div className="EventConfirmationMainMenu" style={containerStyle}>
				<div className="titles" style={titleStyle}>
					<h1>JOHN'S BIRTHDAY CELEBRATION</h1>
					<h3> February 6th, 2020 at 17:30</h3>
				</div>
			<div className="button1" style={button1} >
				Attending
			</div>

			<button className="button2" style={button2}> 
				Wont be able to make it
			</button>

			



			</div >
			<div className="NextButtonParticipants" >
				<NextButtonCustom />

			</div>

		</div>



	);
}

const containerStyle = {
	border: '1px solid black',
	boxSizing: 'border-box',
	boxShadow: '10px 10px 10px rgba(103, 54, 107, 0.15)',
	borderRadius: 4,
	margin: '5%',
	height: '585px',
	width: '80%'


}

const friendsSelect = {
	width: '100px'
}

const titleStyle = {
	color: 'white',


}

const confirmPageButtons = {
	color:'white',
	display: 'flex',
	margin: '5%',
	borderRadius: '50%',
	
}

const button1 = {
	display: 'inline-block',
	flex: '1',
	borderRadius: '5px',
	color: 'black',
	padding:' 8px 32px',
	textAlign: 'center',
	textDecoration: 'none',
	fontSize: '16px',
	height:'6%',
	width:'10%',
	textColor:'black'
	
}

const button2 = {
	display: 'inline-block',
	flex: '1',
	borderRadius: '5px',
	color: 'black',
	padding:' 8px 32px',
	textAlign: 'center',
	textDecoration: 'none',
	fontSize: '16px',
	height:'6%',
	// width:'30%',
	textColor:'black',
	margin: '4%'
	
}

export default Confirm;


// const colourStyles = {
// 	control: styles => ({ ...styles, backgroundColor: 'white' }),
// 	option: (styles, { data, isDisabled, isFocused, isSelected }) => {

// 	  return {
// 		...styles,
// 		backgroundColor: isDisabled ? 'red' : 'blue',
// 		color: '#FFF',
// 		cursor: isDisabled ? 'not-allowed' : 'default',

// 	  };
// 	},

//   };