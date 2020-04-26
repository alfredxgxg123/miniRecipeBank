const reducer = (state, action) => {
  switch (action.type) {
    case 'Search':
      return {
        google: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
