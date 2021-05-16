$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    navText: ["<img src='../img/left.png'>", "<img src='../img/right.png'>"]
  });
},
  $('.owl-2').owlCarousel({
    nav: true,
    dots: false,
    margin: 10,
    center: true,
    loop: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  })
);



let
  windowWidth = window.innerWidth,
  servicesFooterText = document.querySelector('.services__footer>.container>.row>div'),
  serviceWrap = document.querySelectorAll('.service-wrap'),
  projectCard = document.querySelectorAll('.project-card');

document.addEventListener('DOMContentLoaded', (e) => {
  function checkWidth() {
    if (windowWidth < 900) {
      serviceWrap.forEach((item) => {
        item.classList.remove('col-3');
        item.classList.add('col-12');
      })
      projectCard.forEach((item) => {
        item.classList.remove('col-4');
        item.classList.add('col-12');
      })
      servicesFooterText.classList.remove("col", "col-6")
    }
    else {
      serviceWrap.forEach((item) => {
        item.classList.remove('col-12');
        item.classList.add('col-3');
      })
      projectCard.forEach((item) => {
        item.classList.remove('col-12');
        item.classList.add('col-4');
      })
      servicesFooterText.classList.add("col", "col-6")
    }
  }

  checkWidth();

  window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    checkWidth()
  })
})

