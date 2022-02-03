/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView')

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

        })
    })
})