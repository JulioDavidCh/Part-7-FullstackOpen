const notificationReducer = (state='', action) => {
  switch (action.type) {
    case 'NEW_NOTIFICATION':
      return action.data
  default :
  return state
  }
}

const actionCreatorNewNotification = data => ({
  type: 'NEW_NOTIFICATION',
  data
})

export { notificationReducer, actionCreatorNewNotification }