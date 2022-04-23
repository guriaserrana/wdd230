// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();
document.querySelector('#date').textContent = document.lastModified;