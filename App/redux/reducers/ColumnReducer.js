const initState = {
  columns: [],
  answeredPrayers: [],
  notAnsweredPrayers: [],
  prayerComments: [],
};

export const ColumnReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_COLUMNS_SUCCESS':
      return {
        ...state,
        columns: action.payload,
      };
    case 'ADD_DESK_SUCCESS':
      return {
        ...state,
        columns: [...state.columns, action.payload],
      };
    case 'DELETE_DESK_SUCCESS':
      let columns = state.columns.filter(
        column => column.id !== action.payload,
      );
      return {
        ...state,
        columns,
      };
    case 'ADD_PRAYER_SUCCESS':
      return {
        ...state,
        notAnsweredPrayers: [...state.notAnsweredPrayers, action.payload],
      };
    case 'GET_PRAYERS_SUCCESS':
      return {
        ...state,
        answeredPrayers: action.payload.answeredPrayers,
        notAnsweredPrayers: action.payload.notAnsweredPrayers,
      };
    case 'PRAYER_IS_NOT_ANSWERED': {
      let ansPrayers = state.answeredPrayers.filter(
        prayer => prayer.id !== action.payload.id,
      );
      let notAnsPrayers = [...state.notAnsweredPrayers, action.payload];
      return {
        ...state,
        answeredPrayers: ansPrayers,
        notAnsweredPrayers: notAnsPrayers,
      };
    }
    case 'PRAYER_IS_ANSWERED': {
      let notAnsPrayers = state.notAnsweredPrayers.filter(
        prayer => prayer.id !== action.payload.id,
      );
      let ansPrayers = [...state.answeredPrayers, action.payload];
      return {
        ...state,
        answeredPrayers: ansPrayers,
        notAnsweredPrayers: notAnsPrayers,
      };
    }
    case 'GET_PRAYER_COMMENTS_SUCCESS':
      return {
        ...state,
        prayerComments: action.payload,
      };
    case 'ADD_COMMENT_SUCCESS':
      return {
        ...state,
        prayerComments: [...state.prayerComments, action.payload],
      };
    case 'DELETE_PRAYER_SUCCESS':
      return {
        ...state,
        answeredPrayers: state.answeredPrayers.filter(
          prayer => prayer.id !== action.payload,
        ),
        notAnsweredPrayers: state.notAnsweredPrayers.filter(
          prayer => prayer.id !== action.payload,
        ),
      };
    // case 'SIGN_IN_ERROR':
    //   return {
    //     ...state,
    //     isSignInFailed: true,
    //     isSignInFailedMessage: action.payload,
    //   };
    default:
      return state;
  }
};
