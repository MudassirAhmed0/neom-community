const swiper = new Swiper('.bannerSwiper', {
    // Optional parameters 
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    
  });

  const newsGap = window.innerWidth /100 * 1.35416666667
const news = new Swiper('.newsSwiper', {
    // Optional parameters 
    loop: false,
    spaceBetween:newsGap ,
    slidesPerView: "auto",
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // If we need pagination
    
  
    
  });