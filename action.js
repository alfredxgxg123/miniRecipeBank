const onSearch = (dispatch) => (data) => dispatch({ type: 'Search', payload: data });

export default onSearch;
