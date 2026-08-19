
const container = document.getElementById('main-content');
const links = document.querySelectorAll('.site-nav a');
let url = 'partials/home.html';

const loadContent = (urlFeed) => {
 
  fetch(urlFeed)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      container.innerHTML = data;
    })
    .catch((error) => {
      console.error('Error loading HTML partial:', error);
      container.innerHTML = '<p>Error loading page content. Please try again later.</p>';
    });
};

// CALL loadContent WITH THE CURRENT VALUE OF url
loadContent(url);

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
const selectContent = (event) => {
  // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
  event.preventDefault();

  // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
  const href = event.currentTarget.getAttribute('href');

  // CALL THE FUNCTION loadContent PROVIDING THE href VALUE
  loadContent(href);
};

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
links.forEach((link) => {
  link.addEventListener('click', selectContent);
});