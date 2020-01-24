const notificationReducer = (state='', action) => {
  switch (action.type) {
  case 'NEW_NOTIFICATION':
    return action.data
  default :
    return state
  }
}

const actionCreatorNewNotification = (data, time) => {

  return dispatch => {
    dispatch({
      type: 'NEW_NOTIFICATION',
      data
    })
    setTimeout(() => dispatch({
      type: 'NEW_NOTIFICATION',
      data: ''
    }),
    time*1000)
  }
}

export { notificationReducer, actionCreatorNewNotification }