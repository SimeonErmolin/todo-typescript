import {createSlice} from "@reduxjs/toolkit";
import {IAction, IStore} from "../modules";

const initialState: IStore = {
    highListTasks: [],
    lowListTasks: [],
}

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        changeHighListTasks(state: IStore, action: IAction) {
            state.highListTasks = action.payload
        },
        changeLowListTasks(state: IStore, action: IAction) {
            state.lowListTasks = action.payload
        }
    }
})

export const {changeHighListTasks, changeLowListTasks} = toDoSlice.actions
export default toDoSlice.reducer