// FOOTER YPF

function initializeFooter() {
    const buttons = document.querySelectorAll("#footer button");

    const handleClick = ({ currentTarget }) =>

      buttons.forEach((button) => {
        const list = document.querySelector(
          `#footer ul[data-index="${button.dataset.index}"]`
        );
        if (button.dataset.index === currentTarget.dataset.index) {
          list.classList.toggle("active");
          button.classList.toggle("active");
        } else {
          list.classList.remove("active");
          button.classList.remove("active");
        }
      });

    buttons.forEach((button) => button.addEventListener("click", handleClick));
  }

  initializeFooter();


// SLIDER PASOS

$('.owl-pasos').owlCarousel({
  center: true,
  items: 1,
  loop: false,
  nav: false,
  stagePadding: 25,
  margin: 5,
  URLhashListener:true,
  autoplayHoverPause:true,
  dots: false,
  startPosition: 'URLHash',
  responsive:{
      768:{
          items: 1,
          stagePadding: 0,
          margin: 0
      }
  }
});

// OWL CAROUSEL CON CONTADOR

$('.owl-beneficios').on('initialized.owl.carousel changed.owl.carousel', function(e) {
  if (!e.namespace)  {
    return;
  }
  var carousel = e.relatedTarget;
  $('.slider-counter').text(carousel.relative(carousel.current()) + 1);
  $('.slider-counter-desktop').text(carousel.relative(carousel.current()) + 1 + 1);
}).owlCarousel({
  loop: false,
  margin: 20,
  stagePadding: 50,
  nav:true,
  navText: ["<img src='images/slider-beneficios/arrow.png'>","<img src='images/slider-beneficios/arrow.png'>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      768:{
          items:1
      },
      1000:{
          items:2
      }
  }
});

//MOVEMOS DE LUGAR LOS OWL-NAV
	
$( "#aca" ).append( $(".owl-nav") );


// ACCORDION FAQS

const accordionList = document.querySelectorAll(".accordion-item");

accordionList.forEach((event) =>
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      accordionList.forEach((event2) => event2.classList.remove("active"));
      event.classList.add("active");
    }
  })
);

// MOVEMOS DE LUGAR LOS BOTONES

const mediaQuery = window.matchMedia('(max-width: 768px)')
function handleTabletChange(e) {
  if (e.matches) {
    $( "#video" ).append( $("#botones") );
  } else {
    $( ".box-blue-app__col p" ).append( $("#botones") );
  }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery);

//YOUTUBE VIDEO

var url = $("#videoyoutube").attr('src');

// Open Modal
jQuery('.to-video').click(function() {
  jQuery('.modal').show();
  $("#videoyoutube").attr('src', url);
  $('body').addClass('stop');
});

// Close Modal
jQuery('.modal .close').click(function() {
  jQuery('.modal').hide();
  $("#videoyoutube").attr('src', '');
  $('body').removeClass('stop');
});