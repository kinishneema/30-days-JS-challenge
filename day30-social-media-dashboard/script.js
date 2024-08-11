// User Registration
document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    const user = { username, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration Successful");
  });

// User Login
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (
    storedUser &&
    storedUser.username === username &&
    storedUser.password === password
  ) {
    alert("Login Successful");
  } else {
    alert("Invalid username or password");
  }
});

// Display User Profile
function displayProfile() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser) {
    document.getElementById("profile-info").innerHTML = `
            <p>Username: ${storedUser.username}</p>
            <p>Email: ${storedUser.email}</p>
        `;
  }
}

document.getElementById("edit-profile").addEventListener("click", function () {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const username = prompt("Update username", storedUser.username);
  const email = prompt("Update email", storedUser.email);

  const updatedUser = { ...storedUser, username, email };
  localStorage.setItem("user", JSON.stringify(updatedUser));
  alert("Profile Updated");
  displayProfile();
});

document.addEventListener("DOMContentLoaded", displayProfile);

// Post Submission
document.getElementById("post-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const postText = document.getElementById("post-text").value;
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const newPost = { username: storedUser.username, text: postText };

  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.push(newPost);
  localStorage.setItem("posts", JSON.stringify(posts));
  displayPosts();
});

// Display Posts
function displayPosts() {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  const postFeed = document.getElementById("post-feed");
  postFeed.innerHTML = posts
    .map(
      (post) => `
        <div class="post">
            <h3>${post.username}</h3>
            <p>${post.text}</p>
            <button class="like-btn">Like</button>
            <button class="comment-btn">Comment</button>
        </div>
    `
    )
    .join("");
}

document.getElementById("post-feed").addEventListener("click", function (e) {
  if (e.target.classList.contains("like-btn")) {
    alert("You liked this post");
  } else if (e.target.classList.contains("comment-btn")) {
    alert("Comment button clicked");
  }
});

document.addEventListener("DOMContentLoaded", displayPosts);
