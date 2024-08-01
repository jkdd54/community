import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore, collection, query, getDocs, orderBy, addDoc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
import { IDKitWidget } from 'https://cdn.jsdelivr.net/npm/@worldcoin/idkit@1.0.4/dist/index.umd.min.js';

document.addEventListener('DOMContentLoaded', async function () {
    // Firebase 구성 정보
    const firebaseConfig = {
        apiKey: "API_KEY",
        authDomain: "worldcommunity-ed8b9.firebaseapp.com",
        projectId: "worldcommunity-ed8b9",
        storageBucket: "worldcommunity-ed8b9.appspot.com",
        messagingSenderId: "261985250862",
        appId: "1:261985250862:web:2b06b9fd30be2eb0d0b9bf"
    };

    // Firebase 초기화
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    const postForm = document.getElementById('post-form');
    const recentPosts = document.getElementById('recent-posts');
    const postList = document.getElementById('post-list');
    const worldIDButton = document.getElementById('world-id-login');
    const messageElement = document.getElementById('login-message');

    onAuthStateChanged(auth, async (user) => {
        if (!user) {
            await signInAnonymously(auth);
        }

        if (postForm) {
            postForm.addEventListener('submit', async function (e) {
                e.preventDefault();
                const title = document.getElementById('title').value;
                const content = document.getElementById('content').value;

                const post = {
                    title,
                    content,
                    timestamp: new Date().toISOString(),
                    uid: user.uid
                };

                await addDoc(collection(db, "posts"), post);

                window.location.href = 'index.html';
            });
        }

        if (recentPosts || postList) {
            const postsQuery = query(collection(db, "posts"), orderBy("timestamp", "desc"));
            const postsSnapshot = await getDocs(postsQuery);
            const posts = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            if (recentPosts) {
                const recentPostsSlice = posts.slice(0, 5);
                recentPostsSlice.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.className = 'bg-white p-4 rounded shadow-sm';
                    postElement.innerHTML = `<h2 class="text-xl font-bold"><a href="post_detail.html?id=${post.id}">${post.title}</a></h2><p>${post.content.substring(0, 100)}...</p>`;
                    recentPosts.appendChild(postElement);
                });
            }

            if (postList) {
                posts.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.className = 'bg-white p-4 rounded shadow-sm';
                    postElement.innerHTML = `<h2 class="text-xl font-bold"><a href="post_detail.html?id=${post.id}">${post.title}</a></h2><p>${post.content.substring(0, 100)}...</p>`;
                    postList.appendChild(postElement);
                });
            }
        }
    });

    // World ID Widget 설정
    worldIDButton.addEventListener('click', function() {
        const widget = new IDKitWidget({
            app_id: "app_6c3821fa0dbede374338de59f453db3b",
            action: "verify",
            signal: "login",
            onSuccess: async (response) => {
                console.log("Verification successful:", response);

                // Send the proof to your API server
                const res = await fetch('http://localhost:3000/api/verify', { // Next.js 서버 주소로 수정
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ proof: response }),
                });

                const result = await res.json();
                if (result.verified) {
                    messageElement.textContent = "로그인에 성공했습니다";
                    messageElement.classList.remove('text-red-500');
                    messageElement.classList.add('text-green-500');
                } else {
                    messageElement.textContent = "인증 실패. 다시 시도해 주세요.";
                    messageElement.classList.remove('text-green-500');
                    messageElement.classList.add('text-red-500');
                }
            },
            onError: (error) => {
                console.error("Verification failed:", error);
                messageElement.textContent = "인증 실패. 다시 시도해 주세요.";
                messageElement.classList.remove('text-green-500');
                messageElement.classList.add('text-red-500');
            }
        });
        widget.open();
    });
});
