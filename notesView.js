class NotesView{
    constructor(notesModel) {
        this.notesModel = notesModel;
        this.mainContainerEl = document.querySelector('#main-container');
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
