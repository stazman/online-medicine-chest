import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ProfileInput = props => {

  const [formData, setFormData] = useState({
    bio: '',
    interests: []
  });

  const {
    bio,
    interests
  } = setFormData;

  return (
    <>
      <h1 className="large text-primary">
        Create Your Profile
      </h1>
      <form className="form">
        <div className="form-group">
            <h3>Let us know a little about you!</h3>
            <br></br>
            <textarea
              id='bio'
              name='bio'
              placeholder="A short bio of yourself"
              rows='3'
              cols='50'>
            </textarea>
        </div>
        <div className="form-group">
          <input type="text" placeholder="What are some of your interests?" name="interests" size='50' />
          <small className="form-text">Please use comma separated values (eg.
            reading, hiking, cats)
          </small>
        </div>

        <input type="submit" className="btn btn-primary my-1" />
        <br></br><br></br>
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
      </>
)
}

ProfileInput.propTypes = {

}

export default ProfileInput;
