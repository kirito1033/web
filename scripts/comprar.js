document.addEventListener('DOMContentLoaded', function() {
    const formLinks = document.querySelectorAll('.form-check-link');

    formLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const option = this.dataset.option;

            // Remove checked class from all inputs
            formLinks.forEach(link => {
                link.querySelector('.form-check-input').classList.remove('checked');
            });

            // Hide all address inputs
            document.getElementById('direccion-input').style.display = 'none';
            document.getElementById('direccion-texto').style.display = 'none';

            // Handle the selection based on the option
            if (option === 'direccion-registro') {
                this.querySelector('.form-check-input').classList.add('checked');
                document.getElementById('direccion-texto').style.display = 'block';
            } else if (option === 'elegir-domicilio') {
                this.querySelector('.form-check-input').classList.add('checked');
                document.getElementById('direccion-input').style.display = 'block';
            } else if (option === 'retirar-tienda') {
                this.querySelector('.form-check-input').classList.add('checked');
            }
        });
    });
});