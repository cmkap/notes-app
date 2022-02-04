class NotesApi {
    getRepoInfo(repoName, callback) {
      fetch('http://localhost:3000/' + repoName)
        .then(response => response.json())
        .then(data => {
          callback(data)
        });
    }
  }
  
  module.exports = NotesApi;