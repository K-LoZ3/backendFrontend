const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return state.myList.find((item) => item.id === action.payload.id) ?
        state :
        {
          ...state,
          myList: [...state.myList, action.payload],
        };// No hace falta el breack porque estamos retornando.
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
               state.originals.find((item) => item.id === Number(action.payload)) ||
               [],
      };
    case 'SEARCH_REQUEST':
      if (action.payload === '') {
        return {
          ...state,
          search: [],
        };
      }
      const list = [...state.trends, ...state.originals];
      return {
        ...state,
        search: list.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase())) ||
               [],
      };
    default:
      return state;
  }
};

export default reducer;
