function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('errrr');
        }, 1000);
    })
};

// Fetch example
async function getPostsFromAPI() {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    render(posts);
}

getPostsFromAPI();

function render(posts) {
    let output = '';
    posts.forEach(post => output += `<h1>Post Title: ${post.title}</h1>`)
    document.body.innerHTML = output
}