import { SET_EVENT_DATE_SELECTION, SELECT_EVENT_DATE_SELECTION, SET_EVENT_PAGE_CURRENT_TAB, SET_EVENT_RETREIVE } from '../../types';

export const resetEventDateSelection = dates  => {
    return {
        type: SET_EVENT_DATE_SELECTION,
        payload: dates
    }
}

export const selectEventDateSelection = selection  => {
    return {
        type: SELECT_EVENT_DATE_SELECTION,
        payload: selection
    }
}

export const setEventPageCurrentTab = selection  => {
    return {
        type: SET_EVENT_PAGE_CURRENT_TAB,
        payload: selection
    }
}

export const setEventRetreive = wasRetreived  => {
    return {
        type: SET_EVENT_RETREIVE,
        payload: wasRetreived
    }
}
