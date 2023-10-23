async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const name = document.querySelector('#name').value;
    // Send fetch request to add a new dish
    const response = await fetch("/api/conversations.js", {
      method: 'POST',
      body: JSON.stringify({
        name,
        description,
        title,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the dish is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add comment');
    }
  }
  
  document.querySelector('.new-comment').addEventListener('submit', newFormHandler);
    