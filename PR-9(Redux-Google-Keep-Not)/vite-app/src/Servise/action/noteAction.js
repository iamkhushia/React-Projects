export const addNote = (note) => (dispatch) => {
    dispatch({ type: "ADD_NOTE", 
      payload: note 
    });
  };
  
  export const deleteNote = (id) => (dispatch) => {
    dispatch({ type: "DELETE_NOTE",
       payload: id 
    });
  };
  
  export const updateNote = (note) => (dispatch) => {
    dispatch({ type: "UPDATE_NOTE", 
      payload: note 
    });
  };  