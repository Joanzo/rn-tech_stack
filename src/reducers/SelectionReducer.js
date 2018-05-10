export default (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case 'select_library':
      // if it is expanded then return null (to close it)
      return (state === action.payload) ? null : action.payload;
    default:
      return state;
  }
}
