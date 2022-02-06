
const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks();

describe('NotesApi', () => {
  it('calls fetch and displays notes on the page', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      notes: ['This note is coming from the server']
    }));

    api.loadNotes((response) => {
      expect(response.notes[0]).toBe('This note is coming from the server');
    });
  });

  jest.mock('./notesApi');

  it('posts a note to the server', async () => {
    const api = new NotesApi();
    api.createNote('This is another note')

    fetch.mockResponseOnce(JSON.stringify());
    
    api.loadNotes((response) => {
      expect(response).toBe(["This note is coming from the server", "This is another note"]);
    });
  });


});