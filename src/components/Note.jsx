import React, { useState } from "react";
import "./Note.css"
import { TextField, Button, Card, CardContent, CardActions, Typography, Grid, IconButton, Container,} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
 
const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
 
  const handleAddNote = () => {
    if (title.trim() === "" || description.trim() === "") return;
    if (editingIndex !== null) {
     
      const updatedNotes = [...notes];
      updatedNotes[editingIndex] = { title, description };
      setNotes(updatedNotes);
      setEditingIndex(null);
    } else {
     
      setNotes([...notes, { title, description }]);
    }
    setTitle("");
    setDescription("");
  };
 
  const handleEditNote = (index) => {
    setEditingIndex(index);
    setTitle(notes[index].title);
    setDescription(notes[index].description);
  };
 
  const handleDeleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };
 
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Notes Manager
      </Typography>
     
    
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={5}>
<TextField fullWidth label="Title" value={title} onChange={(e) => setTitle(e.target.value)} variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField fullWidth label="Description" value={description} onChange={(e) => setDescription(e.target.value)} variant="outlined"/>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button variant="contained" color="green" fullWidth onClick={handleAddNote}> {editingIndex !== null ? "Update" : "Add"}
          </Button>
        </Grid>
      </Grid>
 
     
      <Grid container spacing={2}>
        {notes.map((note, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{note.title}</Typography>
                <Typography variant="body2">{note.description}</Typography>
              </CardContent>
              <CardActions>
                <IconButton color="primary" onClick={() => handleEditNote(index)}>
                  <Edit />
                </IconButton>
                <IconButton color="error" onClick={() => handleDeleteNote(index)}>
                  <Delete />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
 
export default NotesApp;
 
 