function toggleForm() {
    var registroForm = document.getElementById("registroForm");
    var loginContainer = document.getElementById("loginContainer");
    
    if (registroForm.style.display === "none") {
        registroForm.style.display = "block";
        loginContainer.style.display = "none";
    } else {
        registroForm.style.display = "none";
        loginContainer.style.display = "block";
    }
}

var registroForm = document.getElementById("registroForm");
var loginForm = document.getElementById("loginForm");
var successMessage = document.getElementById("successMessage");
var loginSuccessMessage = document.getElementById("loginSuccessMessage");

registroForm.addEventListener("submit", function(event) {
    event.preventDefault();
    successMessage.style.display = "block";
    registroForm.reset();
});

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    loginSuccessMessage.style.display = "block";
    loginForm.reset();
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("registerUsername").value;
        var password = document.getElementById("registerPassword").value;
        
        // Realizar la solicitud HTTP POST al servidor
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            // Manejar la respuesta del servidor
            if (data.error) {
                alert(data.error);
            } else {
                document.getElementById("message").classList.remove("hidden");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

function togglePassword(passwordId) {
    var passwordInput = document.getElementById(passwordId);
    var toggleBtn = document.querySelector("#" + passwordId + " + .toggle-password");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleBtn.textContent = "Ocultar";
    } else {
      passwordInput.type = "password";
      toggleBtn.textContent = "Mostrar";
    }
  }