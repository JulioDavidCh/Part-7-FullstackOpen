import React from 'react'
import { Route } from 'react-router-dom'
import AnecdoteList from '../components/AnecdoteList'
import CreateNewAnecdote from '../components/CreateNewAnecdote'
import Anecdote from '../components/Anecdote'
import About from './About'
import Login from './Login'
import Register from './Register'
import UserInfo from './UserInfo'
import UserAnecdotes from './UserAnecdote'

const Routes = () => {
  return (
    <div>
      <Route exact path="/" render={() => <AnecdoteList /> } />
      <Route exact path="/anecdotes" render={() => <AnecdoteList /> } />
      <Route path="/create" render={() => <CreateNewAnecdote /> } />
      <Route path="/about" render={() => <About /> } />
      <Route exact path='/anecdotes/:id' render={({ match }) => <Anecdote id={match.params.id}/>}  />
      <Route path="/login" render={() => <Login /> } />
      <Route path="/register" render={() => <Register /> } />
      <Route exact path="/users" render={() => <UserInfo /> } />
      <Route exact path="/users/:id" render={({ match }) => <UserAnecdotes id={match.params.id} /> } />
    </div>
  )
}

export default Routes