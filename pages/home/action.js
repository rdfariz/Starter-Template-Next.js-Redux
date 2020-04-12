export function setName(name) {
    return dispatch => {
      dispatch({
        type: 'SET_NAME',
        name
      })
    } 
}