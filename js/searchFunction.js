let searchInputEl = document.getElementById('search-input');


searchInputEl.addEventListener('keyup', e => {
    let searchInputValue = e.target.value.toLowerCase();
    let imageLinkElements = document.querySelectorAll('.img-link');
    let images = document.querySelectorAll('.pic');
    console.log(imageLinkElements);
    imageLinkElements.forEach(imageLinkElement => {
        images.forEach(image => {
            if (imageLinkElement.getAttribute('data-caption').toLowerCase().includes(searchInputValue) || image.getAttribute('alt').includes(searchInputValue)){
                imageLinkElement.style.display = 'block';
            } else {
                imageLinkElement.style.display = 'none';
            }
        }) 
    })

})

