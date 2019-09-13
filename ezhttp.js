// using JSONPlaceholder fake REST API https://jsonplaceholder.typicode.com/

function ezHTTP() {
  this.http = new XMLHttpRequest();
}

// GET
ezHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      // NULL is the error, similar to node
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  this.http.send();
};

// POST

// PUT

// DESTROY
