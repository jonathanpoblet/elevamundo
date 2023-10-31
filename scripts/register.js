document.getElementById('register-type').addEventListener('change', () => {
    if(document.getElementById('register-type').value == "") {
        document.getElementById('register-type').style.opacity = '80%'
    } else {
        document.getElementById('register-type').style.opacity = '100%'
    }
})


function register() {
    const nombre = document.getElementById('register-name').value;
    const cuit = document.getElementById('register-cuit').value;
    const type = document.getElementById('register-type').value;
    const email = document.getElementById('register-email').value;
    const contraseña = document.getElementById('register-password').value;

    if(!nombre || !cuit || !type || !email || !contraseña) return Swal.fire({
        icon: 'error',
        title: 'Faltan datos',
        confirmButtonColor: '#333',
        confirmButtonText: 'Ok',
    })

    Swal.fire({
        title: 'Cuenta registrada',
        confirmButtonColor: '#333',
        confirmButtonText: 'Ok',
    })
}

function watchPassword() {
    const contraseña = document.getElementById('register-password');

    if(contraseña.type == 'password') contraseña.type = 'text';
    else contraseña.type = 'password'
}

document.getElementById('register-button').addEventListener('click', () => register())

document.getElementById('register-eye-icon').addEventListener('click', () => watchPassword())