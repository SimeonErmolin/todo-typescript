import React from "react";
import { TodoForm } from "./TodoForm";
import { ListOfTodos } from "./ListOfTodos";
import {ITodoProps} from "../modules";

export function ToDo({importance}: ITodoProps) {
    const title = importance === 'high' ? 'HIGH' : 'LOW';

    return (
        <div className={importance}>
            <h2 className="title">{title}</h2>
            <TodoForm importance={importance} />
            <ListOfTodos importance={importance} />
        </div>
    )
}