const initialState = {
  notes: JSON.parse(localStorage.getItem("notes")) || [],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case "ADD_NOTE":
      const newNotesAdd = [...state.notes, action.payload];
      localStorage.setItem("notes", JSON.stringify(newNotesAdd));
      return { ...state, notes: newNotesAdd };

    case "DELETE_NOTE":
      const newNotesDelete = state.notes.filter((note) => note.id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(newNotesDelete));
      return { ...state, notes: newNotesDelete };

    case "UPDATE_NOTE":
      const newNotesUpdate = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
      localStorage.setItem("notes", JSON.stringify(newNotesUpdate));
      return { ...state, notes: newNotesUpdate };
    default:
      return state;
  }
};

export default noteReducer;
