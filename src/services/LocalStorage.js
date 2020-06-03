const saveList = (list) => {
  localStorage.setItem('task_list', JSON.stringify(list))
}

const load = () => {
  if (localStorage.getItem('task_list')) {
    return JSON.parse(localStorage.getItem('task_list'))
  } else {
    return []
  }
}

const save = (task) => {
  if (!localStorage.getItem('task_list')) {
    let task_list = []
    task_list = [...task_list, task]
    saveList(task_list)
  } else {
    let task_list = JSON.parse(localStorage.getItem('task_list'))
    task_list = [...task_list, task]
    saveList(task_list)
  }
}

const clear = () => {
  localStorage.removeItem('task_list')
}

const LoacalStorage = {
  save,
  load,
  clear,
  saveList
}

export default LoacalStorage