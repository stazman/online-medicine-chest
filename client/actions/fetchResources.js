export function fetchResources(){
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/resources')
      .then( resp => resp.json() )
      .then( resources => dispatch({
        type: 'FETCH_RESOURCES',
        payload: resources
      }));
  };
}