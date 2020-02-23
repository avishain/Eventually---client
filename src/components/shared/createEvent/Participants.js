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
import NextPageButton from './NextPageButton';
import NextPageButtonCustom from './NextButtonCustom';

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

const Participants = () => {
	return (
		<div >
			<div className="friendsSelectionMainWindow" style={containerStyle}>
				<PageNav title="Participants" />
				<div className="FriendsSelectionHead">Invite people to event</div>
				<Select options={options} isMulti placeholder="name or email" noOptionsMessage={() => "No users found"} components={makeAnimated()} className="friendsSelect" />
			</div >
			<div className="NextButtonParticipants" >
				<NextPageButtonCustom path='/createEvent/participants/confirmPage' title='Next' />
			</div>

		</div>



	);
}

const containerStyle = {
	boxSizing: 'border-box',
	boxShadow: '10px 10px 10px rgba(103, 54, 107, 0.15)',
	borderRadius: 4,
	// margin: '5%',
	height: '585px',
	width: '45%'

}



export default Participants;

