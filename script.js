document.addEventListener("DOMContentLoaded", loadPosts);

document.getElementById("blogForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    let post = { title, content };
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    loadPosts();
});

function loadPosts() {
    let postsContainer = document.getElementById("postsContainer");
    postsContainer.innerHTML = "";

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.forEach((post, index) => {
        let postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <button class="delete-btn" onclick="deletePost(${index})">Delete</button>
        `;
        postsContainer.appendChild(postElement);
    });
}

function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(posts));
    loadPosts();
}
