import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Home from './components/Home';
import { connect } from 'react-redux';
import { setUser } from './redux/actions';
import { Route } from 'react-router-dom';
import EventOffer from './components/EventOffer';
import Event from './components/Event';
import CreateEvent from './components/CreateEvent';

const userID = '5e2616c84f1ce248f9fd09e3';
// const userID = '5e2616c84f1ce248f9fd09e5';

const App = props => {
	const [imageSource, setImageSource] = useState('');
	const [inbox, setInbox] = useState();
	const [ready, setReady] = useState(false);

	useEffect(() => {
		if (!ready) {
			fetch(`https://aqueous-fortress-81697.herokuapp.com/users/${userID}`)
				.then(response => response.json())
				.then(data => {
					props.setUser(data);
					setImageSource(data.profileImage);
					setInbox(data.inbox);
					setReady(true);
				})
				.catch(error => console.log(error));
		}
	});

	return (
		<div className="App" style={{ backgroundColor: '#F3EBE3', height: '100%' }} >
			{
				ready && <React.Fragment>
					<Header {...{ imageSource, inbox }} />
					<div style={{ minHeight: 'calc(100vh - 150px)' }}>
						<Route path="/EventOffer" component={EventOffer} />
						<Route path="/Event/:id" component={Event} />
						<Route path="/" exact component={Home} />
						<Route path="/CreateEvent" exact component={CreateEvent} />
					</div>
					<Footer />
				</React.Fragment>
			}
		</div>
	);
}

export default connect(null, { setUser })(App);
