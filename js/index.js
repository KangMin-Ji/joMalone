$(function () {

  const headerSwiper = new Swiper(".bannerSwiper", {
    slidesPerView: 1,
    loop: true,
    allowTouchMove: false,
    navigation: {
      nextEl: ".banner-button-next",
      prevEl: ".banner-button-prev",
    },

  });


  $(window).scroll(function () {
    curr = $(this).scrollTop();
    h = $('.in_gnb').outerHeight();

    if (curr > 0) {
      $('header').addClass('on');
    } else {
      $('header').removeClass('on');
    }
  });

  let count = false;
  $('.ham_btn').click(function (e) {
    e.preventDefault();
    
    $('.header_inner .ham_btn .line_second').removeClass('on');
    $('.header_inner .ham_btn .line_first, .header_inner .ham_btn .line_third').removeClass('rotate');
          $('header .gnb_area').css({
        visibility: 'visible'
      });
    // if (count === true) {
    //   $('header .gnb_area').css({
    //     visibility: 'hidden'
    //   });
    //   $('.header_inner .ham_btn .line_second').removeClass('on');
    //   $('.header_inner .ham_btn .line_first, .header_inner .ham_btn .line_third').removeClass('rotate');
    //   count = false;
    // } else {
    //   $('header .gnb_area').css({
    //     visibility: 'visible'
    //   });
    //   $('.header_inner .ham_btn .line_second').addClass('on');
    //   $('.header_inner .ham_btn .line_first, .header_inner .ham_btn .line_third').addClass('rotate');
    //   count = true;
    // }
  });

  $('.menu_open').click(function () {
    inGnb = $(this).siblings('.in_gnb');
    h = inGnb.children('ul').outerHeight();
    if ($(this).hasClass('on')) {
      $('.in_gnb').animate({
        height: 0,
      });
      $(this).removeClass('on');
    } else {
      $('.menu_open').removeClass('on');
      $(this).addClass('on');
      $('.in_gnb').animate({
        height: 0
      });
      inGnb.animate({
        height: h
      });
    }
  });


  $('.view_click').each(function () {
    const proInfo = $(this).parents('.product_bottom').siblings('.product_info');
    $(this).click(function (e) {
      e.preventDefault();
      proInfo.children('.hidden_info').addClass('give_height');
      proInfo.children('.view_less').addClass('visible');
      $(this).addClass('hidden');
      proInfo.addClass('add_bg');
    });
  });

  $('.view_less').each(function () {
    const proInfo = $(this).parents('.product_info');

    $(this).click(function (e) {
      e.preventDefault();
      proInfo.children('.hidden_info').removeClass('give_height');
      $(this).removeClass('visible');
      $(proInfo).siblings('.product_bottom').find('.view_click').removeClass('hidden');
      proInfo.removeClass('add_bg');
    });
  });





  //==========================gsap===============================//

  $(window).scroll(function () {
    curr = $(window).scrollTop();
    if (curr > 0) {
      $('.scroll').addClass('hide');
      $('.intro_bottom .txt_wrap p').addClass('show');
    }
  });

  gsap.from('.yellow_flower_stem_wrap', {
    rotate: 20,
    duration: 3,
    scale: (1.5),
  });
  gsap.from('.white_purple_flower_stem', {
    duration: 2.5,
    scale: (2),
  });
  gsap.from('.vine_flower', {
    x: 50,
    duration: 2.5,
    scale: (1.5),
  });
  gsap.from('.blue_flower', {
    x: 50,
    rotate: 10,
    duration: 2.5,
    scale: (1.5),
  });
  gsap.from('.below_intro .hand_orange_flowers', {
    duration: 2.5,
    scale: (1.2),
  });


  txtMotion = gsap.timeline({});
  txtMotion.from('.intro .intro_logo', {
    opacity: 0,
    duration: 2,
    delay: 2,
    yPercent: 20,
  });
  txtMotion.from('.intro .intro_title p', {
    opacity: 0,
    duration: 2,
    yPercent: 20,
  });
  txtMotion.from('.intro .intro_title h2', {
    opacity: 0,
    duration: 2,
    yPercent: 20,
  });
  txtMotion.from('.intro_bottom .txt_wrap p', {
    opacity: 0,
  });
  txtMotion.from('.intro .scroll', {
    opacity: 0,
    duration: 1.5,
  });

  //product_img 
  $('.productFade').each(function (index, item) {
    proImg = $(this).find('.bottle_img');
    gsap.from(proImg, {
      scrollTrigger: {
        trigger: $(this),
        start: 'top 50%',
      },
      opacity: 0,
      yPercent: 30,
      duration: 1,
    });
  });



  $('.txtFade').each(function (index, item) {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
      },
      opacity: 0,
      yPercent: 30,
      duration: 2,
    });
  });


  // below_intro
  gsap.to('.below_intro .yellow_flower_con', {
    scrollTrigger: {
      trigger: '.yellow_flower_con',
      start: 'top 35%',
    },
    rotate: 10,
    duration: 2,
  });
  gsap.to('.below_intro .hand_orange_flowers', {
    rotate: -16,
    repeat: -1,
    duration: 5,
    ease: "linear",
    yoyo: true,
  });


  // product_1
  const pro1 = $('.product_1');
  gsap.from('.product_1 .main_img span', {
    scrollTrigger: {
      trigger: pro1,
      start: 'top 50%',
    },
    opacity: 0,
    yPercent: 30,
    duration: 2,
  });
  gsap.from('.product_1 .bottle_bg', {
    scrollTrigger: {
      trigger: pro1,
      start: 'top 50%',
    },
    opacity: 0,
    yPercent: 30,
    scale: (0.4),
    duration: 2,
    delay: 0.5,
  });
  gsap.to('.product_1 .red_flower_large', {
    scrollTrigger: {
      trigger: pro1,
      start: 'top 50%',
    },
    opacity: 1,
    yPercent: -10,
    duration: 2,
    delay: 0.5,
  });
  gsap.to('.product_1 .red_flower_large_petal_right', {
    scrollTrigger: {
      trigger: pro1,
      start: 'top 50%',
    },
    opacity: 1,
    yPercent: -10,
    duration: 2,
    rotate: 15,
    delay: 0.5,
  });
  gsap.to('.product_1 .red_flower_large_petal_left', {
    scrollTrigger: {
      trigger: pro1,
      start: 'top 50%',
    },
    opacity: 1,
    yPercent: -10,
    duration: 2,
    rotate: -15,
    delay: 0.5,
  });

  //product_2
  const pro2 = $('.product_2');
  gsap.from('.product_2 .bottle_img, .product_2 .main_img span, .product_2 .bottle_bg, .crep_tentacle_base_1, .crep_tentacle_base_2', {
    scrollTrigger: {
      trigger: pro2,
      start: 'top 50%',
    },
    opacity: 0,
  });
  gsap.from('.crep_tentacle_1_arm', {
    scrollTrigger: {
      trigger: pro2,
      start: 'top 50%',
    },
    opacity: 0,
    yPercent: 30,
    duratrion: 1,
    delay: 0.5,
  });
  gsap.from('.crep_tentacle_2_arm', {
    scrollTrigger: {
      trigger: pro2,
      start: 'top 50%',
    },
    opacity: 0,
    yPercent: 50,
    duratrion: 1,
    delay: 0.3,
  });
  gsap.to('.product_2 .octopus_left', {
    rotate: 10,
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: 'linear'
  });

$('.product_2 .crep_tentacle_arm').each(function(index, item) {
  let r = $(this).data('r');
  let d1 =$(this).data('d1');
  gsap.to(item, {    
    rotate: r,
    repeat: -1,
    yoyo: true,
    duration: d1,
  });
});
  // gsap.to('.product_2 .crep_tentacle_1_arm_12', {
  //   rotate: -12,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 2,
  // });
  // gsap.to('.product_2 .crep_tentacle_1_arm_11', {
  //   rotate: -8,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 3,
  // });
  // gsap.to('.product_2 .crep_tentacle_1_arm_10', {
  //   rotate: 12,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 2.2,
  // });
  // gsap.to('.product_2 .crep_tentacle_1_arm_9', {
  //   rotate: -12,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 3,
  // });
  // gsap.to('.product_2 .crep_tentacle_1_arm_8', {
  //   rotate: 10,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 3,
  // });
  // gsap.to('.product_2 .crep_tentacle_1_arm_7', {
  //   rotate: -5,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 2,
  // });
  // gsap.to('.product_2 .crep_tentacle_1_arm_6', {
  //   rotate: -15,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 2.5,
  // });
  // gsap.to('.product_2 .crep_tentacle_1_arm_5', {
  //   rotate: -7,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 2,
  // });
  // gsap.to('.product_2 .crep_tentacle_1_arm_4', {
  //   rotate: 12,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 2,
  // });
  // gsap.to('.product_2 .crep_tentacle_1_arm_3', {
  //   rotate: -10,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 3,
  // });
  // gsap.to('.product_2 .crep_tentacle_1_arm_2', {
  //   rotate: 14,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 2.5,
  // });
  // gsap.to('.product_2 .crep_tentacle_1_arm_1', {
  //   rotate: -5,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 3,
  // });

  // gsap.to('.product_2 .crep_tentacle_2_arm_15', {
  //   rotate: 5,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 2.3,
  // });
  // gsap.to('.product_2 .crep_tentacle_2_arm_14', {
  //   rotate: -5,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 3,
  // });
  // gsap.to('.product_2 .crep_tentacle_2_arm_13', {
  //   rotate: 8,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 3,
  // });
  // gsap.to('.product_2 .crep_tentacle_2_arm_12', {
  //   rotate: 7,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 2.3,
  // });
  // gsap.to('.product_2 .crep_tentacle_2_arm_11', {
  //   rotate: -6,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 2.4,
  // });
  // gsap.to('.product_2 .crep_tentacle_2_arm_10', {
  //   rotate: -12,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 2,
  // });
  // gsap.to('.product_2 .crep_tentacle_2_arm_9', {
  //   rotate: 4,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 2.2,
  // });
  // gsap.to('.product_2 .crep_tentacle_2_arm_8', {
  //   rotate: -8,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 2.2,
  // });
  // gsap.to('.product_2 .crep_tentacle_2_arm_7', {
  //   rotate: 5,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 2,
  // });
  // gsap.to('.product_2 .crep_tentacle_2_arm_6', {
  //   rotate: -10,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 2,
  // });
  // gsap.to('.product_2 .crep_tentacle_2_arm_5', {
  //   rotate: 11,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 2,
  // });
  // gsap.to('.product_2 .crep_tentacle_2_arm_4', {
  //   rotate: 5,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 3,
  // });
  // gsap.to('.product_2 .crep_tentacle_2_arm_3', {
  //   rotate: -5,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 2,
  // });
  // gsap.to('.product_2 .crep_tentacle_2_arm_2', {
  //   rotate: 11,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 2.5,
  // });
  // gsap.to('.product_2 .crep_tentacle_2_arm_1', {
  //   rotate: 7,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 2,
  // });



  //break
  const breakArea = $('.break');
  gsap.to('.break .octopus_con', {
    scrollTrigger: {
      trigger: breakArea,
      start: 'top 50%',
      end: '250% bottom',
      scrub: 1,
    },
    xPercent: -70,
  });
  gsap.to('.break .crep_front', {
    scrollTrigger: {
      trigger: breakArea,
      start: '-20% 80%',
      end: 'bottom 60%',
      scrub: 1,
    },
    yPercent: -10,
  });

  $('.break .octopus_move').each(function (index, item) {
    let yVal = $(this).data('y');
    let dVal = $(this).data('d');
    gsap.to(item, {
      rotate: yVal,
      yoyo: true,
      repeat: -1,
      duration: dVal,
    });
  });
  gsap.to('.octopus_con_inner', {
    xPercent: -5,
    yPercent: -5,
    repeat: -1,
    duration: 2,
    ease: 'linear',
    yoyo: true,
  });


  //quote_first
  gsap.from('.quote_first .red_flower_small_main', {
    rotate: -3,
    yoyo: true,
    ease: 'linear',
    duration: 2.5,
    repeat: -1,
  });






  //product_3 
  //butterfly
  gsap.to('.product_3 .arcana_butterfly .butterfly_wing', {
    rotate: 5,
    yoyo: true,
    repeat: -1,
    duration: 1.5,
    ease: 'linear',
  });
  gsap.from('.product_3 .arcana_butterfly', {
    scrollTrigger: {
      trigger: '.arcana_butterfly',
      start: '-50% 50%',
    },
    yPercent: -25,
    xPercent: -100,
    duration: 2,
  });

  //snake_rotate
  gsap.from('.product_4 .snake_1', {
    scrollTrigger: {
      trigger: '.product_4 .snake_1',
      start: '-10% 50%',
      end: 'bottom 80%',
      scrub: 1,
    },
    rotate: 70,
    duration: 2,
  });
  gsap.from('.product_4 .snake_2', {
    scrollTrigger: {
      trigger: '.product_4 .snake_2',
      start: '-10% 50%',
      end: '80% 50%',
      scrub: 1,
    },
    rotate: 110
  });
  const pro4 = $('.product_4');
  gsap.to('.product_4 .venenum_bg_left', {
    scrollTrigger: {
      trigger: pro4,
      start: 'top 60%',
    },
    opacity: 1,
    duration: 2,
    xPercent: -45,
    delay: 0.7,
  });
  gsap.to('.product_4 .venenum_bg_right', {
    scrollTrigger: {
      trigger: pro4,
      start: 'top 60%',
    },
    opacity: 1,
    duration: 2,
    xPercent: 45,
    delay: 1.5,
  });

  //quote_second
  //blue_flower
  gsap.from('.quote_second .venenum_blue_flower_main', {
    scrollTrigger: {
      trigger: '.quote_second .venenum_blue_flower_main',
      start: '-8% 50%',
    },
    rotate: 10,
    duration: 5,
  });
  gsap.from('.quote_second .venenum_blue_flower_stem', {
    scrollTrigger: {
      trigger: '.quote_second .venenum_blue_flower_stem',
      start: '-8% 50%',
    },
    rotate: 10,
    duration: 5,
  });

  //product_5 
  const pro5 = $('.product_5');

  gsap.to('.product_5 .mirabilis_leaf_b', {
    scrollTrigger: {
      trigger: '.product_5 .mirabilis_leaf_b',
      start: '-40% 50%',
      end: 'bottom bottom',
      scrub: 1,
    },
    xPercent: -10,
    rotate: -22,
    duration: 3,
  });
  gsap.to('.product_5 .mirabilis_leaf_c', {
    scrollTrigger: {
      trigger: '.product_5 .mirabilis_leaf_c',
      start: '-10% 50%',
      end: '80% bottom',
      scrub: 1,
    },
    xPercent: 35,
    rotate: 7.5,
    duration: 3,
  });

  gsap.to('.product_5 .mirabilis_bottom_right_2', {
    rotate: 3,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'linear',
  });
  gsap.to('.product_5 .mirabilis_leaf_a', {
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'linear',
  });
  gsap.to('.product_5 .mirabilis_leaf_ab', {
    rotate: -40,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'linear',
  });
  gsap.from('.product_5 .mirabilis_open_bud_petal_1', {
    scrollTrigger: {
      trigger: '.mirabilis_open_bud',
      start: 'top 90%',
      end: 'top 90%',
      scrub: 1,
    },
    rotate: 36,
    duration: 5,
  });
  gsap.from('.product_5 .mirabilis_open_bud_petal_3', {
    scrollTrigger: {
      trigger: '.mirabilis_open_bud',
      start: 'top 68%',
      end: 'top 90%',
      scrub: 5,
    },
    rotate: -36,
    duration: 5,
  });
  gsap.to('.product_5 .mirabilis_open_bud_petal_2', {
    scrollTrigger: {
      trigger: '.mirabilis_open_bud',
      start: 'top 68%',
      end: 'top 90%',
      scrub: 5,
    },
    rotate: -2,
    duration: 5,
  });
  gsap.to('.product_5 .mirabilis_open_bud_petal_4', {
    scrollTrigger: {
      trigger: '.mirabilis_open_bud',
      start: 'top 70%',
      end: 'top 90%',
      scrub: 5,
    },
    rotate: 2,
    duration: 5,
  });
  gsap.to('.product_5 .mirabilis_open_bud_main', {
    scrollTrigger: {
      trigger: '.mirabilis_open_bud',
      start: 'top 70%',
      end: 'top 90%',
      scrub: 5,
    },
    yPercent: -4,
  });
  gsap.from('.product_6 .imgSpread', {
    scrollTrigger: {
      trigger: '.tenebre_center_wrap',
      start: '-20% 50%',
    },
    scale: 0.1,
    opacity: 0,
    duration: 1.5,
    stagger: {
      each: -0.5
    }
  });

  gsap.from('.product_6 .moveLeft', {
    scrollTrigger: {
      trigger: '.tenebre_center_wrap',
      start: '-20% 50%',
    },
    xPercent: 0,
    opacity: 0,
    duration: 1.8,
    stagger: {
      each: -0.8
    }
  });
  gsap.from('.product_6 .moveRight', {
    scrollTrigger: {
      trigger: '.tenebre_center_wrap',
      start: '-20% 50%',
    },
    xPercent: 0,
    opacity: 0,
    duration: 1.8,
    stagger: {
      each: -0.8
    }
  });



  scrollMotion = gsap.timeline({
    scrollTrigger: {
      trigger: '.intro .scroll',
      start: 'top 90%',
    }
  });

  scrollMotion.to('.intro .scroll', {
    opacity: 0,
  })
  //stemMove
  gsap.from('.stemMove01', {
    rotate: 10,
    x: 0,
    y: 0,
    z: 0,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'linear',
  });
}); //end