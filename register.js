const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch('https://your-backend-project-id.vercel.app/api/register', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorData = await response.json(); 
      console.error('Registration failed:', errorData.message || response.status); 
      alert('Registration failed. ' + (errorData.message || 'Please try again.')); 
    } else {
      console.log('Registration successful!');
      alert('Registration successful! Please check your email for verification.'); 
      // You might want to redirect to a success page instead of 
      // directly to verifyEmail.html, as the verification link 
      // will be sent to the user's email.
      // window.location.href = 'success.html'; 
    }
  } catch (error) {
    console.error('Error during registration:', error);
    alert('An error occurred during registration. Please try again.');
  }
});
