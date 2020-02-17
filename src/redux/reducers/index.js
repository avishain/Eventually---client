import { combineReducers } from 'redux';
import HomeReducers from './home/homeReducers';
import InboxReducer from './inbox/InboxReducer';
import UserReducer from './user/UserReducer';

export default combineReducers({
    home: HomeReducers,
    inbox: InboxReducer,
    user: UserReducer
});