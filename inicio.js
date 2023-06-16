document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Aquí puedes agregar la lógica de validación del inicio de sesión
  
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  });
  