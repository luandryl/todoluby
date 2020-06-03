import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { 
  loadInactiveTasks, 
  loadActiveTasks, 
  loadAllTasks 
} from './../store/actions/todoAction'

const Filter = () => {

  const dispatch = useDispatch()

  const listAll = () => {
    dispatch(loadAllTasks())
  }

  const listActive = () => {
    dispatch(loadActiveTasks())
  }

  const listInactive = () => {
    dispatch(loadInactiveTasks())
  }

  return (
    <div>
      <Button onClick={listAll} > All </Button>
      <Button onClick={listActive} > Active </Button>
      <Button onClick={listInactive} > Inactive </Button>
    </div>
  )

}

const Button = styled.button`
  padding: .3rem;
  font-family: 'Roboto Mono', monospace;
  cursor: pointer;
  background: #1F1F1F;
  margin-left: 5px;
  margin-top: 10px;
  color: #fff;
  border-radius: 5px;
`;

export default Filter