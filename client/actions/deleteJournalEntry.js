export const deleteJournalEntry = (journalEntryId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3001/api/v1/journals/${journalEntryId}`, {
      method: 'DELETE'
    })
      .then(resp => resp.json())
      .then(journalEntry => dispatch({
        type: 'DELETE_JOURNAL_ENTRY', 
        payload: journalEntry}
      ));
  };
};