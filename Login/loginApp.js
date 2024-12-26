document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    const message = document.querySelector('.message');
        message.textContent = 'Giriş uğurla tamamlandı!'
});

document.getElementById('show-password').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});
