document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = {};
        form.querySelectorAll('input').forEach(input => {
            formData[input.id] = input.value;
        });
        console.log('Datos del formulario:', JSON.stringify(formData));
        form.reset();
    });
});

const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconoCerrar = document.querySelector('.icon-close');
const enlaceRecuperar = document.querySelector('.recuperar-link');
const enlaceRegistro = document.querySelector('.register-link');
const enlaceInicioSesion = document.querySelector('.login-link');
const enlaceInicioSesionRecuperar = document.querySelector('.login-link-recuperar');

btnPopup.onclick = () => {
    wrapper.classList.add('popup-active');
};

iconoCerrar.onclick = () => {
    wrapper.classList.remove('popup-active');
    wrapper.classList.remove('active');
};

enlaceRecuperar.onclick = () => {
    wrapper.querySelector('.login').style.display = 'none';
    wrapper.querySelector('.register').style.display = 'none';
    wrapper.querySelector('.recuperar').style.display = 'block';
};

enlaceRegistro.onclick = () => {
    wrapper.querySelector('.login').style.display = 'none';
    wrapper.querySelector('.register').style.display = 'block';
    wrapper.querySelector('.recuperar').style.display = 'none';
};

enlaceInicioSesion.onclick = () => {
    wrapper.querySelector('.login').style.display = 'block';
    wrapper.querySelector('.register').style.display = 'none';
    wrapper.querySelector('.recuperar').style.display = 'none';
};

enlaceInicioSesionRecuperar.onclick = () => {
    wrapper.querySelector('.login').style.display = 'block';
    wrapper.querySelector('.recuperar').style.display = 'none';
};

btnPopup.onclick = () => {
    wrapper.classList.add('popup-active');
    wrapper.querySelector('.login').style.display = 'block';
    wrapper.querySelector('.register').style.display = 'none';
    wrapper.querySelector('.recuperar').style.display = 'none';
};

document.getElementById('form-recuperar').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('mensaje-recuperacion').style.display = 'block';
});