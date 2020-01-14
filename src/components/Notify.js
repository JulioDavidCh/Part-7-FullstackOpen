import React from 'react'
import { connect } from 'react-redux'

const Notify = (props) => {
  const notification = props.notification
  const styledNotification = {
    padding: 10,
    border: '2px solid green'
  }

  let ourStyle

  notification === ''
  ? ourStyle = {}
  : ourStyle = styledNotification

  return (
    <div style={ourStyle}>
      {notification}
    </div>
  )
}

const mapStateToProps = state => ({
  notification: state.notification
})

export default connect(mapStateToProps)(Notify)