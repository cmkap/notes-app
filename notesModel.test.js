const NotesModel = require('./notesModel')

let notes;
beforeEach(() => {
  notes = new NotesModel();
});

describe('Notes model class', () => {
    it('starts with no notes', () => {
        expect(notes.getNotes()).toEqual([]);
    });

    describe('add note', () => {
        it('adds a note', () => {
            notes.addNote('Note test');

            expect(notes.getNotes()).toEqual(['Note test']);
        });
    });

    describe('reset', () => {
        it('resets the list of note', () => {
            notes.addNote('Note test');
            notes.addNote('Note test2');
            notes.reset();

            expect(notes.getNotes()).toEqual([]);
        });
    });
});