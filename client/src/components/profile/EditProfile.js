import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";


const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    bio: "",
    interests: [],
  });

  const { bio, interests } = formData;

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      bio: loading || !profile.bio ? '' : profile.bio,
      interests: loading || !profile.interests ? '' : profile.interests.join(',')
    })
  }, [loading]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <>
      <h1 className="large text-primary">Create Your Profile</h1>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <h3>Let us know a little about you!</h3>
          <br></br>
          <textarea
            id="bio"
            name="bio"
            placeholder="A short bio of yourself"
            rows="3"
            cols="50"
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <div className="form-group">
          <input
            id="interests"
            name="interests"
            type="text"
            placeholder="What are some of your interests?"
            size="50"
            value={interests}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            Please use comma separated values (eg. reading, hiking, cats)
          </small>
        </div>

        <input type="submit" className="btn btn-primary my-1" />
        <br></br>
        <br></br>
        <a className="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  profile: state.profile
});

export default connect(mapStatetoProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
