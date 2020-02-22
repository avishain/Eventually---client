import React, { useState } from 'react';

const EventType = props => {

	const [EventType, setEventType] = useState('Barbque')


	const updateEventType = type => {
		setEventType(type);
		console.log('type: ', type);
		console.log('current user datetyoe is ', EventType)

	}
	return (
		<form
			className="createEventCol" style={containerStyle}>
			<div style={textStyle}>Event Type</div>
			<div className="form-check">

				<input
					type="radio"
					name="EventTypeSelect"
					value="Barbque"
					className="form-check-input"
					onChange={() => updateEventType('Barbque')}
				/>
				Barbque
			</div>

			<div className="form-check">
				<label>
					<input
						type="radio"
						name="EventTypeSelect"
						value="Hiking"
						className="form-check-input"
						onChange={() => updateEventType('Hiking')}
					/>
					Hiking
    </label>
			</div>

			<div className="form-check">
				<label>
					<input
						type="radio"
						name="EventTypeSelect"
						value="Birthday"
						className="form-check-input"
						onChange={() => updateEventType('Birthday')}
					/>
					Birthday
    </label>
			</div>

			<div className="form-check">
				<label>
					<input
						type="radio"
						name="EventTypeSelect"
						value="Engagement"
						className="form-check-input"
						onChange={() => updateEventType('Engagement')}
					/>
					Engagement
    </label>
			</div>

			<div className="form-check">
				<label>
					<input
						type="radio"
						name="EventTypeSelect"
						value="Bachelor/Bachelorette"
						className="form-check-input"
						onChange={() => updateEventType('Bachelor/Bachelorette')}

					/>
					Bachelor/Bachelorette
    </label>
			</div>

			<div className="form-check">
				<label>
					<input
						type="radio"
						name="EventTypeSelect"
						value="Babyshower"
						className="form-check-input"
						onChange={() => updateEventType('Babyshower')}

					/>
					Babyshower
    </label>
			</div>

		</form>
	);
}
const containerStyle = {
	// flexDirection: 'Column',
	// flex: 2,
	// position: 'flex',
	// width: '490px',
	background: '#ffffff',
	// justifyContent: 'center',


	// alignItems: 'center',
}

const textStyle = {
	fontFamily: 'sans-serif',
	fontWeight: 'bold',
	fontSize: '14px',
	display: 'flex',
	alignItems: 'center',
	// height: '10%',
	// color: 'black',
	justifyContent: 'left',

}



export default EventType;
