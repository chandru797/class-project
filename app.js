document.addEventListener("DOMContentLoaded", () => {
    const blogList = document.getElementById("blog-list");

    db.collection("blogs").orderBy("createdAt", "desc").onSnapshot(snapshot => {
        blogList.innerHTML = "";
        snapshot.forEach(doc => {
            let blog = doc.data();
            blogList.innerHTML += `
                <div class="blog">
                    <h3>${blog.title}</h3>
                    <p>${blog.content}</p>
                    <small>${new Date(blog.createdAt.toDate()).toLocaleString()}</small>
                </div>
            `;
        });
    });
});
