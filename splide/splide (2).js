 document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
      type: 'carousel',
      perPage: 1,
      autoplay: true,
      pauseOnHover: false,
      interval: 2000, // 2 seconds
      rewind: true,
    }).mount();
  });