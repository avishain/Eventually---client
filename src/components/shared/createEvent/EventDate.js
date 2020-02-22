import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import {Field} from 'redux-form';


// const [click, setclick] = useState(false);

// function setClick() {
// 	useState(false);
// }

const EventDate = props => {

	const [click, setclick] = useState(false);
	const { radioButtonValue, checked } = props;
	const [dateType, setDateType] = useState("");
	// console.log('on start current user datetyoe is ', dateType)

	const updateDateType = date => {
		console.log('in updatedatatype date.value is ', date);
		setDateType(date);
		console.log('current user datetyoe is ', date)
	}

	return (
		<form className="createEventCol" style={containerStyle}>
			<div style={textStyle}>Date Selection</div>
			<div className="form-check">
				<input
					// onChange={e => updateDateType(e)}
					onClick={() => updateDateType('Public')}
					type="radio"
					name="EventDateSelect"
					value="Public"
					// value={dateType}
					className="form-check-input"
				// onClick={setclick}
				// checked={click}
				/>
				Public
			</div>

			<div className="form-check">
				<label>
					<input
						type="radio"
						name="EventDateSelect"
						value="Self"
						className="form-check-input"
						onClick={() => updateDateType('Self')}
					/>
					Self
    </label>
			</div>


		</form>
	);
}




const containerStyle = {
	flexDirection: 'Column',
	flex: 2,
	position: 'flex',
	width: '490px',
	height: '84px',
	background: '#ffffff',
	justifyContent: 'center',

	alignItems: 'center'
}

const textStyle = {
	fontFamily: 'sans-serif',
	fontWeight: 'bold',
	fontSize: '14px',
	display: 'flex',
	// height: '10%',
	// color: 'black',
	justifyContent: 'left',
	margin: '5px'

}

const inputStyle = {
	fontFamily: 'sans-serif',
	placeholder: "123-ssss-8901",
	fontWeight: 'bold',
	fontSize: '14px',
	height: '10%',
	margin: '50px',
	color: 'black'
}

export default EventDate;
