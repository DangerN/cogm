import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import api from './utils/api'

api.getDocument('index.json', console.log)

function App() {
  return (
    <>
        <CssBaseline />
        <Container>
            Under Construction
        </Container>
    </>
  )
}

export default App;
