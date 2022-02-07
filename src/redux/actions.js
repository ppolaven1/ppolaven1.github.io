import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionTypes';
let nextTodoId = 0;

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
})

export const toggleTodo = id1 => ({
    type: TOGGLE_TODO,
    payload: {id1}
})

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: {filter}
})