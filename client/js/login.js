document.getElementById('admin-login-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (!username || !password) {
      alert('Please fill out both fields.');
      return;
    }
  
    // Handle login logic here
    alert('Login Successful!'); // Example
  });
  