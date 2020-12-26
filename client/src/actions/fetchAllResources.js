import { FETCH_RESOURCE } from './types/resourceTypes';
import axios from 'axios';

const apiUrl = 'http://localhost:8000/resources';

export const fetchResources = (resources) => {
  return {
    type: FETCH_RESOURCE,
    resources
  }
};

export function fetchAllResources(){
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchResources(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};