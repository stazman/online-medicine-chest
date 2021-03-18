import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNavbar from './TopNavbar';
import Register from './registration_and_login/Register'
import Login from './registration_and_login/Login'
import Advisor from './advisor/Advisor';
// import FoodAdvisorsContainer from '../containers/FoodAdvisorsContainer';
// import TrackerHome from './trackers/TrackerHome';
// import JournalHome from './journal/JournalHome';
// import JournalContainer from '../containers/JournalContainer';
// import ResourceHome from './resources/ResourceHome';
// import ResourcesContainer from '../containers/ResourcesContainer';
// import CommunityHome from './community/CommunityHome';
import { Provider } from 'react-redux';
import store from '../store'
import BottomNavbar from './BottomNavbar';
import { Layout } from './Layout';
import Alert from './Alert'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <TopNavbar />
          <Layout>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <Alert />
              <Switch>
                {
                  <Route
                    exact path='/'
                    component={Advisor}
                  />
                }
                {
                  <Route
                    exact path='/register'
                    component={Register}
                  />
                }
                {
                  <Route
                    exact path='/login'
                    component={Login}
                  />
                }
                {/* {
                  <Route
                    exact path='/tracker_home'
                    component={TrackerHome}
                  />
                } */}
                {/* {
                  <Route
                    exact path='/journal_home'
                    component={JournalHome}
                  />
                } */}
                {/* {
                  <Route
                    exact path='http://localhost:8000/resource_home'
                    component={ResourceHome}
                  />
                } */}
                {/* {
                  <Route
                    exact path='/community_home'
                    component={CommunityHome}
                  />
                } */}
              </Switch>

              {/* <FoodAdvisorsContainer />

              <JournalContainer />

              <ResourcesContainer /> */}

          </Layout>
        <BottomNavbar />
      </Router>
    </Provider>
  );
}

export default App;
