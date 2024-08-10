document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    localStorage.setItem("username", username);
    showDashboard();
  } else {
    alert("Please enter a valid username and password.");
  }
});

function showDashboard() {
  document.getElementById("login-container").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
}

function checkLogin() {
  const username = localStorage.getItem("username");
  if (username) {
    showDashboard();
  }
}

checkLogin();

let posts = JSON.parse(localStorage.getItem("posts")) || [];

document.getElementById("post-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const content = document.getElementById("post-content").value;
  const image = document.getElementById("post-image").files[0];
  const username = localStorage.getItem("username");
  const timestamp = new Date().toLocaleString();

  const post = {
    username,
    content,
    image: image ? URL.createObjectURL(image) : null,
    timestamp,
    likes: 0,
    comments: [],
  };

  posts.push(post);
  localStorage.setItem("posts", JSON.stringify(posts));
  displayPosts();
  document.getElementById("post-form").reset();
});

function displayPosts() {
  const postsContainer = document.getElementById("posts-container");
  postsContainer.innerHTML = "";

  posts.forEach((post, index) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    if (post.username === localStorage.getItem("username")) {
      postElement.classList.add("own-post");
    }

    postElement.innerHTML = `
            <p><strong>${post.username}</strong> <em>${post.timestamp}</em></p>
            <p>${post.content}</p>
            ${post.image ? `<img src="${post.image}" alt="Post image">` : ""}
            <p>Likes: <span id="likes-${index}">${post.likes}</span></p>
            <button onclick="likePost(${index})">Like</button>
            <button onclick="commentPost(${index})">Comment</button>
            <div id="comments-${index}" class="comments-container">
                ${post.comments.map((comment) => `<p>${comment}</p>`).join("")}
            </div>
        `;

    postsContainer.appendChild(postElement);
  });
}

function likePost(index) {
  posts[index].likes += 1;
  localStorage.setItem("posts", JSON.stringify(posts));
  document.getElementById(`likes-${index}`).innerText = posts[index].likes;
}

function commentPost(index) {
  const comment = prompt("Enter your comment:");
  if (comment) {
    posts[index].comments.push(comment);
    localStorage.setItem("posts", JSON.stringify(posts));
    displayPosts();
  }
}

displayPosts();
