const userInfoReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_USER_INFO':
    return action.data
  default :
    return state
  }
}

const actionCreatorSetUserInfo = (data) => {
  return {
    type: 'SET_USER_INFO',
    data
  }
}

export {
  userInfoReducer,
  actionCreatorSetUserInfo
}