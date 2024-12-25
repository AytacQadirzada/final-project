document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let finCode = document.getElementById('fin-code').value;
    let phoneNumber = document.getElementById('phone-number').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let message = document.getElementById('message');

    if (password !== confirmPassword) {
        message.textContent = 'Şifrələr uyğun deyil!';
        return;
    }

    message.style.color = 'green';
    message.textContent = 'Qeydiyyat uğurla tamamlandı!';
    if(message.textContent == "Qeydiyyat uğurla tamamlandı!"){
    firstName="";
    lastName="";
    email="";
    address="";
    finCode="";
    phoneNumber="";
    password="";
    confirmPassword="";
    }
    
});

document.getElementById('show-password').addEventListener('change', function() {
    let passwordField = document.getElementById('password');
    let confirmPasswordField = document.getElementById('confirm-password');
    if (this.checked) {
        passwordField.type = 'text';
        confirmPasswordField.type = 'text';
    } else {
        passwordField.type = 'password';
        confirmPasswordField.type = 'password';
    }
});
