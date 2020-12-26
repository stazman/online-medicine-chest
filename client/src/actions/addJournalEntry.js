export const addJournalEntry = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/journals', { 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(journalEntry => 
        dispatch({
          type: 'ADD_JOURNAL_ENTRY', 
          payload: journalEntry
        })
      );
  };
};