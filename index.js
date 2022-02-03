// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

// 1. Setup the model with one note
const notesModel = new NotesModel;
console.log('The notes app is running');
notesModel.addNote('This is an example note')
notesModel.addNote('This is an example note2')

// 2. Setup the view
const notesView = new NotesView(notesModel);


// 3. Make the view display notes
notesView.displayNotes();

