$(document).ready(function () {
  // $: This is the shorthand for jQuery. It is a reference to the jQuery object.
  // This code runs only after the DOM is ready, same method 
  //  I repeated the same method to install other plugins as well.
    // Initialize Slick Carousel for hero section based on the official website
    $('.home-hero').slick({
      // $: The $ is the jQuery function, which is used to select elements and apply jQuery methods to them.
      // This is a jQuery selector that targets all elements with the class home-hero in the HTML document.
        dots: true, // Show navigation dots at the bottom of the slider
        infinite: true, // Loop the slides infinitely
        speed: 500, // Transition speed between slides (in milliseconds),
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true,  // Automatically start the slideshow
        autoplaySpeed: 2500,// Time between each slide (in milliseconds), it might be fast for the mobile though...
    });
  
    // Initialize Flickity for other carousels
    $('.carousel').flickity({
        cellAlign: 'left', // Align cells (slides) to the left of the carousel
        contain: true,// Prevent excess scroll at the end of the carousel
        wrapAround: true, // Enable infinite looping by wrapping around the slides
        pageDots: false,// Disable pagination dots (pagination refers to the small navigation elements (usually dots or numbers)... New English to know)
        autoPlay: 3000, // Auto-play slides every 3000ms (3 seconds)
    });
  
  });
  //  I used to have problem to load every plugins at one time so I separated one of the plugin to here... somehow it is fixed now.. I think I modified the CSS but leave the JS like this
  window.addEventListener("load", (event) => {
    // Initialize Fancybox for image galleries
    $('[data-fancybox]').fancybox({
      loop: true,  // Enable looping through the gallery
      arrows: true,  // Show navigation arrows
      infobar: true,  // Show the info bar (with title and counter)
      buttons: [  // Customize the buttons displayed in the Fancybox
          'fullScreen',// Fullscreen button
          'thumbs',// Thumbnail navigation button
          'close'// Close button
      ],
      transitionEffect: 'slide',  // Transition effect between images
      
    });
  });