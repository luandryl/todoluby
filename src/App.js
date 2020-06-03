import React from 'react';
import styled from 'styled-components'
import Input from './components/Input'
import TodoList from './components/TodoList'
import Filter from './components/Filter'

function App() {

  return (
    <Wrapper>
      <H1> TodoLuby </H1>
      <Input />
      <Filter />
      <TodoList />
    </Wrapper>
  );
}

const H1 = styled.h1`
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 20px;
  font-size: 2.5em;
  font-weight: 700;
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  margin-top: 5rem; 
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  font-family: 'Roboto Mono', monospace;
`;


export default App;
