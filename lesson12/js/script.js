const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;


// set current year and time/date in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();
document.querySelector('#date').textContent = document.lastModified;


