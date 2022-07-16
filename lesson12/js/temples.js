const requestURL = 'https://raw.githubusercontent.com/guriaserrana/wdd230/main/lesson12/data/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
  });

function displayTemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p'); 
    let p4 = document.createElement('p'); 
    let p5 = document.createElement('p');    
    let portrait = document.createElement('img');
  
    
    h2.textContent = temple.temple;     
    p1.textContent = `Address: ${temple.address}`;   
    p2.textContent = `Zipecode: ${temple.zipcode}`;
    p3.textContent = `Phone: ${temple.phonenumber}`;
    p4.textContent = `Dedicated: ${temple.dedicated}`;
    p5.textContent = `Temple Closures: ${temple.closures}`; 
   


    // Build the image attributes by using the setAttribute method for the src, alt,
    // and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', temple.imageurl);
    portrait.setAttribute('alt', 'logo for' + " " + temple.name);
    portrait.setAttribute('width', 400)
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);    
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.card').appendChild(card);
  };

    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");
    const display = document.querySelector(".card");  
    
    gridbutton.addEventListener("click", () => {
        
        display.classList.add("grid");
        display.classList.remove("list");
    });
    
    listbutton.addEventListener("click", showList);
    
    function showList() {
        display.classList.add("list");
        display.classList.remove("grid");
    }
    
