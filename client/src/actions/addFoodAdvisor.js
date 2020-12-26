export const addFoodAdvisor = (data) => {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/v1/food_advisors', { 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(foodAdvisor => dispatch({
        type: 'ADD_FOOD_ADVISOR',
        payload: foodAdvisor
      })
      );
  };
};