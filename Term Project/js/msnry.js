
document.addEventListener("DOMContentLoaded",() => {
    const imgBox = document.querySelector('.msnry-grid');
    // Selects the first element with the class 'msnry-grid' ( The all photos in the page)
    imgBox.classList.add('visible');
    // Adds the 'visible' class to the selected element to potentially trigger a fade-in effect
});
// I followed the initialization in the official website
const grid = document.querySelector('.msnry-grid');

const msnry = new Masonry( '.msnry-grid', {
    columnWidth: '.msnry-grid-sizer',
     // Specifies that each column should be the width of elements with the class 'msnry-grid-sizer'
    gutter: '.msnry-gutter-sizer',
    // Specifies the gutter (spacing between items) should be the width of elements with the class 'msnry-gutter-sizer'
    itemSelector: '.msnry-grid-item',
     // Specifies that Masonry should look for items to arrange using the selector '.msnry-grid-item'
    percentPosition: true
    //  Enables positioning of items using percentages instead of pixels, allowing for responsive layout!
});

