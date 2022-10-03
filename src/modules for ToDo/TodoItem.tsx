import React, { useState } from "react";
import {changeHighListTasks, changeLowListTasks} from "../app/redux";
import {ITodoItemProps} from "../modules";
import {useAppDispatch, useAppSelector} from "../app/hooks";

export function TodoItem({textTask, taskNumber, importance}: ITodoItemProps) {
    const dispatch = useAppDispatch();
    const highTasksList = useAppSelector(state => state.toDoApp.highListTasks)
    const lowTasksList = useAppSelector(state => state.toDoApp.lowListTasks)

    const tasksList = importance === 'high'
        ? highTasksList
        : lowTasksList;

    const [taskDone, setTaskDone] = useState('task');

    function handleChange() {
        if (taskDone === 'task') {
            setTaskDone('checked task')
        } else {
            setTaskDone('task')
        }
    }

    function deleteTask() {
        importance === 'high'
            ? dispatch(changeHighListTasks([...tasksList.slice(0, taskNumber), ...tasksList.slice(taskNumber + 1)]))
            : dispatch(changeLowListTasks([...tasksList.slice(0, taskNumber), ...tasksList.slice(taskNumber + 1)]));
    }

    return (
        <div className={taskDone}>
            <input type="checkbox" onChange={handleChange} />
            <p>{textTask}</p>
            <button className="delete" onClick={deleteTask}></button>
        </div>
    )
}
