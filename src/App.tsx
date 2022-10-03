import React from "react";
import { ToDo } from "./modules for ToDo/ToDo";

export function App() {
  return (
      <div className="todo">
        <ToDo importance='high' />
        <ToDo importance='low' />
      </div>
  )
}