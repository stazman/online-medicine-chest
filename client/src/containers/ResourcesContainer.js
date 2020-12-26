import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchAllResources } from '../actions/fetchAllResources';
import ResourceInput from '../components/resources/ResourceInput';
import Resources from '../components/resources/Resources';

class ResourcesContainer extends React.Component {

  componentDidMount(){
    this.props.fetchAllResources();
  }

  render(){
    return (
      <div>
        <Switch>
          <Route
            exact path='/resources/new'
            component={ResourceInput}
          />
          <Route
            exact path='/resources/'
            render={(routerProps) => <Resources {...routerProps} resources={this.props.resources} />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    resources: state.manageResources.resources
  };
};

export default connect(mapStateToProps, {fetchAllResources})(ResourcesContainer);