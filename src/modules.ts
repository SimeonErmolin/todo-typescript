export interface ITodoProps {
    importance: string
}
export interface ITodoItemProps {
    textTask: string
    taskNumber: number
    importance: string
}

export interface IStore {
    highListTasks: string[]
    lowListTasks: string[]
}

export interface IAction {
    payload: string[]
}