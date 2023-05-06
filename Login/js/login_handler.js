document.getElementById('signIn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the input values
    var email = document.getElementById('Email').value;
    var password = document.getElementById('Password').value;
  
    // Fetch the JSON file
    fetch('users.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(users) {
        // Perform login validation
        var validUser = users.find(function(user) {
          return user.email === email && user.password === password;
        });
  
        if (validUser) {
          alert('Login successful');
          // Redirect to the desired website
          window.location.href = 'https://alfa.beryllium.dev/';
        } else {
          alert('Invalid email or password');
        }
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  });
  