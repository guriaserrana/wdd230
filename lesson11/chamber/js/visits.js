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