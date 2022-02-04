/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView')
const NotesModel = require('./notesModel')

describe ("Notes View", () => {
    describe ("display notes", () => {
        it("displays notes in the browser", () => {
            document.body.innerHTML = fs.readFileSync('./index.html');

            const notesModel = { 
                getNotes: () => ['testing', 'testing2']
            }

            const view = new NotesView(notesModel);

            view.displayNotes();

            expect(document.querySelectorAll('div.note').length).toBe(2);

        });


        it('adds a new note', () => {
            document.body.innerHTML = fs.readFileSync('./index.html');

            const model = new NotesModel();
            const view = new NotesView(model);

            // 1. Fill the input with the
            const input = document.querySelector('#add-note-input');
            input.value = 'Testing something here';
            
            //2. Click the button
            const button = document.querySelector('#add-note-btn');
            button.click();

            //3. The note should be on the page
            expect(document.querySelectorAll('div.note').length).toEqual(1);
            expect(document.querySelectorAll('div.note')[0].innerText).toEqual('Testing something here');
        });

        it('has the right number of notes', () => {
            document.body.innerHTML = fs.readFileSync('./index.html');

            const model = new NotesModel();
            const view = new NotesView(model);

            model.addNote('one');
            model.addNote('two');

            view.displayNotes();
            view.displayNotes();

            expect(document.querySelectorAll('div.note').length).toEqual(2);

        });

    });
});