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




const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else {
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));

const ads = [
  {
    image: "./Img/ads-img.jfif",
    link: "https://coinbound.io/top-crypto-ad-networks/",
  },
  {
    image: "./Img/ads-img1.jfif",
    link: "https://aads.com/ad-units/new/",
  }
];

const randomAd = ads[Math.floor(Math.random() * ads.length)];

document.getElementById("ad-container").innerHTML = `
  <a href="${randomAd.link}" target="_blank">
    <img src="${randomAd.image}" style="width:10px; height:100px border-radius:10px; box-shadow:0 10px 20px rgba(0,0,0,0.2);" />
  </a>
`;

let index = 0;
const adImages = ["./Img/ads-img.jfif", "./Img/ads-img1.jfif", "./Img/ads-img2.jfif"];

function showAd() {
  document.getElementById("ad-container").innerHTML =
    `<img src="${adImages[index]}" style="width:100%; border-radius:10px;" />`;
  
  index = (index + 1) % adImages.length;
}

setInterval(showAd, 6000); // Change every 3 seconds
showAd();

document.body.insertAdjacentHTML("beforeend", `
  <div id="floating-ad">
    <button id="close-ad">×</button>
    <img src="./Img/ads-img.jfif" alt="Advertisement">
  </div>
`);

document.getElementById("close-ad").onclick = function() {
  document.getElementById("floating-ad").style.display = "none";
};
