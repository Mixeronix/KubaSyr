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
  if (to == 'home'){
    window.scrollTo(0,0);
  } else {
  window.scrollTo(0, $('#' + to).offset().top - 48 );
  }
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

// On hover animations
$('.btn2').on('mouseenter', function() {
  tl.to('.btn2', 0.3, {scale: 1.1})
}).on('mouseleave', function(){
  tl.to('.btn2', 0.3, {scale: 1})
});

$('.btn_about').on('mouseenter', function() {
  tl.to('.btn_about', 0.3, {scale: 1.05})
}).on('mouseleave', function(){
  tl.to('.btn_about', 0.3, {scale: 1})
});


// Section Shows Animations
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


// Section About Animations
var tl2 = new TimelineMax();

tl2.from('#section_about_1', 1, {x: '100%'})
  .from('#about > h1', 0.5, {opacity: 0, y: 50}, '-=0.25')
  .from('#section_about_1 > .content_about', 0.75, {opacity: 0, y: 100}, '-=0.5')
  .from('#img_about_1', 1, {opacity: 0, scale: 0}, '-=0.5')

  .from('#section_about_2', 1, {x: '-100%'}, '-=1.25')
  .from('#section_about_2 > .content_about', 0.75, {opacity: 0, y: 100}, '-=0.5')
  .from('#img_about_2', 1, {opacity: 0, scale: 0}, '-=0.5')

  .from('#section_about_3', 1, {x: '100%'}, '-=1.25')
  .from('#section_about_3 > .content_about', 0.75, {opacity: 0, y: 100}, '-=0.5')
  .from('.btn_about', 0.5, {opacity: 0, y: 50}, '-=0.5')

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#about"
})
    .setTween(tl2)
        .addTo(controller);