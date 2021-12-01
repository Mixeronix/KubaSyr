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


// Open Side Nav
$('#hamburger').click(function() {
  $('body').toggleClass('nav_open');
  tl.from('.side_btn', 0.3, {scale: 0, opacity: 0}, '+=0.35')
})



// Scroll to Sections Function
function btn_to(to) {
  if (to == 'home'){
    window.scrollTo(0,0);
  } else {
  window.scrollTo(0, $('#' + to).offset().top - 48 );
  }
  $('body').removeClass('nav_open');

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


// Section About Animations
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

// Section Map Animations
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '#map',
    start: "top 15%",
    }
});
tl3.from('#map_title', 0.75, {opacity: 0, y: 75})
  .from('.map_box:nth-of-type(1)', 0.5, {opacity: 0, y: 50}, '-=0.2')
  .from('.map_box:nth-of-type(2)', 0.5, {opacity: 0, y: 50}, '-=0.2')
  .from('.map_box:nth-of-type(3)', 0.5, {opacity: 0, y: 50}, '-=0.2')
  .from('.map_box:nth-of-type(4)', 0.5, {opacity: 0, y: 50}, '-=0.2')
  .from('.map_box:nth-of-type(5)', 0.5, {opacity: 0, y: 50}, '-=0.2')
  .to('.map_box', 1.25, {background: "rgba(0, 0, 0, 0.35)"}, '-=0.15')

// Section Contact Animations
var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: '#map',
    }
});
tl4
// .to('#contact', 1.5, {clipPath: "polygon(0% -1%, 100% -1%, 100% 100%, 0% 100%)"})
// .to('#map > img', 1.5, {clipPath: "polygon(-1% -1%, 100% -1%, 100% 100%, -1% 100%)"}, '-=1.5')
  .from('.contacts > img:nth-of-type(1)', 0.5, {rotate: 360, y: 30, opacity: 0})
  .from('.contacts > img:nth-of-type(2)', 0.5, {rotate: 360, y: 30, opacity: 0}, '-=0.25')
  .from('.contacts > img:nth-of-type(3)', 0.5, {rotate: 360, y: 30, opacity: 0}, '-=0.25')
  .from('.contacts > img:nth-of-type(4)', 0.5, {rotate: 360, y: 30, opacity: 0}, '-=0.25')
  .from('.contacts > img:nth-of-type(5)', 0.5, {rotate: 360, y: 30, opacity: 0}, '-=0.25')

