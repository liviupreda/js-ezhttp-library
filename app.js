// const http = new ezHTTP();

// // Get posts
// // http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(posts);
// //   }
// // });

// // Get single post
// // http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(post);
// //   }
// // });

// //Create Data for POST/ PUT
// const data = {
//   title: 'Custom Post',
//   body: 'This is a custom post'
// };

// // POST request
// // http.post('https://jsonplaceholder.typicode.com/posts', data, function(
// //   err,
// //   post
// // ) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(post);
// //   }
// // });

// // PUT request (update post)
// // http.put('https://jsonplaceholder.typicode.com/posts/100', data, function(
// //   err,
// //   post
// // ) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(post);
// //   }
// // });

// // DELETE posts
// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(
//   err,
//   response
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

const http = new EzHTTP();

// Get users
// http
//   .get('https://jsonplaceholder.typicode.com/users') //returns a promise
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Create User Data
const data = {
  name: 'Liv Preda',
  username: 'lpreda',
  email: 'lp@liviupreda.me'
};

// POST data
// http
//   .post('https://jsonplaceholder.typicode.com/users', data) //returns a promise
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// PUT data (update user)
http
  .put('https://jsonplaceholder.typicode.com/users/2', data) //returns a promise
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Delete User
// http
//   .delete('https://jsonplaceholder.typicode.com/users/2') //returns a promise
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
