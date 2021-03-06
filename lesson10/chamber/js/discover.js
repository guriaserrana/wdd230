const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;


// set current year and time/date in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();
document.querySelector('#date').textContent = document.lastModified;


//menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

//lazyload 
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

const intersectionCallback = (items, observer) => {
    items.forEach((item) => {
        if(item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target)
        }
    });
}

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(intersectionCallback, imgOptions); 
    imagesToLoad.forEach((img) => {
        observer.observe(img)
    });
}

else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

//LAST VISIT
const visitDisplay = document.querySelector('#lastVisit')
const mInDay = 1000 * 60 * 60 * 24;
const today = Number(Date.now());
console.log(`millisecond in a day is ${mInDay}`);

let lastVisit = Number(window.localStorage.getItem("visit-is"));
localStorage.setItem("visit-is", today);
let difference = Math.round((now - lastVisit)/mInDay);
console.log(difference)

if (difference == 0) {
    visitDisplay.textContent = `Thank you for visiting us!`
} else {
    visitDisplay.textContent = (`Days since last visit ${difference}`);
}

lastVisit++;
localStorage.setItem("visits-ls", lastVisit);