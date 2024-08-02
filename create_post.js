document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('post-form');
    let isVerified = false;

    const verifyWithWorldIDButton = document.getElementById('verify-with-world-id');
    verifyWithWorldIDButton.addEventListener('click', function() {
        const widget = new window.IDKitWidget({
            app_id: "app_6c3821fa0dbede374338de59f453db3b",
            action: "verify",
            signal: "login",
            onSuccess: async (response) => {
                console.log("Verification successful:", response);

                // Send the proof to your API server for verification
                const res = await fetch('/api/verify', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ proof: response, signal: "login" }),
                });

                const result = await res.json();
                if (result.verified) {
                    isVerified = true;
                    alert("Verification successful!");
                } else {
                    alert("Verification failed. Please try again.");
                }
            },
            onError: (error) => {
                console.error("Verification failed:", error);
                alert("Verification failed. Please try again.");
            }
        });
        widget.open();
    });

    postForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        try {
            await addDoc(collection(db, "posts"), {
                title: title,
                content: content,
                timestamp: new Date(),
                verified: isVerified
            });
            console.log('Document successfully written!');
            window.location.href = 'index.html';
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    });
});
