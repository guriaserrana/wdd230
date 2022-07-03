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

// //weather summary 
// const tempNumber = parseFloat(document.getElementById("temp").textContent);
// const speedNumber = parseFloat(document.getElementById("speed").textContent);

// let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 
// 0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));

// windchill = Math.round(windchill);

// if(tempNumber<=50 && speedNumber >3) {
//     document.getElementById("chill").textContent = "Wind Chill is" + " " + windchill + "\xB0F";

// } else {
//     document.getElementById("chill").textContent = "No Wind Chill Today";
// }

//OVERLAY

    const todayy = new Date();
    console.log(todayy);

    const dayNumber = todayy.getDay();
    console.log(dayNumber);

    const element = document.getElementById("message");

    if (dayNumber == 1) {
        element.classList.add("showme");        
    } if (dayNumber == 3) {
        element.classList.add("showme");
    } else {
        element.classList.add("hideme");        
    }






