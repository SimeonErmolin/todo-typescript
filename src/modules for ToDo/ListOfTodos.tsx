import React from "react";
import {TodoItem} from "./TodoItem";
import {ITodoProps} from "../modules";
import {useAppSelector} from "../app/hooks";

export function ListOfTodos({importance}: ITodoProps) {
    const highTasksList = useAppSelector(state => state.toDoApp.highListTasks)
    const lowTasksList = useAppSelector(state => state.toDoApp.lowListTasks)

    const tasksList = importance === 'high'
        ? highTasksList
        : lowTasksList;

    const listOfTasks = tasksList.map((item: string, index: number) => {
        return <TodoItem key={item.toString()} textTask={item} taskNumber={index} importance={importance} />
    })

    return (
        <div>
            {listOfTasks}
        </div>
    )
}