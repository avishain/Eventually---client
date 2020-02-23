import { SET_CREATE_EVENT_VIEW, SET_TITLE, SET_DATE_SELECTION_TYPE, SET_TYPE, SET_DATE, SET_TIME } from '../../types';

export const setCreateEventView = view  => {
    return {
        type: SET_CREATE_EVENT_VIEW,
        payload: view
    }
}

export const setEventTitle = title  => {
    return {
        type: SET_TITLE,
        payload: title
    }
}

export const setDateSelectionType = selectionType  => {
    return {
        type: SET_DATE_SELECTION_TYPE,
        payload: selectionType
    }
}

export const setEventType = eventType  => {
    return {
        type: SET_TYPE,
        payload: eventType
    }
}

export const setEventDate = date  => {
    return {
        type: SET_DATE,
        payload: date
    }
}

export const setEventTime = time  => {
    return {
        type: SET_TIME,
        payload: time
    }
}
