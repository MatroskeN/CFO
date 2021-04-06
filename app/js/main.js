$(document).ready(function (){

    var swiper = new Swiper('.about-container', {
    slidesPerView: 'auto',
    pagination: {
        el: '.about-pagination',
        type: 'bullets',
    },
  });
  var swiper1 = new Swiper('.grid-container', {
    slidesPerView: 'auto',
    pagination: {
        el: '.grid-pagination',
        type: 'bullets',
    },
    centeredSlides: true,
    loop:true,
  });
// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-slider',
    layoutMode: 'fitRows'
  });
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  // bind filter button click
  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

  //counter
  var time = 4;
$('div').each(function(){
  var i = 1,
      num = $(this).data('num'),
      step = 2000 * time / num,
      that = $(this),
      int = setInterval(function(){
        if (i <= num) {
          that.html(i);
        }
        else {
          clearInterval(int);
        }
        i++;
      },step);
});

//typewriter script
var app = document.getElementById('type');

var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString('Ведущая компания по разработке дизайна вашего продукта')

    .start();



    //headerscroll
    var scroll = 0;
    let hedheight = $(".banner").height();
    console.log(hedheight);
  $(window).on("scroll", function(){
    scroll = window.pageYOffset || (document.documentElement.clientHeight ? document.documentElement.scrollTop : document.body.scrollTop);
    if (scroll > hedheight) { // высота банера
        $(header).addClass("scroll-header");
    }
    if (scroll<hedheight){
        $(header).removeClass("scroll-header");
    }
});
})

