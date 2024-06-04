// alert('welcome')
// const navbar = document.getElementById('navbar');

// const falcom = document.createElement('a');
// falcom.textContent = 'FARCOM';
// falcom.href = '#';
// navbar.appendChild(falcom);

// const links = ['Home', 'About', 'Contact'];

// const ul = document.createElement('ul');
// navbar.appendChild('ul');

// links.forEach((link)=> {
//     const li = document.createElement('li')
//     const a = document.createElement('a');
//     a.href = '#';
//     a.textContent = 'link'
//     li.appendChild(a);
//     ul.appendChild(li);
// });

// Creating hamburger for mobile phone
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// Implimenting the copy to clipbard navigator
let copyTexts = document.querySelectorAll('.copy-text');
copyTexts.forEach((copyTexts) => {
    copyTexts.querySelector('button').addEventListener('click', function(){
        let input = copyTexts.querySelector('input.text');
        input.select();
        document.execCommand('copy');
        copyTexts.classList.add('active');
        windows.getSelection().removeAllRangers();
        setTimeout(function(){
            copyTexts.classList.remove('active');
        },2500);

});

});

const element = document.querySelectorAll(".fade-out");

const option = {
    root: null,
    rootMargin: "0px",
    threshold: .4
}
const callBacks = (entries) => {
    entries.forEach(entry =>{
        if (entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
}

let observer= new IntersectionObserver(cb, option);
element.forEach(element => {
    element.observer(element);
});