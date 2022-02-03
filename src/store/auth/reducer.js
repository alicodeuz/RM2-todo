const initialState = {
  token: null,
  user: {
    lang: 'en',
    name: '',
    email: '',
    id: null
  }
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
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