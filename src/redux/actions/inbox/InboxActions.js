import { SET_NOTIFICATIONS } from '../../types';

export const setNotifications = value  => {
    return {
        type: SET_NOTIFICATIONS,
        payload: value
    }
}
