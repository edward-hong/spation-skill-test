import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  border-radius: 50px;
  box-shadow: 3px -8px 71px 0px rgba(0, 0, 0, 0.75);
  margin: 0;
  position: fixed;
  top: ${({ top }) => top}%;
  transition: top 1s;
`

const App = () => {
  const [top, setTop] = useState(85)

  return (
    <Container top={top} onClick={() => setTop(30)}>
      {''}
    </Container>
  )
}

export default App
