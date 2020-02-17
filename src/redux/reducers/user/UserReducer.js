import { SET_USER } from '../../types';

const initialState = {
    data: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, data: { ...action.payload } };
        default:
            return state;
    }
}
