import React, { useState } from "react";
import {changeHighListTasks, changeLowListTasks} from "../app/redux";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {ITodoProps} from "../modules";

export function TodoForm({importance}: ITodoProps) {
    const dispatch = useAppDispatch();
    const highTasksList = useAppSelector(state => state.toDoApp.highListTasks)
    const lowTasksList = useAppSelector(state => state.toDoApp.lowListTasks)

    const tasksList = importance === 'high'
        ? highTasksList
        : lowTasksList;


    const [textTask, setTextTask] = useState('');
    const inputPlaceholder = importance === 'high' ? 'Добавить важных дел' : 'Добавить';

    function taskChange(e: any) {
        setTextTask(e.target.value);
    }

    function addTask(e: any) {
        e.preventDefault();

        if (textTask === '') return;
        if (tasksList.some((task: string) => textTask === task) === true) {
            alert('Такая заметка уже существует!');
        } else {
            importance === 'high'
                ? dispatch(changeHighListTasks([...tasksList, textTask]))
                : dispatch(changeLowListTasks([...tasksList, textTask]))
        }
        setTextTask('');
    }

    return (
        <form className="form " onSubmit={addTask}>
            <input type="text" placeholder={inputPlaceholder} className="field" value={textTask} onChange={taskChange} />
            <input type="submit" className="btn" value="" />
        </form>
    )
}
