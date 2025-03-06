// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { deleteNote } from "../Servise/action/noteAction";
// import { Button, Card, Container } from "react-bootstrap";


// const Home = () => {
//   const notes = useSelector((state) => state.notes.notes);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   return (
//     <Container>
//       <h2 className="mt-4">My Notes</h2>
//       <Button onClick={() => navigate("/add")} variant="primary" className="mb-3">Add Note</Button>
//       <div className="d-flex flex-wrap">
//         {notes.map((note) => (
//           <Card key={note.id} className="m-2" style={{ width: "18rem" }}>
//             <Card.Body>
//               <Card.Title>{note.title}</Card.Title>
//               <Card.Text>{note.content}</Card.Text>
//               <Button onClick={() => navigate(`/edit/${note.id}`)} variant="warning">Edit</Button>
//               <Button onClick={() => dispatch(deleteNote(note.id))} variant="danger" className="ms-2">Delete</Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default Home;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteNote } from "../Servise/action/noteAction";
import { Button, Card, Container } from "react-bootstrap";

const Home = () => {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container className="home-container">
      <h2 className="home-title">My Notes</h2>
      <Button onClick={() => navigate("/add")} className="add-note-btn mb-3">+ Add Note</Button>
      <div className="notes-container">
        {notes.map((note) => (
          <Card key={note.id} className="note-card">
            <Card.Body className="note-card-body">
              <Card.Title className="note-title">{note.title}</Card.Title>
              <Card.Text className="note-content">{note.content}</Card.Text>
            </Card.Body>
            <div className="note-actions">
              <Button onClick={() => navigate(`/edit/${note.id}`)} className="edit-btn">Edit</Button>
              <Button onClick={() => dispatch(deleteNote(note.id))} className="delete-btn">Delete</Button>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Home;


