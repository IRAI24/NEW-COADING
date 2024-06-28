const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation (can be extended)
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all required fields.');
    return;
  }

  // Send data to server-side script using Fetch API
  fetch('/submit-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      message
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Message sent successfully!');
      form.reset();
    } else {
      alert('Error sending message: ' + data.message);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  });
});
