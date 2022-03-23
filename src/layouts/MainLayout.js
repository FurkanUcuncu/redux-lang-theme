import React from 'react';
import Header from "../components/header/Header";
import TodoList from "../components/todo/TodoList";
import TodoForm from "../components/todo/TodoForm";
import {useSelector} from "react-redux";

function MainLayout() {
    const {theme} = useSelector(state=>state.settings)
    return (
        <div className={theme.body.bg + " min-h-screen"}>
            <Header/>
            <TodoForm/>
            <TodoList/>
        </div>
    );
}

export default MainLayout;