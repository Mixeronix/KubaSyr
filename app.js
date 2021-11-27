// Starting Slider
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



// Scroll to Sections Function
function btn_to(to) {
  window.scrollTo(0, $('#' + to).offset().top - $('nav').height() );
}


// Smaller Navigation-Bar on Scroll
const nav = $("nav");
const sectionOne = document.querySelector(".observer");

const sectionOneOptions = {
  rootMargin: "0px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.css({"height": "3rem"});
    } else {
      nav.css({"height": "5rem"});
    }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);



// Animations
const controller = new ScrollMagic.Controller();


// On-Load Animation
var tl = new TimelineMax();

tl.from('.btn2', 0.45, {scale: 0}, '+=0.75')

$('.btn2').on('mouseenter', function() {
  tl.to('.btn2', 0.3, {scale: 1.1})
}).on('mouseleave', function(){
  tl.to('.btn2', 0.3, {scale: 1})
});


// Section I Animations
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


