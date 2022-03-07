const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

// All Navs

const headerNav = document.querySelectorAll('a');

// Adding Nav Class
const classAdder = array => {
  for (let a = 0; a < array.length-1; a++) {
    array[a].classList.add('italic')
  }
};

classAdder(headerNav);
headerNav[6].classList.add('bold');

// Adding Nav Text
headerNav[0].textContent= 'Services'
headerNav[1].textContent= 'Product'
headerNav[2].textContent= 'Vision'
headerNav[3].textContent= 'Features'
headerNav[4].textContent= 'About'
headerNav[5].textContent= 'Contact'
headerNav[6].textContent= 'Copyright Great Idea! 2021'

// All img
const imgAll = document.querySelectorAll('img');

// Adding Id
imgAll[0].id = 'logo-img'
imgAll[1].id = 'cta-img'
imgAll[2].id = 'middle-img'

// Adding Url
imgAll[0].src = 'http://localhost:9000/img/logo.png'
imgAll[1].src = 'http://localhost:9000/img/cta.png'
imgAll[2].src = 'http://localhost:9000/img/accent.png'

// All Headers
const heading1 = document.getElementsByTagName('h1');
heading1.textContent = 'DOM Is Awesome';

// Heading function
const headingFixer = array => {
  const headings = document.getElementsByTagName('h4');
  headings[0].textContent = array.features-h4;
  headings[1].textContent = array.about-h4;
  headings[2].textContent = array.services-h4;
  headings[3].textContent = array.product-h4;
  headings[4].textContent = array.vision-h4;

  const words = document.getElementsByTagName('p');
  words[0].textContent = array.features-content;
  words[1].textContent = array.about-content;
  words[2].textContent = array.services-content;
  words[3].textContent = array.product-content;
  words[4].textContent = array.vision-content;

  

}


console.log('project wired!')
