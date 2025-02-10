

// Submenu Toggle
function toggleSubMenu(a) {
    const submenu = a.nextElementSibling;
    const downBtn = a.querySelector('#down-btn');

    submenu.classList.toggle('show');
    downBtn.classList.toggle('rotate');
}

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.sidebar #btn');
    const body = document.body;
    const header = document.querySelector('.header');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        body.classList.toggle('sidebar-open');
        header.classList.toggle('sidebar-open');
    });
});

//Sidebar in Mobile
document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector('.sidebar');

    function toggleSidebarForMobile() {
        if (window.innerWidth <= 600) {
            sidebar.classList.add('open');
        } else {
            sidebar.classList.remove('open');
        }
    }

    toggleSidebarForMobile();


});


// Scroll Up Button
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});


function toggle(event){
    event.preventDefault();
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup1');
    popup1.classList.toggle('active');


}


function toggle1(event){
    event.preventDefault();
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup2');
    popup1.classList.toggle('active');


}

function toggle2(event){
    event.preventDefault();
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup3');
    popup1.classList.toggle('active');


}

function toggle3(event){
    event.preventDefault();
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup4');
    popup1.classList.toggle('active');


}










