import { SET_CREATE_EVENT_VIEW, SET_TITLE, SET_DATE_SELECTION_TYPE, SET_TYPE, SET_DATE, SET_TIME, SET_FRIENDS_TO_SELECT, SET_FRIEND_INVITATION } from '../../types';

const initialState = {
    view: 0,
    title: '',
    selectionType: 'Self',
    eventType: null,
    date: null,
    time: null,
    friends: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CREATE_EVENT_VIEW:
            return { ...state, view: action.payload };
        case SET_TITLE:
            return { ...state, title: action.payload };
        case SET_DATE_SELECTION_TYPE:
            return { ...state, selectionType: action.payload };
        case SET_TYPE:
            return { ...state, eventType: action.payload };
        case SET_DATE:
            return { ...state, date: action.payload };
        case SET_TIME:
            return { ...state, time: action.payload };
        case SET_FRIENDS_TO_SELECT:
            return { ...state, friends: [...state.friends, action.payload] };
        case SET_FRIEND_INVITATION:
            let isInvited = state.friends[action.payload].isInvited;
            state.friends[action.payload].isInvited = !isInvited;
            return { ...state, friends: [...state.friends] };
        default:
            return state;
    }
}
