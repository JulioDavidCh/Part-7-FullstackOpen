const userReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_USERNAME':
    return action.data
  default :
    return state
  }
}

const actionCreatorSetUsername = (data) => {
  return {
    type: 'SET_USERNAME',
    data
  }
}

export {
  userReducer,
  actionCreatorSetUsername
}