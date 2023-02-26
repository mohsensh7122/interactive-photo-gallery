let searchInputEl = document.getElementById('search-input');


searchInputEl.addEventListener('keyup', e => {
    let searchInputValue = e.target.value.toLowerCase();
    let imageLinkElements = document.querySelectorAll('.img-link');
    console.log(imageLinkElements);
    imageLinkElements.forEach(imageLinkElement => {
        if (imageLinkElement.getAttribute('data-caption').toLowerCase().includes(searchInputValue)){
            imageLinkElement.style.display = 'block'
        } else {
            imageLinkElement.style.display = 'none'
        }
    })
})

