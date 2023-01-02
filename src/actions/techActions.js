import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    TECHS_ERROR,
    SET_LOADING
} from './types';

const techAPI = "https://logger-api-p7kn.onrender.com/techs";

// Get techs from server
export const getTechs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch(techAPI);
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        });
    }
};

// Add technician to server
export const addTech = (tech) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(techAPI, {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_TECH,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        });
    }
};

// Delete Tech from server
export const deleteTech = (id) => async dispatch => {
    try {
        setLoading();

        await fetch(`techAPI/${id}`, {
            method: 'DELETE',
        });

        dispatch({
            type: DELETE_TECH,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        });
    }
};

// Set Loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
};