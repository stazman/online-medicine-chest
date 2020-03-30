export const addResource = (data) => {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/v1/resources', { 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(resource => dispatch({
        type: 'ADD_RESOURCE',
        payload: resource
      })
      );
  };
};