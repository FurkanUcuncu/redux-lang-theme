import React from 'react';
import Header from "../components/header/Header";
import TodoList from "../components/todo/TodoList";
import TodoForm from "../components/todo/TodoForm";

function MainLayout() {
    return (
        <>
            <Header/>
            <TodoForm/>
            <TodoList/>
        </>
    );
}

export default MainLayout;