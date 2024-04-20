const inputPostNumber = document.getElementById('postNumber');
const postSubmitBtn = document.getElementById('postSubmitBtn');
const postTitle = document.getElementById('postTitle');
const postBody = document.getElementById('postBody');
const postID = document.getElementById('postID');
const UserID = document.getElementById('postUserId');
var postJSON = {};
/* console.log({ inputPostNumber, postSubmitBtn, postTitle, postBody, UserID }); */

function getPost(postNumber) {
  const api_url = `https://jsonplaceholder.typicode.com/posts/${postNumber}`;
  return fetch(api_url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      postJSON = data;
      return data;
    })
    .catch((error) => {
      console.log('An error occurred: ' + error.message);
    });
}

function showPost(post) {
  postTitle.textContent = post.title;
  postBody.textContent = post.body;
  UserID.textContent = post.userId;
  postID.textContent = post.id;
}
postSubmitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  getPost(inputPostNumber.value)
    .then((post) => {
      if (post) {
        console.log(postJSON);
        showPost(postJSON);
      }
    })
    .catch((error) => {
      console.log('An error occurred: ' + error.message);
    });
});
