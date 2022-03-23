import React, {useRef, useState} from 'react';
import {todoActions} from "../../store/todo/todoSlice";
import {useDispatch, useSelector} from "react-redux";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

function Todo({text,id,isDone}) {
    const dispatch = useDispatch()

    const ref = useRef(null)

    const [todo,setTodo] = useState(text)
    const [active,setActive] = useState(true)
    const [checked,setChecked] = useState(false)

    const {theme,language} = useSelector(state=>state.settings)

    const onChange = (e) =>{
        setTodo(e.target.value)
    }

    const onFocus = (e) => {
        e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)
    }

    const onCheck = () => {
        setChecked(!checked)
        editTodo()
    }

    const onBlur = () =>{
        setActive(true)
    }

    const onEdit = () =>{
        setActive(false)
        setTimeout(()=>{
            ref.current.focus()
        },200)
    }

    const editTodo = (e) => {
        e.preventDefault()
        setActive(true)
        dispatch(todoActions.updateTodo({id,text:todo,isDone:checked}))
    }

    const deleteTodo = () => {
        dispatch(todoActions.deleteTodo(id))
    }
    return (
        <div className="flex justify-between overline mb-3 rounded-md p-5 bg-white drop-shadow-md rounded-lg">
            <form className="w-full" onSubmit={editTodo}>
                <input
                    className={`${checked ? 'line-through opacity-30' : ''} ${active ? 'pointer-events-none' : 'pointer-events-auto'} transition-all focus:outline-none bg-white outline-none w-full flex-1`}
                    onFocus={onFocus}
                    ref={ref}
                    disabled={active}
                    value={todo}
                    onBlur={onBlur}
                    onChange={onChange}
                    type="text"
                />
            </form>
            <div className="flex items-center mx-3">
                <div onClick={onCheck} className={`flex cursor-pointer items-center mx-3 text-gray-300 hover:text-green-500`}>
                    <CheckIcon/>
                </div>
                <div onClick={onEdit} className={`flex cursor-pointer items-center mx-3 text-gray-300 hover:text-blue-300`}>
                    <EditIcon/>
                </div>
                <div onClick={deleteTodo} className={`flex cursor-pointer items-center mx-3 text-gray-300 hover:text-red-500`}>
                    <DeleteForeverIcon/>
                </div>
            </div>
        </div>
    );
}

export default Todo;