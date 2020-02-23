import React, { useEffect, useState } from 'react';
import Header from '../Header'
import EventCard from '../../home/EventCard';
import EventTitle from './EventTitle'
import EventDate from './EventDate'
import Calendar from 'react-calendar'
import TimePicker from 'rc-time-picker';
import NextPageButton from './NextPageButton'
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Participants from './Participants';
import Logo from '../header/Logo';
import Tabs from '../header/Tabs';
import Notifications from '../header/Notifications';
import UserIMage from '../header/UserIMage';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import EventType from './EventType'
import CreateEventButton from '../../home/CreateEventButton';
import PageNav from './PageNav';
import { reduxForm, Field } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';




const selectionStatus = [false, false];




const CreateEvent = (props) => {

	const now = moment().hour(0).minute(0);
	const format = 'hh:mm';

	const [dateSelected, setDateSelected] = useState('');
	const [timeSelected, setTimeSelected] = useState(0);



	const updateDate = date => {
		console.log('in updatedatatype date.value is ', date);
		setDateSelected(date);
		console.log('current user datetyoe is ', dateSelected)
	}
	const updateTime = time => {
		console.log('in updatetime date.value is ', time && time.format(format));
		setTimeSelected(time);
		console.log('current user datetyoe is ', time)
	}
	return (
		<Router>
			<div className="create-event" style={containerStyle}>
				<div className="eventCreateColContainer" >
					<PageNav title="General details" className="pageNav" />
					<EventTitle />
					<EventDate />
					<EventType />
				</div>
				<div className="eventCreateColContainersecond">
					<Calendar onChange={(date) => updateDate(date)} className="Calendar" width='100%' />

					<div className="TimePicker">
						TIME
					<TimePicker showSecond={false} defaultValue={now} onChange={timeSelected => updateTime(timeSelected)} />
					</div>
					<Route path="createEvent/participants" exact component={Participants} />
				</div>

			</div>
			<div className="nextButtonGeneralDetails" >
				<NextPageButton />
			</div>
		</Router>



	);
}

const containerStyle = {
	border: '1px solid #C4C4C4',
	boxSizing: 'border-box',
	boxShadow: '6px 6px 10px rgba(103, 54, 107, 0.15)',
	borderRadius: '4',
	margin: '5',
	display: 'flex',
	width: '45%'

}





export default CreateEvent;


