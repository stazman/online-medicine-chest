function manageJournal(state = {journalEntries: []}, action) {
  switch (action.type) {
  case 'FETCH_JOURNAL_ENTRIES':
    return {
      journalEntries: action.payload
    };

  case 'ADD_JOURNAL_ENTRY':
    return {
      ...state, journalEntries: [...state.journalEntries, action.payload]
    };

  case 'DELETE_JOURNAL_ENTRY':
    return {journalEntries: state.journalEntries.filter(journalEntry => journalEntry.id !== action.payload.id)};

  default:
    return state;
  }
}

export default manageJournal;