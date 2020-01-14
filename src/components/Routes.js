import React from 'react'
import { Route } from 'react-router-dom'
import AnecdoteList from '../components/AnecdoteList'
import CreateNewAnecdote from '../components/CreateNewAnecdote'
import Anecdote from '../components/Anecdote'
import About from '../components/About'

const Routes = () => {
  return (
    <div>
      <Route exact path="/" render={() => <AnecdoteList /> } />
      <Route exact path="/anecdotes" render={() => <AnecdoteList /> } />
      <Route path="/create" render={() => <CreateNewAnecdote /> } />
      <Route path="/about" render={() => <About /> } />
      <Route exact path='/anecdotes/:id' render={({ match }) => <Anecdote id={match.params.id}/>}  />
    </div>
  )
}

export default Routes