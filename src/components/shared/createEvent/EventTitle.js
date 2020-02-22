import React, { useState, useEffect } from 'react';


const EventTitle = props => {
	const [title, setTitle] = useState('');
	useEffect(() => {
		console.log('i have arrived at the party!');
		document.title = 'preesent';
	}, []); //[] menas un only once

	const updateTitleText = event => {
		setTitle(event.target.value);
		console.log('current user title is ', title)
	}

	return (
		<div className="createEventCol" style={containerStyle}>
			<div style={{ position: 'relative' }}>
				<div style={textStyle}>Title</div>
				<input
					value={title}
					type="text"
					placeholder="Enter event title here"
					style={inputStyle}
					onChange={e => updateTitleText(e)} >
				</input>

			</div>
		</div>
	);
}


const containerStyle = {
	flexDirection: 'Column',
	flex: 1,
	position: 'flex',
	width: '488px',
	height: '151px',
	background: '#ffffff',
	// borderRadius: '4px',
	// justifyContent: 'left',

	// alignItems: 'left',
}

const textStyle = {
	fontFamily: 'sans-serif',
	fontWeight: 'bold',
	fontSize: '14px',
	display: 'flex',
	alignItems: 'center',
	// height: '10%',
	// color: 'black',
	// justifyContent: 'right',
	// alignItems: 'left'

}

const inputStyle = {
	fontFamily: 'sans-serif',
	fontWeight: 'bold',
	fontSize: '14px',
	height: '10%',
	margin: '50px',
	display: 'flex',
	alignItems: 'center',
	color: 'black'
}

export default EventTitle;
