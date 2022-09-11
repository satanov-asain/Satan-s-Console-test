import React from 'react';
import Title from './components/Title';
import Flex from './components/Flex';
import Console from './components/Console';
import Button from './components/Button';
import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: black;
  padding: 2rem;
  color: white;
`



const App = () => {
  return(
    <AppWrapper>
      <Flex justify = 'center'>
        <Title>Satan's Console</Title>
      </Flex>
      <Flex direction = 'column'>
        <Console />
        <Button align = 'flex-end'>
          Send code
        </Button>
      </Flex>
    </AppWrapper>
  )
}

export default App;
