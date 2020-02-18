import { TOGGLE_NOTIFICATIONS_WINDOW, SET_SELECTED_NOTIFICATION } from '../../types';

export const toggleNotificationsWindow = ()  => {
    return {
        type: TOGGLE_NOTIFICATIONS_WINDOW
    }
}

export const setSelectedNotification = notification  => {
    return {
        type: SET_SELECTED_NOTIFICATION,
        payload: notification
    }
}
