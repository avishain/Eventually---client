import React from 'react';
import { NavLink } from 'react-router-dom';

const ToEventPage = props => {
	return (
		<div className='confirmButton' style={props.name === 'Attend' ? textStyle : textStyleNotAttend}>{props.name}</div>
	);
}
const containerStyle = {

	display: 'flex',
	margin: '10%'


}

const textStyle = {
	fontFamily: 'sans-serif',
	fontWeight: 'bold',
	fontSize: '14px',
	color: 'green',
	background: 'white',
	borderRadius: '20px',
	justifyContent: 'center',
	alignItems: 'center',
	width: '11%',
	height: '40px',
	position: 'absolute',
	right: '50%',
	display: 'flex',
	cursor: 'pointer',
	top: '50%'



}

const textStyleNotAttend = {
	fontFamily: 'sans-serif',
	fontWeight: 'bold',
	fontSize: '14px',
	color: 'red',
	background: 'white',
	borderRadius: '20px',
	justifyContent: 'center',
	alignItems: 'center',
	width: '11%',
	height: '40px',
	position: 'absolute',
	right: '35%',
	display: 'flex',
	cursor: 'pointer',
	top: '50%'



}

export default ToEventPage;
