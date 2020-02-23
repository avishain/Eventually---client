import { combineReducers } from 'redux';
import EventReducer from './event/EventReducers';
import InboxReducer from './inbox/InboxReducer';
import UserReducer from './user/UserReducer';
import CreateEventReducers from './createEvent/CreateEventReducers';

export default combineReducers({
    event: EventReducer,
    inbox: InboxReducer,
    user: UserReducer,
    createEvent: CreateEventReducers
});