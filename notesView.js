class NotesView{
    constructor(notesModel, notesApi) {
        this.notesModel = notesModel;
        this.notesApi = notesApi;
        this.mainContainerEl = document.querySelector('#main-container');
        
        document.querySelector('#add-note-btn').addEventListener('click', () => {
            const newNote = document.querySelector('#add-note-input').value;
            this.addNewNote(newNote);
            document.querySelector('#add-note-input').value = ""
        });
    }

    addNewNote(newNote) {
        this.notesModel.addNote(newNote);
        this.notesApi.createNote(newNote);
        this.displayNotes();
    }

    displayNotes() {

        
        document.querySelectorAll('.note').forEach(element => {
            element.remove();
          });

        const notes = this.notesModel.getNotes();
    
        notes.forEach(note => {
            let noteEl = document.createElement('div')
            noteEl.innerText = note;
            noteEl.className = 'note';
            this.mainContainerEl.append(noteEl);
        });
    }
}

module.exports = NotesView;
