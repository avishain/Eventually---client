import { SET_EVENT_DATE_SELECTION, SELECT_EVENT_DATE_SELECTION, SET_EVENT_PAGE_CURRENT_TAB } from '../../types';

const initialState = {
    dates: [],
    dateSelection: [],
    eventPageCurrentTab: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_EVENT_DATE_SELECTION:
            state.dateSelection.splice(action.payload.index, 1, action.payload.newValue);
            return { ...state };
        case SET_EVENT_DATE_SELECTION:
            const dateSelections = [];
            for (let i = 0; i < action.payload.length; ++i) {
                dateSelections.push(0);
            }
            return { ...state, dates: [...action.payload], dateSelection: [...dateSelections] };
        case SET_EVENT_PAGE_CURRENT_TAB:
            return { ...state, eventPageCurrentTab: action.payload };
        default:
            return state;
    }
}
