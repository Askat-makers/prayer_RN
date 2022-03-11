const initState = {
  user: null,
  isSignedIn: false,
  isSignInFailed: false,
  isSignInFailedMessage: '',
};

export const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isSignedIn: true,
      };
    case 'SIGN_IN_ERROR':
      return {
        ...state,
        isSignInFailed: true,
        isSignInFailedMessage: action.payload,
      };
    default:
      return state;
  }
};
