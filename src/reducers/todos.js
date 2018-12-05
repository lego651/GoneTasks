let initialState = [
  {
    id: 0,
    text: 'task1',
    expired: false
  },
  {
    id: 1,
    text: 'task2',
    expired: false
  }
]

export default(state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          expired: false
        }
      ]
    default:
      return state
  }
}
