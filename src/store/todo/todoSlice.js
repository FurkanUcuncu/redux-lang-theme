import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState:{
        todos:[],
        todo:{
            id:'',
            text:'',
            isDone:false,
        },
    },
    reducers:{
        updateTodo(state,action){
            state.todos = state.todos.map((item)=> item.id === action.payload.id ? {...item, ...action.payload} : item)
        },
        deleteTodo(state,action){
            state.todos = state.todos.filter((item)=> item.id !== action.payload)
        },
        addTodo(state,action){
            state.todos.unshift(action.payload)
            console.log(state.todos)
        }
    }
})

export const todoActions = todoSlice.actions

export default todoSlice