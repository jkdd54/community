document.addEventListener('DOMContentLoaded', function () {
  const postTitle = document.getElementById('post-title');
  const postContent = document.getElementById('post-content');

  if (postTitle && postContent) {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    if (postId) {
      const docRef = db.collection("posts").doc(postId);
      docRef.get()
        .then((doc) => {
          if (doc.exists) {
            const post = doc.data();
            console.log('Post detail:', post);
            postTitle.textContent = post.title;
            postContent.textContent = post.content;
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.error("Error getting document: ", error);
        });
    }
  }
});
