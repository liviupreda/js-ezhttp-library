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
ezHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  // Set Content type
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    // NULL is the error, similar to node
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// PUT
ezHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  // Set Content type
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    // NULL is the error, similar to node
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// DESTROY
ezHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      // NULL is the error, similar to node
      callback(null, 'Post deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  this.http.send();
};
