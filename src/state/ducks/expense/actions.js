import * as types from "./types";

export const addExpense = (expense) => ({
    type: types.ADD,
    payload: {
        expense,
    },
});

export const editExpense = (index, expense) => ({
    type: types.EDIT,
    payload: {
        index,
        expense,
    },
});

export const removeExpense = (index) => ({
    type: types.REMOVE,
    payload: {
        index,
    },
});

export const fetchData = () => ({
    type: types.FETCH,
    meta: {
        async: true,
        blocking: true,
        path: '',
        method: 'GET',
    },
})