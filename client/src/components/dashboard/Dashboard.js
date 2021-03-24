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
    <ButtonStyles>
      <h3>Welcome, {user && user.name}!</h3>
        <br></br><br></br>
        { profile !== null ?
          <>
            <div>
              <h3>
                Your current bio:
              </h3>
              <p>{profile.bio}</p>
            </div>
            <br></br><br></br>
            <div>
              <h3>
                Your current interests:
              </h3>
              <br></br>
              <ul className='inline'>
                {profile.interests.map( i =>
                  <li className='list-button'><Button variant='show-vsmall'>{i}</Button>&nbsp;&nbsp;</li>
                )}
              </ul>
            </div>
            <br></br><br></br><br></br>
            <DashboardActions />
          </>
        :
        <>
            <p>You have not set up a profile. Please add some info ...</p>
              <br></br>
              <Button variant="submit-sm" href='create-profile'>
                Create Profile
              </Button>
        </>
      }
    </ButtonStyles>

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
