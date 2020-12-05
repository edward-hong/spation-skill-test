import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  border-radius: 50px;
  box-shadow: 0px -9px 20px 0px rgba(0, 0, 0, 0.75);
  margin: 0;
  position: fixed;
  top: ${({ top }) => top}%;
  transition: top 1s;
`
const DotContainer = styled.div`
  width: 30px;
  margin: 30px auto;
  height: 10px;
`
const RightDot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: ${({ isActive }) =>
    isActive === 'right' ? 'darkblue' : '#ccc'};
  border-radius: 50%;
`

const LeftDot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: ${({ isActive }) =>
    isActive === 'left' ? 'teal' : '#ccc'};
  border-radius: 50%;
  margin-left: 10px;
`

const App = () => {
  const [top, setTop] = useState(85)
  const [isActive, setIsActive] = useState('right')

  return (
    <Container top={top} onClick={() => setTop(30)}>
      <DotContainer>
        <RightDot isActive={isActive} />
        <LeftDot isActive={isActive} />
      </DotContainer>
    </Container>
  )
}

export default App
