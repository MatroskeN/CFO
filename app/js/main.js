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
//   var time = 4;
// $('div').each(function(){
//   var i = 1,
//       num = $(this).data('num'),
//       step = 2000 * time / num,
//       that = $(this),
//       int = setInterval(function(){
//         if (i <= num) {
//           that.html(i);
//         }
//         else {
//           clearInterval(int);
//         }
//         i++;
//       },step);
// });

var show = true;
    var countbox = ".counter";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          $('.count').spincrement({
            thousandSeparator: "",
            duration: 1700
        });
           show = false;
        }
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

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};


//typewrite
TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 100 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
})

