import React, {useEffect} from 'react';
import Container from "../container/Container";
import {useSelector} from "react-redux";
import Todo from "./Todo";

function TodoList(props) {
    const {todos} = useSelector(state=>state.todos)
    const {language,theme} = useSelector(state=>state.settings)

    // useEffect(()=>{
    //
    // },[todos])
    return (
        <Container extendClass="p-5">
            {
                todos.length === 0 ? <div className={theme.body.text + " flex justify-center"}>{language.noTodos}</div> :
                todos.map((item)=>{
                return(
                    <Todo
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        isDone={item.isDone}
                    />
                )
            })}
        </Container>
    );
}

export default TodoList;