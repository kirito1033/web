
// Permitir la edición de los campos del perfil
function enableEditing() {
    document.querySelectorAll('input').forEach(input => {
        input.disabled = false;
    });
    document.getElementById('edit-btn').classList.add('d-none');
    document.getElementById('save-btn').classList.remove('d-none');
}

// Función para cargar la imagen de perfil seleccionada
function loadImage(event) {
    var output = document.getElementById('profile-img');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src); // liberar memoria
    }
}
