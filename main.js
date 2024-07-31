document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('post-form');
    const recentPosts = document.getElementById('recent-posts');
    const postList = document.getElementById('post-list');
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');

    auth.onAuthStateChanged(user => {
        if (user) {
            console.log('User is signed in:', user);
        } else {
            console.log('No user is signed in.');
        }
    });

    if (postForm) {
        postForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;

            db.collection("posts").add({
                title: title,
                content: content,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                window.location.href = 'index.html';
            })
            .catch(error => {
                console.error("Error adding document: ", error);
            });
        });
    }

    if (recentPosts) {
        db.collection("posts").orderBy("timestamp", "desc").limit(5).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const post = doc.data();
                const postElement = document.createElement('div');
                postElement.className = 'bg-white p-4 rounded shadow-sm';
                postElement.innerHTML = `<h2 class="text-xl font-bold">${post.title}</h2><p>${post.content.substring(0, 100)}...</p>`;
                recentPosts.appendChild(postElement);
            });
        });
    }

    if (postList) {
        db.collection("posts").orderBy("timestamp", "desc").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const post = doc.data();
                const postElement = document.createElement('div');
                postElement.className = 'bg-white p-4 rounded shadow-sm';
                postElement.innerHTML = `<h2 class="text-xl font-bold"><a href="post_detail.html?id=${doc.id}">${post.title}</a></h2><p>${post.content.substring(0, 100)}...</p>`;
                postList.appendChild(postElement);
            });
        });
    }

    if (postTitle && postContent) {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('id');
        if (postId) {
            db.collection("posts").doc(postId).get().then((doc) => {
                if (doc.exists) {
                    const post = doc.data();
                    postTitle.textContent = post.title;
                    postContent.textContent = post.content;
                } else {
                    console.log("No such document!");
                }
            }).catch(error => {
                console.log("Error getting document: ", error);
            });
        }
    }
});
