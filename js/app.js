

const imagesGridEl = document.querySelector(".gallery"); // The element that targets the div containing the images  (grid)

const photoCaptions = ["I love hay bales. Took this snap on a drive through the countryside past some straw fields.", "The lake was so calm today. We had a great view of the snow on the mountains from here.", "I hiked to the top of the mountain and got this picture of the canyon and trees below.", "It was amazing to see an iceberg up close, it was so cold but didn’t snow today.", "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.", "Fall is coming, I love when the leaves on the trees start to change color.", "I drove past this plantation yesterday, everything is so green!", "My summer vacation to the Oregon Coast. I love the sandy dunes!", "We enjoyed a quiet stroll down this countryside lane.", "Sunset at the coast! The sky turned a lovely shade of orange.", "I did a tour of a cave today and the view of the landscape below was breathtaking.", "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."];

const photoAlts = ["a country farm", "a mountain near the sea", "cloudy weather near the Irish coast", "mountain with iceberg", "a desert", "a path to an abandoned gate", "a lively green area", "a beach hill", "an overcoast tunnel", "an ocean hill", "mountain with a smoke valley", "lavender pasture before the snowcapped moutaint"]

let images = '';

// 1) Loops through the thumbnails in the photos folder and appends them to the .images-grid container. 2) Loops through the photoCaptions array and adds the alt attribute to each img element
function addPhotosToHTML(){
    for(let i = 0; i < 12; i++){
        images += `
        <a href="photos/0${i + 1}.jpg" data-caption="${photoCaptions[i]}" class="img-link"><img src="photos/thumbnails/${i + 1}.jpg" class="pic-${i + 1} pic" alt="${photoAlts[i]}"></a>
        `
    }
}




addPhotosToHTML();

imagesGridEl.innerHTML = images;

window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
  });




// The Search Button

let searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', () => {
    searchButton.parentElement.classList.toggle('open');
})