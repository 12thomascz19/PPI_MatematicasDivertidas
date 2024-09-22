const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = registerForm.querySelector('input[placeholder="Nombre"]').value;
    const email = registerForm.querySelector('input[placeholder="Email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar si el usuario ya existe
    if (users.some(user => user.email === email)) {
        alert('El usuario ya existe.');
        return;
    }

    // Guardar el nuevo usuario
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert(`¡felicidades ${name}!, registro exitoso!`);
     
   
    // Iniciar sesión automáticamente
    localStorage.setItem('loggedInUser', JSON.stringify({ name, email, password })); // Guardar el usuario logueado
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = loginForm.querySelector('input[placeholder="Email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user)); // Guardar el usuario logueado
        window.location.href = 'pagina.html'; // Redirigir al dashboard
    } else {
        alert('Email o contraseña incorrectos.');
    }
});

function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = 'Ocultar';
    } else {
        input.type = 'password';
        button.textContent = 'Mostrar';
    }
}

// Comprobar si el usuario está logueado al cargar la página
window.addEventListener('load', () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        window.location.href = 'pagina.html'; // Redirigir al dashboard si está logueado
    }
});

const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Evento para cerrar sesión al hacer clic en "Cerrar Sesión"
const logoutButton = document.getElementById('logoutButton');
        logoutButton.addEventListener('click', () => {
            // localStorage.removeItem('loggedInUser'); // Eliminar el usuario logueado
            window.location.href = 'registro.html'; // Redirigir a la página de inicio de sesión
        });

        // Comprobar si el usuario está logueado al cargar la página
        window.addEventListener('load', () => {
            const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
            if (!loggedInUser) {
                window.location.href = 'registro.html'; // Redirigir a la página de inicio de sesión si no está logueado
            }
        });
        
function displayUserInfo() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('display-username').textContent = loggedInUser;
    }
}

// Llamar a displayUserInfo cuando la página de destino se cargue
document.addEventListener('DOMContentLoaded', displayUserInfo);
