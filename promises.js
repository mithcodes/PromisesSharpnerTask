const posts = [
    { title: 'Post One', body: 'this is post one' },
    { title: 'Post Two', body: 'this is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}: ${post.body}</li>`; // Display both title and body
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false; // Fix typo: Change '1error' to 'error'
            if (error) {
                reject('Error occurred'); // Pass an error message if needed
            } else {
                resolve('Post created successfully');
            }
        }, 2000);
    });
}

// Call createPost with a new post object
createPost({ title: 'New Post', body: 'This is a new post' })
    .then((message) => {
        console.log(message);
        getPosts(); // Call getPosts after creating a new post
    })
    .catch((error) => {
        console.error(error);
    });

// Additional promises
const promise1 = Promise.resolve('Hello world'); // Fix typo: 'Promise.resolve("hello world";' to 'Promise.resolve('Hello world');'
const promise2 = Promise.resolve(10);
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Goodbye'), 2000);
});

// Using Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values);
    })
    .finally(() => {
        console.log('All promises completed');
    });
