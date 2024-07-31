document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('post-form');
    const recentPosts = document.getElementById('recent-posts');
    const postList = document.getElementById('post-list');
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');

    if (postForm) {
        postForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;

            const post = {
                id: Date.now(),
                title,
                content,
                timestamp: new Date().toISOString()
            };

            let posts = JSON.parse(localStorage.getItem('posts')) || [];
            posts.push(post);
            localStorage.setItem('posts', JSON.stringify(posts));

            window.location.href = 'index.html';
        });
    }

    if (recentPosts) {
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts = posts.slice(-5).reverse();
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'bg-white p-4 rounded shadow-sm';
            postElement.innerHTML = `<h2 class="text-xl font-bold"><a href="post_detail.html?id=${post.id}">${post.title}</a></h2><p>${post.content.substring(0, 100)}...</p>`;
            recentPosts.appendChild(postElement);
        });
    }

    if (postList) {
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'bg-white p-4 rounded shadow-sm';
            postElement.innerHTML = `<h2 class="text-xl font-bold"><a href="post_detail.html?id=${post.id}">${post.title}</a></h2><p>${post.content.substring(0, 100)}...</p>`;
            postList.appendChild(postElement);
        });
    }

    if (postTitle && postContent) {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('id');
        if (postId) {
            let posts = JSON.parse(localStorage.getItem('posts')) || [];
            const post = posts.find(post => post.id == postId);
            if (post) {
                postTitle.textContent = post.title;
                postContent.textContent = post.content;
            }
        }
    }
});
