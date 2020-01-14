import { 
  BrowserRouter as Router,
  Route, Link, withRouter
 } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import { actionCreatorNewNotification as addNotification } from './reducers/notificationReducer'
import Notify from './components/Notify'
import { actionCreatorNewAnecdote as addAnecdote } from './reducers/anecdotesReducer'

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


const AnecdoteList = ({ anecdotes }) => {

  return(
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes
        .map(anecdote => 
        <li key={anecdote.id} >
          <Link to={`/anecdotes/${anecdote.id}`} >{anecdote.content}</Link>
        </li>
        )}
      </ul>
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

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

const Footer = () => (
  <div>
    <br></br>
    Anecdote app for <a href='https://courses.helsinki.fi/fi/tkt21009'>Full Stack -sovelluskehitys</a>.

    See <a href='https://github.com/fullstack-hy2019/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2019/routed-anecdotes/blob/master/src/App.js</a> for the source code.
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
        <Route exact path="/" render={() => <AnecdoteList anecdotes={props.anecdotes} /> } />
        <Route exact path="/anecdotes" render={() => <AnecdoteList anecdotes={props.anecdotes} /> } />
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