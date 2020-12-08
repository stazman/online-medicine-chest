import { ADD_RESOURCE } from './types/resourceTypes';
import axios from 'axios';

const apiUrl = 'http://localhost:8000/resource';

export const createPost = ({ title, description, url }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/add`, {title, description, url})
      .then(response => {
        dispatch(createPostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createPostSuccess = (data) => {
  return {
    type: ADD_RESOURCE,
    payload: {
      _id: data._id,
      title: data.title,
      description: data.description,
      url: data.url
    }
  }
};