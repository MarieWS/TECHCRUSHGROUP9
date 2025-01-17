const sendEmailForm = document.getElementById('sendEmailForm');

sendEmailForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(sendEmailForm);
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch('/api/send-email', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      console.error('Error sending email:', await response.text());
      alert('Error sending email. Please try again.');
    } else {
      alert('Email sent successfully!');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
});
