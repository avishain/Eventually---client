import React, { useEffect, useState } from 'react';
import { Component } from "react";
import Calendar from 'react-calendar'
import { MDBSelect } from "mdbreact";
import Select, { components } from 'react-select';
import UsersList from '../Users/UsersList'
import PageNav from './PageNav'
import List from 'react-list-select'
import makeAnimated from 'react-select/animated/';
import NextButtonCustom from './NextButtonCustom';
import 'bootstrap/dist/css/bootstrap.css';

const colourOptions = [1, 2, 3] //our array of colours
const Users = [
	{
		username: "elad",
		email: "www@www,com"
	},
	{
		username: "eli",
		email: "www@www.com"
	}];

let items = [
	'Google',
	'TED',
	'GitHub',
	'Big Think',
	'Microsoft',
]


const options = [
	{ value: 'elad', label: 'elad | www@www,com' },
	{ value: 'eli', label: 'eli | wwwWww.com' },
	{ value: 'vanilla', label: 'Vanilla' }


]

const Participants = ( ) => {
	return (
		<div style={{ display: "flex" }}>
			<div className="friendsSelectionMainWindow" style={containerStyle}>
				<PageNav title="Participants" />

				<div className="selectionHead">Invite people to event</div>
				<Select options={options} isMulti placeholder="name or email" noOptionsMessage={() => "No users found"} components={makeAnimated()} className="friendsSelect" />

				{/* <User /> */}
			</div >
			<div className="NextButtonParticipants" >
				<NextButtonCustom path='/createEvent/participants/confirm' />

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

export default Participants;


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