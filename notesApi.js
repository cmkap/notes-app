class NotesApi {
    loadNotes(callback) {
      fetch('http://localhost:3000/notes')
        .then(response => response.json())
        .then(notes => {
          callback(notes)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        
    }

    createNote(note) {

        const noteAdd = { content: note };
        
        fetch('http://localhost:3000/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(noteAdd),
        })
        .then(response => response.json())
        .then(notes => {
            console.log('Success:', notes);
        })
        .catch((error) => {
                console.error('Error:', error);
        });
        

    }
  }
  

  module.exports = NotesApi;