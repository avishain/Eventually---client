import { TOGGLE_NOTIFICATIONS_WINDOW, SET_SELECTED_NOTIFICATION } from '../../types';

const initialState = {
    isOpen: false,
    selectedNotification: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_NOTIFICATIONS_WINDOW:
            return { ...state, isOpen: !state.isOpen };
        case SET_SELECTED_NOTIFICATION:
            return { ...state, selectedNotification: action.payload }
        default: 
            return state;
    }
}
