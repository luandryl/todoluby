import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { saveTask } from './../store/actions/todoAction'

const validation = Yup.object().shape({
  taskField: Yup.string()
    .min(5, 'Too Short!')
    .required('Required')
})

const Input = () => {

  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      taskField: ''
    },
    validationSchema: validation,
    onSubmit: ({taskField}) => {
      dispatch(saveTask({name:taskField, status: true}))
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Label htmlFor="taskField">Write some task</Label>
      <InputStyled 
        id="taskField"
        name="taskField"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.taskField}
      />
      {formik.touched.taskField && formik.errors.taskField ? (
        <div>{formik.errors.taskField}</div>
      ) : null}
      <Button type="submit">Add</Button>
    </form>
  )

}

const InputStyled = styled.input`
  font-family: 'Roboto Mono', monospace;
  border: 1px solid #1F1F1F;
  padding: .3rem;
`;

const Label = styled.label`
  font-family: 'Roboto Mono', monospace;
  font-size: 1em;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: .55rem;
  font-family: 'Roboto Mono', monospace;
  cursor: pointer;
  background: #1F1F1F;
  color: #fff;
`;

export default Input