import { 
  BrowserRouter as Router
 } from 'react-router-dom'
import React from 'react'
import Notify from './components/Notify'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Routes from './components/Routes'

const App = () => {

  return (
    <Router>
      <h1>Software anecdotes</h1>
      <Menu />
      <Notify />
      <Routes />
      <Footer />
    </Router>
  )
}


export default App