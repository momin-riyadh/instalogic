(function (){
  window.addEventListener('DOMContentLoaded', function (){
    var mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 2500,
      },

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        1000: {
          slidesPerView: 6,
          spaceBetween: 40
        }
      }
    })
  })

})();


(function() {
  window.addEventListener('DOMContentLoaded', function (){
    var roofTile = new Swiper('.roof-tile', {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        1000: {
          slidesPerView: 5,
          spaceBetween: 40
        }
      }
    })
  })
})();
