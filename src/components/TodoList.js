import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeStatus } from './../store/actions/todoAction'
const TodoList = () => {
  const dispatch = useDispatch()

  const change = (e, index) => {
    e.preventDefault()
    dispatch(changeStatus(index))
  }

  const tasks = useSelector(state => state.todos.taskList)
  const taskList = tasks.map((t, i) =>  (<Li onClick={(e) => {change(e, i)}} key={i} index={i}> {t.name} </Li>) )

  return (
    <Ul>
      {taskList}
    </Ul>
  )

}

const Ul = styled.ul`
  padding: 2rem;
  display: flex;
  flex-flow: column;
`;

const Li = styled.li`
  cursor: pointer;
  margin: 5px;
`;



export default TodoList