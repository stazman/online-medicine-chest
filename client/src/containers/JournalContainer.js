import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchJournalEntries } from '../actions/fetchJournalEntries';
import JournalInput from '../components/journal/JournalInput';
import AllJournalEntries from '../components/journal/AllJournalEntries';
import JournalEntry from '../components/journal/JournalEntry';


class JournalContainer extends React.Component {

  componentDidMount(){
    this.props.fetchJournalEntries();
  }

  render(){
    return (
      <div>
        <Switch>
          <Route 
            exact path='/journals/new'
            component={JournalInput}
          />
          <Route 
            exact path='/journals/:id'
            render={(routerProps) => <JournalEntry {...routerProps} journalEntries={this.props.journalEntries} />}
          />
          <Route
            exact path='/journals/'
            render={(routerProps) => <AllJournalEntries {...routerProps} journalEntries={this.props.journalEntries} />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    journalEntries: state.manageJournal.journalEntries
  };
};

export default connect(mapStateToProps, {fetchJournalEntries})(JournalContainer);