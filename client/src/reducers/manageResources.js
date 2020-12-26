import { ADD_RESOURCE, FETCH_RESOURCE } from '../actions/types/resourceTypes';

function manageResources(state = {resources: []}, action){
  switch (action.type){
  case FETCH_RESOURCE:
    return {
      resources: action.payload
    };

  case ADD_RESOURCE:
    return {
      ...state, resources: [...state.resources, action.payload]
    };
    
  default:
    return state;
  }
}

export default manageResources;