import {configureStore} from "@reduxjs/toolkit";
import settingsSlice from "./settings/settingsSlice";
import todoSlice from "./todo/todoSlice";

const store = configureStore({
    reducer:{
        settings : settingsSlice.reducer,
        todos: todoSlice.reducer,
    }
})

export default store