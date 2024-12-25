let menu = document.querySelectorAll('.menu-text');
menu.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.classList.toggle("hover-element");
    });
    item.addEventListener("mouseout", () => {
        item.classList.toggle("hover-element");
    });
});

let login = document.querySelector(".login");

login.addEventListener("mouseover", () => {
    login.classList.toggle("login-hover");
});
login.addEventListener("mouseout", () => {
    login.classList.toggle("login-hover");
});



document.getElementById('abs-btn').addEventListener('click', function() {
    document.getElementById('abs').classList.add('active');
    document.getElementById('turkiye').classList.remove('active');
    document.getElementById('daxili').classList.remove('active');
});

document.getElementById('turkiye-btn').addEventListener('click', function() {
    document.getElementById('abs').classList.remove('active');
    document.getElementById('turkiye').classList.add('active');
    document.getElementById('daxili').classList.remove('active');
});

document.getElementById('daxili-btn').addEventListener('click', function() {
    document.getElementById('abs').classList.remove('active');
    document.getElementById('turkiye').classList.remove('active');
    document.getElementById('daxili').classList.add('active');
});