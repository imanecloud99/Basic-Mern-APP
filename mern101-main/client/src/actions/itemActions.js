import {
    GET_ITEMS,
    DELETE_ITEMS,
    ADD_ITEMS,
    ITEMS_LOADING
} from './types';
import axios from 'axios';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    setTimeout(() => {
        axios
        .get('/api/items')
        .then((res => {
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        }))
    }, 1000)
    
};

export const deleteItem = (id) => dispatch => {
    axios
        .delete('/api/items/' + id)
        .then((() => {
            dispatch({
                type: DELETE_ITEMS,
                payload: id
            })
        }))
};

export const addItem = (item) => dispatch => {
    axios.post('/api/items', item).then(res => {
        dispatch({
            type: ADD_ITEMS,
            payload: res.data
        })
    });
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
};