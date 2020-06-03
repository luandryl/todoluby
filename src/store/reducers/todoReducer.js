import { 
  ADD_TASK, 
  INACTIVE_TASKS, 
  ACTIVE_TASKS,
  ALL_TASKS,
  CHANGE_STATUS
} from './../actions/types'
import LocalStorage from './../../services/LocalStorage'

const initialState = {
  taskList: (LocalStorage.load().length !== 0) ? LocalStorage.load() : []
}

export default function (state = initialState, action) {

  switch(action.type) {

    case ADD_TASK : {
      return {
        ...state,
        taskList: [...state.taskList, action.payload]
      }
    }

    case CHANGE_STATUS: {
      const taskList = state.taskList.map((task, index) =>  { 
        if (index === action.payload) {
          task.status = !task.status
        }
        return task
      })
      return {
        ...state,
        taskList: [...taskList]
      }
    }

    case ACTIVE_TASKS: {
      const active = state.taskList.filter(task => task.status === true)
      return {
        ...state,
        taskList: [...active]
      }
    }

    case INACTIVE_TASKS: {
      const inactive = state.taskList.filter(task => task.status === false)
      return {
        ...state,
        taskList: [...inactive]
      }
    }

    case ALL_TASKS : {
      return {
        ...state,
        taskList: [...LocalStorage.load()]
      }
    }

    default: 
      return state
  }

}