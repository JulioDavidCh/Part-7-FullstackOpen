import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'

const AnecdoteList = (props) => {
  return(
    <div>
      <h2>Anecdotes</h2>
      {
        props.anecdotes
          ? <Table striped celled>
            <Table.Body>
              {
                props.anecdotes
                  .map(anecdote =>
                    <Table.Row key={anecdote.id}>
                      <Table.Cell key={String(Math.random())}>
                        <Link to={`/anecdotes/${anecdote.id}`} >{anecdote.content}</Link>
                      </Table.Cell>
                      <Table.Cell key={String(Math.random())}>
                        {anecdote.user.username}
                      </Table.Cell>
                    </Table.Row>
                  )
              }
            </Table.Body>
          </Table>
          : ''
      }
    </div>
  )
}

const mapStateToProps = state => ({
  anecdotes: state.anecdotes
})

export default connect(mapStateToProps)(AnecdoteList)