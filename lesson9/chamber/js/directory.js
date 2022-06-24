const requestURL = 'https://raw.githubusercontent.com/guriaserrana/wdd230/main/lesson9/chamber/data/data.json';
const cards = document.querySelector('.cards2');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });

// function getNumberWithOrdinal(n) {
// var s = ["th", "st", "nd", "rd"],
//     v = n % 100;
// return n + (s[(v - 20) % 10] || s[v] || s[0]);
// }

function displayCompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let portrait = document.createElement('img');
  
    
    h2.textContent = company.name;     
    p1.textContent = company.address;   
    p2.textContent = `phone: ${company.phonenumber}`;    
    p3.textContent = company.site;


    // Build the image attributes by using the setAttribute method for the src, alt,
    // and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', company.imageurl);
    portrait.setAttribute('alt', 'logo for' + " " + company.name);
    portrait.setAttribute('width', 400)
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
   
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards2').appendChild(card);
  };

  const gridbutton = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");
  const display = document.querySelector(".cards2");
  
  
  
  gridbutton.addEventListener("click", () => {
      
      display.classList.add("grid");
      display.classList.remove("list");
  });
  
  listbutton.addEventListener("click", showList);
  
  function showList() {
      display.classList.add("list");
      display.classList.remove("grid");
  }
  
