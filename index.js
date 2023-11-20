const hidden = document.querySelector('.hidden');
const nav = document.querySelector('.nav-links');
const search_bar = document.querySelector('.main-search');
const search_icon = document.querySelector('.search-icon');
const remove_search = document.querySelector('.remove-search');


function toggleSearch() {
    if(hidden.classList.contains('onShow')){
        hidden.classList.remove('onShow');
        hidden.style.display = 'none';
        nav.style.display = 'block';
        search_icon.style.display = 'block';
        remove_search.style.display = 'none';
    }else {
        hidden.classList.add('onShow');
        hidden.style.display = 'block';
        nav.style.display = 'none';
        search_icon.style.display = 'none';
        remove_search.style.display = 'block';
    }
}

// Swiper Initialization
let swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 1000
    },
    pagination: {
        el: ".swiper-pagination"
    }
}
)

const swiper_2 = new Swiper('.swiper-2', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    // Default parameters
    slidesPerView: 'auto',
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      360: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      720: {
        slidesPerView: 3.5,
        spaceBetween: 10
      },
      // when window width is >= 480px
      960: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 10
      }
    },
    autoplay: {
        delay: 1000
    }
  })

  const swiper_3 = new Swiper('.swiper-3', {

    
    // Default parameters
    slidesPerView: 'auto',
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      360: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 10
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 10
      }
    }
  })