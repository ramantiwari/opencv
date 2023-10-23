var swiper = new Swiper(".ppcservices", {
      loop:true,
      allowTouchMove:true,
      keyboard: {
        enabled: false,
      },
      slidesPerView: 1.1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      breakpoints: {
        0: {
            slidesPerView: 1.1,
            spaceBetween: 5,
        },
        480: {
            slidesPerView: 1.1,
            spaceBetween: 5,
        },
        787: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        1200: {
            slidesPerView: 1,
        }
       
      }
    });
    
    var swiper = new Swiper(".mySwiper", {
      loop:true,
      allowTouchMove:false,
      keyboard: {
        enabled: false,
      },
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      breakpoints: {
        0: {
            slidesPerView: 1.1,
            spaceBetween: 5,
        },
        480: {
            slidesPerView: 1.1,
            spaceBetween: 5,
        },
        787: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        1200: {
            slidesPerView: 1,
        }
      }
    });    