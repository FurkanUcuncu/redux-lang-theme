import React, {useState} from 'react';
import Container from "../container/Container";
import {useDispatch, useSelector} from "react-redux";
import {todoActions} from "../../store/todo/todoSlice";
import TelegramIcon from '@mui/icons-material/Telegram';
import Button from '@mui/material/Button';

function TodoForm(props) {
    const dispatch = useDispatch()
    const {language, theme} = useSelector(state=>state.settings)
    const [text,setText] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()
        if(text !== ''){
            setText('')
            dispatch(todoActions.addTodo(
                {
                    id:Math.random() * 1000,
                    text,
                    isDone:false,
                }
            ))
        }
    }
    const onChange = (e) =>{
        setText(e.target.value)
    }
    return (
        <Container extendClass="p-5 mt-3">
            <form onSubmit={onSubmit}>
                <div className="flex items-center rounded-lg overflow-hidden drop-shadow-md w-1/3 relative">
                    <input className="text-gray-400 outline-none focus:outline-none px-5 py-3 w-full" value={text} onChange={onChange} placeholder={language.addTodo}/>
                    <Button sx={{position:'absolute',right:0,height:'100%'}} onClick={onSubmit} variant="contained" endIcon={<TelegramIcon/>}>
                        {language.add}
                    </Button>
                </div>
            </form>
        </Container>
    );
}

export default TodoForm;