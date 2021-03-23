import React, { useEffect } from "react";
import { Button } from 'react-bootstrap';
import ButtonStyles from '../styles/ButtonStyles';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layouts/Spinner";
import DashboardActions from './DashboardActions';


const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile])


  return loading && profile === null ? (
    <Spinner />
  ) : (
    <>
      <h1>Dashboard</h1>
      <h3>Welcome, {user && user.name}</h3>


      { profile !== null ?
        <>
          <DashboardActions />
        </> :
      <ButtonStyles>
        <p>You have not set up a profile. Please add some info ...</p>
          <br></br>
          <Button variant="submit-sm" href='create-profile'>
            Create Profile
          </Button>
      </ButtonStyles>
      }
    </>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStatetoProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStatetoProps, { getCurrentProfile })(Dashboard);
