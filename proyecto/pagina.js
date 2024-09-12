function displayUserInfo() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('display-username').textContent = loggedInUser;
    } else {
        // Redirigir a la página de inicio de sesión si no hay usuario logueado
        window.location.href = 'index.html';
    }
}

// Llamar a displayUserInfo cuando la página de destino se cargue
document.addEventListener('DOMContentLoaded', displayUserInfo);
console.log(localStorage.getItem('loggedInUser'));

function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Cierra el menú si el usuario hace clic fuera del mismo
window.onclick = function(event) {
    if (!event.target.matches('.menu-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}
