// Starting Slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
  
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      400: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      800: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1000: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      }
    }

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

// // On-Load Animation
var tl = gsap.timeline({

});
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
var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: '#shows',
    start: "top 30%",
    }
});

tl1.from('#shows_h2', {y: 150, opacity: 0, duration: 0.75})
    .from('.swiper-slide:nth-of-type(1)', 0.5, {y: 100, opacity: 0}, '-=0.35')
    .from('.swiper-slide:nth-of-type(2)', 0.5, {y: 100, opacity: 0}, '-=0.25')
    .from('.swiper-slide:nth-of-type(3)', 0.5, {y: 100, opacity: 0}, '-=0.25')
    .from('.swiper-nav', 0.75, {scale: 0}, '-=0.2')


// // Section About Animations
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#about',
    start: "top 15%",
    }
});
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
