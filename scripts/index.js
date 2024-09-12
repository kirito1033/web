const checkbox = document.getElementById('toggleSidebarCheckbox');
const sidebar = document.querySelector('.sidebar');
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        sidebar.classList.add('active'); // Mostrar sidebar
    } else {
        sidebar.classList.remove('active'); // Ocultar sidebar
    }
});