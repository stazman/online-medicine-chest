import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNavbar from './TopNavbar';
import Register from './registration_and_login/Register'
import Login from './registration_and_login/Login'
import Advisor from './advisor/Advisor';
import { Provider } from 'react-redux';
import store from '../store'
import BottomNavbar from './BottomNavbar';
import { Layout } from './Layout';
import Alert from './Alert';
import Dashboard from './Dashboard';
import PrivateRoute from './routing/PrivateRoute';
import { loadUser } from '../actions/auth';
import setAuthToken from '../utils/setAuthToken';


if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

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
              {
                <PrivateRoute
                  exact path='/dashboard'
                  component={Dashboard}
                />
              }
            </Switch>
          </Layout>
        <BottomNavbar />
      </Router>
    </Provider>
  );
}

export default App;
