// Selección de elementos
const editProfileBtn = document.getElementById('edit-profile-btn');
const saveProfileBtn = document.getElementById('save-profile-btn');
const nameElement = document.getElementById('profile-name');
const gradeElement = document.getElementById('profile-grade');
const editNameInput = document.getElementById('edit-name');
const editGradeInput = document.getElementById('edit-grade');
const updateProgressBtn = document.getElementById('update-progress-btn');
const fracProgress = document.getElementById('frac-progress');
const multProgress = document.getElementById('mult-progress');
const statProgress = document.getElementById('stat-progress');
const toggleChallengesBtn = document.getElementById('toggle-challenges-btn');
const challengesDiv = document.getElementById('challenges');

// Función para editar perfil
editProfileBtn.addEventListener('click', () => {
    // Mostrar los campos de edición
    nameElement.style.display = 'none';
    gradeElement.style.display = 'none';
    editNameInput.style.display = 'block';
    editGradeInput.style.display = 'block';
    saveProfileBtn.style.display = 'inline-block';
    editProfileBtn.style.display = 'none';
});

// Función para guardar los cambios en el perfil
saveProfileBtn.addEventListener('click', () => {
    const newName = editNameInput.value;
    const newGrade = editGradeInput.value;

    // Actualizar los valores si están rellenados
    if (newName) {
        nameElement.textContent = newName;
    }
    if (newGrade) {
        gradeElement.textContent = `Grado: ${newGrade}`;
    }
    

    // Ocultar los campos de edición y volver a mostrar el nombre y grado
    nameElement.style.display = 'block';
    gradeElement.style.display = 'block';
    editNameInput.style.display = 'none';
    editGradeInput.style.display = 'none';
    saveProfileBtn.style.display = 'none';
    editProfileBtn.style.display = 'inline-block';
});

// Función para actualizar el progreso
updateProgressBtn.addEventListener('click', () => {
    fracProgress.textContent = `${Math.floor(Math.random() * 101)}%`;
    multProgress.textContent = `${Math.floor(Math.random() * 101)}%`;
    statProgress.textContent = `${Math.floor(Math.random() * 101)}%`;
});

// Función para mostrar/ocultar retos
toggleChallengesBtn.addEventListener('click', () => {
    if (challengesDiv.style.display === 'none' || challengesDiv.style.display === '') {
        challengesDiv.style.display = 'flex';
        toggleChallengesBtn.textContent = 'Ocultar Retos';
    } else {
        challengesDiv.style.display = 'none';
        toggleChallengesBtn.textContent = 'Mostrar Retos';
    }
});

// Selección de elementos
const profilePicElement = document.getElementById('profile-pic');
const changeProfilePicInput = document.getElementById('change-profile-pic');

// Función para cambiar la foto de perfil
changeProfilePicInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            // Actualizar la imagen de perfil con la nueva imagen seleccionada
            profilePicElement.src = e.target.result;
        }
        reader.readAsDataURL(file);  // Convertir la imagen a URL base64
    }
});

// Selección de elementos
const changePicBtn = document.getElementById('change-pic-btn'); 


// Cargar la imagen de perfil almacenada en LocalStorage al cargar la página
window.addEventListener('load', () => {
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
        profilePicElement.src = storedImage; 
    }
    
    // Asegurarse de que el botón de "Cambiar Foto" esté oculto al cargar la página
    changePicBtn.style.display = 'none';
});

// Función para cambiar la foto de perfil
changeProfilePicInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePicElement.src = e.target.result;  // Actualizar la imagen de perfil
        }
        reader.readAsDataURL(file);  // Convertir la imagen a base64 para su visualización
    }
});

// Función para guardar cambios y ocultar el botón de "Cambiar Foto"
saveProfileBtn.addEventListener('click', () => {
    // Guardar la imagen de perfil en LocalStorage
    const currentProfilePic = profilePicElement.src;
    localStorage.setItem('profileImage', currentProfilePic);  // Guardar imagen en LocalStorage

    

    // Ocultar el botón de cambiar foto
    changePicBtn.style.display = 'none';
    
    // Ocultar el botón de guardar y mostrar el botón de editar
    saveProfileBtn.style.display = 'none';
    editProfileBtn.style.display = 'inline-block';
});

// Función para permitir editar perfil
editProfileBtn.addEventListener('click', () => {
    // Mostrar los botones de edición
    saveProfileBtn.style.display = 'inline-block';
    editProfileBtn.style.display = 'none';
    
    // Mostrar el botón de cambiar foto solo al editar el perfil
    changePicBtn.style.display = 'inline-block';
});

function goBack() {
    window.history.back();
}