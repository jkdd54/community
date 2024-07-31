import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, orderBy, limit, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";

// Firebase 구성 정보
const firebaseConfig = {
  apiKey: "AIzaSyDGKmefqcWtIPXYqZBzpBETw_IdEfp1bJQ",
  authDomain: "worldcommunity-ed8b9.firebaseapp.com",
  projectId: "worldcommunity-ed8b9",
  storageBucket: "worldcommunity-ed8b9.appspot.com",
  messagingSenderId: "261985250862",
  appId: "1:261985250862:web:2b06b9fd30be2eb0d0b9bf",
  measurementId: "G-5WH98LB695"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// 익명 사용자로 로그인
signInAnonymously(auth).catch((error) => {
  console.error("Error signing in anonymously: ", error);
});

document.addEventListener('DOMContentLoaded', function () {
  const postForm = document.getElementById('post-form');
  const recentPosts = document.getElementById('recent-posts');
  const postList = document.getElementById('post-list');
  const postTitle = document.getElementById('post-title');
  const postContent = document.getElementById('post-content');

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is signed in:', user);
    } else {
      console.log('No user is signed in.');
    }
  });

  if (postForm) {
    postForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;

      try {
        await addDoc(collection(db, "posts"), {
          title: title,
          content: content,
          timestamp: new Date()
        });
        console.log('Document successfully written!');
        window.location.href = 'index.html';
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    });
  }

  if (recentPosts) {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"), limit(5));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const post = doc.data();
        console.log('Post:', post);
        const postElement = document.createElement('div');
        postElement.className = 'bg-white p-4 rounded shadow-sm';
        postElement.innerHTML = `<h2 class="text-xl font-bold">${post.title}</h2><p>${post.content.substring(0, 100)}...</p>`;
        recentPosts.appendChild(postElement);
      });
    }).catch((error) => {
      console.error("Error getting documents: ", error);
    });
  }

  if (postList) {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const post = doc.data();
        console.log('Post:', post);
        const postElement = document.createElement('div');
        postElement.className = 'bg-white p-4 rounded shadow-sm';
        postElement.innerHTML = `<h2 class="text-xl font-bold"><a href="post_detail.html?id=${doc.id}">${post.title}</a></h2><p>${post.content.substring(0, 100)}...</p>`;
        postList.appendChild(postElement);
      });
    }).catch((error) => {
      console.error("Error getting documents: ", error);
    });
  }

  if (postTitle && postContent) {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    if (postId) {
      const docRef = doc(db, "posts", postId);
      getDoc(docRef).then((doc) => {
        if (doc.exists()) {
          const post = doc.data();
          console.log('Post:', post);
          postTitle.textContent = post.title;
          postContent.textContent = post.content;
        } else {
          console.log("No such document!");
        }
      }).catch((error) => {
        console.error("Error getting document: ", error);
      });
    }
  }
});
