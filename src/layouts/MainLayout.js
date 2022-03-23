import React, {useEffect} from 'react';
import Header from "../components/header/Header";
import TodoList from "../components/todo/TodoList";
import TodoForm from "../components/todo/TodoForm";
import {useDispatch, useSelector} from "react-redux";
import {todoActions} from "../store/todo/todoSlice";
import {settingsActions} from "../store/settings/settingsSlice";

function MainLayout() {
    const dispatch = useDispatch()
    const {theme} = useSelector(state=>state.settings)
    useEffect(()=>{
        const localTodos = localStorage.getItem("todos")
        const settings = JSON.parse(localStorage.getItem("settings"))
        if(localTodos.length > 0){
            dispatch(todoActions.getTodos(JSON.parse(localTodos)))
        }
        if(settings && settings.language){
            dispatch(settingsActions.changeLanguage(settings.language))
        }
        if(settings && settings.theme){
            dispatch(settingsActions.changeTheme(settings.theme))
        }
    },[dispatch])
    return (
        <div className={theme.body.bg + " min-h-screen"}>
            <Header/>
            <TodoForm/>
            <TodoList/>
        </div>
    );
}

export default MainLayout;