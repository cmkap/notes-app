class NotesView{
    constructor(notesModel) {
        this.notesModel = notesModel;
        this.mainContainerEl = document.querySelector('#main-container');
        
        document.querySelector('#add-note-btn').addEventListener('click', () => {
            const newNote = document.querySelector('#add-note-input').value;
            this.addNewNote(newNote);
        });
    }

    addNewNote(newNote) {
        this.notesModel.addNote(newNote);
        this.displayNotes();
    }

    displayNotes() {
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
