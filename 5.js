const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(posts => {
    const postsContainer = document.getElementById('posts');
    posts.slice(0, 5).forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <hr />
      `;
      postsContainer.appendChild(postElement);
    });
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
    document.getElementById('posts').innerHTML = '<p>Failed to load posts.</p>';
  });