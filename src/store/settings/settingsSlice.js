import {createSlice} from "@reduxjs/toolkit";
import {Language} from "../../constants/Language";
import {Theme} from "../../constants/Theme";

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        theme: Theme["dark"],
        language: Language["en"],
        settings: JSON.parse(localStorage.getItem("settings"))
    },
    reducers:{
        changeLanguage(state,action){
            state.language = action.payload
            localStorage.setItem("settings",JSON.stringify({...state.settings,language:action.payload}))
        },
        changeTheme(state,action){
            state.theme = action.payload
            localStorage.setItem("settings",JSON.stringify({...state.settings,theme:action.payload}))
        }
    }
})

export const settingsActions = settingsSlice.actions

export default settingsSlice