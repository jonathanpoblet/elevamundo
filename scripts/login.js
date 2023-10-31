function login() {
    const email = document.getElementById('login-email').value;
    const contraseña = document.getElementById('login-password').value;

    if(!email || !contraseña) return Swal.fire({
        icon: 'error',
        title: 'Faltan datos',
        text: 'Ingresa email y contraseña',
        confirmButtonColor: '#333',
        confirmButtonText: 'Ok',
    })

    Swal.fire({
        title: 'Iniciaste Sesión',
        confirmButtonColor: '#333',
        confirmButtonText: 'Ok',
    })
}

function watchPassword() {
    const contraseña = document.getElementById('login-password');

    if(contraseña.type == 'password') contraseña.type = 'text';
    else contraseña.type = 'password'
}

document.getElementById('login-button').addEventListener('click', () => login())

document.getElementById('login-eye-icon').addEventListener('click', () => watchPassword())