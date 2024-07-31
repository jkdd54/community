document.addEventListener('DOMContentLoaded', function () {
  const postTitle = document.getElementById('post-title');
  const postContent = document.getElementById('post-content');

  if (postTitle && postContent) {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    if (postId) {
      // Firebase 초기화
      const firebaseConfig = {
        apiKey: "AIzaSyDGKmefqcWtIPXYqZBzpBETw_IdEfp1bJQ",
        authDomain: "worldcommunity-ed8b9.firebaseapp.com",
        projectId: "worldcommunity-ed8b9",
        storageBucket: "worldcommunity-ed8b9.appspot.com",
        messagingSenderId: "261985250862",
        appId: "1:261985250862:web:2b06b9fd30be2eb0d0b9bf",
        measurementId: "G-5WH98LB695"
      };

      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);

      const docRef = doc(db, "posts", postId);
      getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          const post = docSnap.data();
          console.log('Post detail:', post);
          postTitle.textContent = post.title;
          postContent.textContent = post.content;
        } else {
          console.log("No such document!");
        }
      }).catch((error) => {
        console.error("Error getting document:", error);
      });
    }
  }
});
