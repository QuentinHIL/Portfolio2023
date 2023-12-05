//source : https://stackoverflow.com/questions/72858774/display-content-related-to-only-those-button-it-is-clicked-in-html (réponses de Andy)
// Cache out buttons container, and all of the panels
const button = document.querySelector('.btn');
const panel = document.querySelectorAll('.cards');

// Add an event listener to the buttons container
button.addEventListener('click', handleClick);

// When a child element of `buttons` is clicked
function handleClick(e) {
 
  // Check to see if its a button
  if (e.target.matches('svg')) {

    // For every element in the `panels` node list use `classList`
    // to remove the show class
    panel.forEach(cards => cards.classList.remove('show'));

    // "Destructure" the `id` from the button's data set
    const { id } = e.target.dataset;

    // Create a selector that will match the corresponding
    // panel with that id. We're using a template string to
    // help form the selector. Basically it says find me an element
    // with a "panel" class which also has an id that matches the id of
    // the button's data attribute which we just retrieved.
    const selector = `.cards[id="${id}"]`;
   
    // Select the `div` and, using classList, again add the
    // show class
    document.querySelector(selector).classList.add('show');
    // $(selector).animate({ height: "+=" + $(selector).height() }, 500
    //   );
  }
}