import { 
    ADD_TASK, 
    INACTIVE_TASKS, 
    ACTIVE_TASKS,
    ALL_TASKS,
    CHANGE_STATUS
} from './types'
import LocalStorage  from '../../services/LocalStorage'
import LoacalStorage from '../../services/LocalStorage'

export const saveTask = (task) => dispatch => {
    LocalStorage.save(task)
    dispatch({type: ADD_TASK, payload: task})
}

export const loadInactiveTasks = () => dispatch => {
    dispatch({type: ALL_TASKS})
    dispatch({type: INACTIVE_TASKS})
}

export const loadActiveTasks = () => dispatch => {
    dispatch({type: ALL_TASKS})
    dispatch({type: ACTIVE_TASKS})
}

export const loadAllTasks = () => dispatch => {
    dispatch({type: ALL_TASKS})
}

export const changeStatus = (index) => dispatch => {
    dispatch({type: ALL_TASKS})
    const taskList = LoacalStorage.load().map((task, i) =>  { 
        if (index === i) {
            task.status = !task.status
        }
            return task
    })
    LocalStorage.clear()
    LocalStorage.saveList(taskList)

    dispatch({type: CHANGE_STATUS, payload: index})

}