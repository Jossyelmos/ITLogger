import { 
    GET_LOGS, 
    SET_LOADING, 
    LOGS_ERROR, 
    ADD_LOG, 
    DELETE_LOG, 
    UPDATE_LOG,
    SEARCH_LOGS,
    SET_CURRENT, 
    CLEAR_CURRENT 
} from './types';

const api = 'http://localhost:3100/logs'

// Get Logs from server
export const getLogs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch(api);
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
};

// Add new logs
export const addLogs = (log) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(api, {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
};

// Delete log
export const deleteLog = id => async dispatch => {
    try {
        setLoading(true);

        await fetch(`api/${id}`, {method: 'DELETE'});

        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }    
};

// Update log
export const updateLog = log => async dispatch => {
    try {
        setLoading(true);

        const res = await fetch(`api/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }    
};

// Search server logs
export const searchLogs = (text) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`api/?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
};

// Set Current log
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
};

// Clear Current log
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT,
    }
};

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
};