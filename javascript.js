function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Check credentials (replace this with your authentication logic)
    if (username === 'user' && password === 'password') {
      // Successful login
      localStorage.setItem('loggedInUser', username);
      toggleForms();
    } else {
      alert('Invalid login credentials. Please try again.');
    }
  }
  
  function logout() {
    localStorage.removeItem('loggedInUser');
    toggleForms();
  }
  
  function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const logoutForm = document.getElementById('logoutForm');
    const loggedInUser = document.getElementById('loggedInUser');
  
    if (localStorage.getItem('loggedInUser')) {
      loginForm.classList.add('hidden');
      logoutForm.classList.remove('hidden');
      loggedInUser.textContent = localStorage.getItem('loggedInUser');
    } else {
      loginForm.classList.remove('hidden');
      logoutForm.classList.add('hidden');
    }
  }
  
  // Check if user is already logged in on page load
  window.addEventListener('load', toggleForms);
  