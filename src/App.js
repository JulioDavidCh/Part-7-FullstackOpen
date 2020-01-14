import { 
  BrowserRouter as Router,
  Route, Link, withRouter
 } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import { actionCreatorNewNotification as addNotification } from './reducers/notificationReducer'
import Notify from './components/Notify'
import { actionCreatorNewAnecdote as addAnecdote } from './reducers/anecdotesReducer'
import About from './components/About'
import Footer from './components/Footer'
import AnecdoteList from './components/AnecdoteList'

const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (
    <div>
      <Link style={padding} to='/anecdotes' >anecdotes</Link>
      <Link style={padding} to='/create' >create new</Link>
      <Link style={padding} to='/about' >about</Link>
    </div>
  )
}

const Anecdote = ({ anecdote }) => (
  <div>
    <h2>{anecdote.content} by {anecdote.author}</h2>
    <div>has {anecdote.votes} votes</div>
    <div>for more info see <a href={anecdote.info}>{anecdote.info}</a></div>

  </div>
)

const CreateNew = (props) => {

  const handleSubmit = (e) => {

    const target = e.target
    const content = target.content.value
    const author = target.author.value
    const info = target.info.value

    e.preventDefault()

    props.addAnecdote(
      content,
      author,
      info
    )

    props.addNotification(`${content} was added by ${author}`, 5)
    props.history.push('/')
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name='content' />
        </div>
        <div>
          author
          <input name='author' />
        </div>
        <div>
          url for more info
          <input name='info' />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

const CreateNewAnecdote = withRouter(CreateNew)


const App = (props) => {

  const anecdoteById = (id) =>
    props.anecdotes.find(a => a.id === id)
  
  const Routes = (props) => {
    return (
      <div>
        <Route exact path="/" render={() => <AnecdoteList /> } />
        <Route exact path="/anecdotes" render={() => <AnecdoteList /> } />
        <Route path="/create" render={() => <CreateNewAnecdote addAnecdote={props.addAnecdote} addNotification={props.addNotification} /> } />
        <Route path="/about" render={() => <About /> } />
        <Route exact path='/anecdotes/:id' render={({ match }) => <Anecdote anecdote={anecdoteById(match.params.id)}/>}  />
      </div>
    )
  }

  return (
    <Router>
      <h1>Software anecdotes</h1>
      <Menu />
      <Notify notification={props.notification} />
      <Routes 
        addNotification={props.addNotification} 
        addAnecdote={props.addAnecdote}
        anecdotes={props.anecdotes}
      />
      <Footer />
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes
  }
}

const mapDispatchToProps = {
  addNotification,
  addAnecdote
}

export default connect(mapStateToProps, mapDispatchToProps)(App);