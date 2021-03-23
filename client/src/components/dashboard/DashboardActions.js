import React from 'react';
import { Button } from 'react-bootstrap';
import ButtonStyles from '../styles/ButtonStyles';


const DashboardActions = () => {
  return (
    <div>
      <ButtonStyles>
        <Button variant="submit-sm" href='edit-profile'>
          Edit Profile
        </Button>
        &nbsp;&nbsp;
        <Button variant="submit-sm" href='add-interest'>
          Add an Interest
        </Button>
      </ButtonStyles>
    </div>
  )
}

export default DashboardActions;