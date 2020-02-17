import { TOGGLE_NOTIFICATIONS_WINDOW } from '../../types';

const initialState = {
    isOpen: false,
    notifications: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_NOTIFICATIONS_WINDOW:
            return { ...state, isOpen: !state.isOpen };
        default: 
            return state;
    }
}
