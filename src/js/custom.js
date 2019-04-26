var $grid = $('.grid').imagesLoaded(function() {
  $grid.masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true

  }); 
});  
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});

/*const observer = lozad(); // lazy loads elements with default selector as ".lozad"
observer.observe();*/

