const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    slidesPerGroup: 3,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const controller = new ScrollMagic.Controller();


var tl1 = new TimelineMax();

tl1.from('#shows_h2', 0.75, {y: 150, opacity: 0})
    .from('.swiper-slide:nth-of-type(1)', 0.5, {y: 100, opacity: 0}, '-=0.35')
    .from('.swiper-slide:nth-of-type(2)', 0.5, {y: 100, opacity: 0}, '-=0.25')
    .from('.swiper-slide:nth-of-type(3)', 0.5, {y: 100, opacity: 0}, '-=0.25')
    .from('.swiper-nav', 0.75, {scale: 0}, '-=0.2')


const scene1 = new ScrollMagic.Scene({
    triggerElement: "#shows"
})
    .setTween(tl1)
        .addTo(controller);


