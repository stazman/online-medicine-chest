function manageResources(state = {resources: []}, action){
  switch (action.type){
  case 'FETCH_RESOURCES':
    return {
      resources: action.payload
    };

  case 'ADD_RESOURCE':
    return {
      ...state, resources: [...state.resources, action.payload]
    };
    
  default:
    return state;
  }
}

export default manageResources;