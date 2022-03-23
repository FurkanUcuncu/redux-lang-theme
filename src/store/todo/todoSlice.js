import {createSlice} from "@reduxjs/toolkit";

const setLocalStorage = (item) => {
    localStorage.setItem("todos",JSON.stringify(item))
}

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
            setLocalStorage(state.todos)
            console.log(state.todos)
        },
        deleteTodo(state,action){
            state.todos = state.todos.filter((item)=> item.id !== action.payload)
            setLocalStorage(state.todos)
        },
        addTodo(state,action){
            state.todos.unshift(action.payload)
            setLocalStorage(state.todos)
        },
        getTodos(state,action){
            state.todos = action.payload
        }
    }
})

export const todoActions = todoSlice.actions

export default todoSlice