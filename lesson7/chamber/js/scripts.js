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

//weather summary 
const tempNumber = parseFloat(document.getElementById("temp").textContent);
const speedNumber = parseFloat(document.getElementById("speed").textContent);

let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 
0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));

windchill = Math.round(windchill);

if(tempNumber<=50 && speedNumber >3) {
    document.getElementById("chill").textContent = "Wind Chill is" + " " + windchill + "\xB0F";

} else {
    document.getElementById("chill").textContent = "No Wind Chill Today";
}

/*VISITS--------------------------------*/
const mInDay = 1000 * 60 * 60 * 24;

const today = Number(Date.now());

console.log(`millisecond in a day is ${mInDay}`);

let lvisit = Number(window.localStorage.getItem("visit-is"));

localStorage.setItem("visit-is", today);

let difference = Math.round((now - lvisit)/mInDay);

console.log(difference)

if (difference == 0) {
    visitDisplay.textContent = `Welcome to the Highlanders Website!`
} else {
    visitDisplay.textContent = (`Days since last visit ${difference}`);
}

lvisit++;

localStorage.setItem("visits-ls", lvisit);

