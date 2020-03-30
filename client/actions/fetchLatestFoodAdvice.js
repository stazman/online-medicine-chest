export function fetchLatestFoodAdvice () {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/food_advisors')
      .then( resp => resp.json() )
      .then( foodAdvisors => dispatch({
        type: 'FETCH_LATEST_FOOD_ADVICE',
        payload: foodAdvisors
      }));
  };
}

