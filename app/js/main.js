$(document).ready(function (){

    var swiper = new Swiper('.about-container', {
    slidesPerView: 'auto',
    pagination: {
        el: '.about-pagination',
        type: 'bullets',
        clickable: true,
    },
  });

  if ($(window).width()<769){
    console.log('less');
    var swiper1 = new Swiper('.grid-container', {
      slidesPerView: '1',
      pagination: {
          el: '.grid-pagination',
          type: 'bullets',
          clickable: true,
      },
      navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
      },
    });
  } 
  if ($(window).width()>769){
    var swiper1 = new Swiper('.grid-container', {
      slidesPerView: '3',
      pagination: {
          el: '.grid-pagination',
          type: 'bullets',
          clickable: true,
      },
      navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
      },
    });
  }
    
  
  

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

//filter
$(".stay-filter").on("click", function(){
  $(".filter-slide").addClass("hidden-filter");
  $(".filter-slide").removeClass("visible-filter");
  $(".stay").removeClass("hidden-filter");
  $(".stay").addClass("visible-filter");
})
$(".showbox-filter").on("click", function(){
  $(".filter-slide").addClass("hidden-filter");
  $(".filter-slide").removeClass("visible-filter");
  $(".showbox").removeClass("hidden-filter");
  $(".showbox").addClass("visible-filter");
})
$(".licens-filter").on("click", function(){
  $(".filter-slide").addClass("hidden-filter");
  $(".filter-slide").removeClass("visible-filter");
  $(".licens").removeClass("hidden-filter");
  $(".licens").addClass("visible-filter");
})
$(".all-filter").on("click", function(){
  $(".filter-slide").removeClass("hidden-filter");
  $(".filter-slide").addClass("visible-filter");
})

  //modal
  $("#burger").on("click", function () {
    document.getElementById("modal").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
});

$("#xclose").on("click", function () {
    document.getElementById("modal").style.display = "none";
    document.getElementById("body").style.overflow = "visible";
});


})

