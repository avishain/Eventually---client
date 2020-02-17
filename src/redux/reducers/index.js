import { combineReducers } from 'redux';
import HomeReducers from './home/homeReducers';
import InboxReducer from './inbox/InboxReducer';

export default combineReducers({
    home: HomeReducers,
    inbox: InboxReducer
});