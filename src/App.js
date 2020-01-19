import { 
  BrowserRouter as Router
 } from 'react-router-dom'
import React, { useEffect } from 'react'
import Notify from './components/Notify'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Routes from './components/Routes'
import { getAnecdotes } from './services/anecdote'
import { actionCreatorInitializeAnecdotes as setAnecdotes } from './reducers/anecdotesReducer'
import { connect } from 'react-redux'

const App = (props) => {

  useEffect(() => {
    props.initAnecdotes()
  }, [])

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

const mapDispatchToProps = dispatch => {
  return {
    initAnecdotes: async () => {
      const response = await getAnecdotes()
      dispatch(setAnecdotes(response))
    }
  }
}

export default connect(null, mapDispatchToProps)(App)