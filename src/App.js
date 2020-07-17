import React, { useEffect } from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import { Container } from '@material-ui/core'

import Home from './routes/Home'
import About from './routes/About'

import './App.css'
export function App() {
  useEffect(() => {
    // When the App is done loading; remove the loading screen
    document.getElementById('loading-screen').remove()
  }, [])


  return (
    <Container className='app' style={{ margin: 20, maxWidth: 1920 }}>
      <div className="background-image"></div>
      <BrowserRouter>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/About'>
          <About />
        </Route>

        {/* 
          <Route
            path='/pokemon/:name'
            render={props => (
              <Pokemon name={props.match.params.name} />
            )}
          />

          <Route
            path='/types/:name'
            render={props => (
              <Typeing name={props.match.params.name} />
            )}
          /> 
        */}
      </BrowserRouter>
    </Container>
  )
}

export default App