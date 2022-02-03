const initialState = {
  searchQuery: 'test',
  search: true
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH': {
      return {
        ...state,
        ...action.payload
      }
    }
    case 'SIGN_IN': {
      return {
        ...state,
        ...action.payload
      }
    }
    case 'SIGN_OUT': {
      return initialState;
    }
    default: {
      return state;
    }
  }
}