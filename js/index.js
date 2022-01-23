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
    if (count === true) {
      $('header .gnb_area').css({
        visibility: 'hidden'
      });
      $('.header_inner .ham_btn .line_second').removeClass('on');
      $('.header_inner .ham_btn .line_first, .header_inner .ham_btn .line_third').removeClass('rotate');
      $('body').removeClass('overflow');
      $('header').removeClass('overflow');
      $('header').css({
        height: '60px'
      });
      $('.in_gnb').animate({
        height: 0
      });
      count = false;
    } else {
      $('header .gnb_area').css({
        visibility: 'visible'
      });
      $('.header_inner .ham_btn .line_second').addClass('on');
      $('.header_inner .ham_btn .line_first, .header_inner .ham_btn .line_third').addClass('rotate');
      $('body').addClass('overflow');
      $('header').addClass('overflow');
      $('header').css({
        height: '100%'
      });
      $('.menu_open').removeClass('on');
      count = true;
    }
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
      $('.in_gnb').animate({
        height: 0
      });
      inGnb.animate({
        height: h
      });
      $('.menu_open').removeClass('on');
      $(this).addClass('on');
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
    if (curr > 100) {
      $('.scroll').addClass('hide');
      $('.intro_bottom .txt_wrap p').addClass('show');
    }
  });

  gsap.to('.intro .scroll', {
    scrollTrigger: {
      trigger: '.intro .scroll',
      start: 'top 90%',
    },
    opacity: 0,
  });

  gsap.from('.yellow_flower_stem_wrap', {
    rotate: 20,
    duration: 1.5,
    scale: (1.5),
  });
  gsap.from('.white_purple_flower_stem', {
    duration: 1,
    scale: (2),
  });
  gsap.from('.vine_flower', {
    xPercent: 50,
    duration: 1.5,
    scale: (1.5),
  });
  gsap.from('.blue_flower', {
    xPercent: 50,
    rotate: 10,
    duration: 1.5,
    scale: (1.5),
  });
  gsap.from('.below_intro .hand_orange_flowers', {
    duration: 1.5,
    scale: (1.2),
  });

  txtMotion = gsap.timeline({});
  txtMotion.from('.intro .intro_logo', {
      opacity: 0,
      duration: 1,
      delay: 1,
      yPercent: 20,
    })
    .from('.intro .intro_title p', {
      opacity: 0,
      duration: 0.8,
      yPercent: 20,
    })
    .from('.intro .intro_title h2', {
      opacity: 0,
      duration: 0.8,
      yPercent: 20,
    })
    .from('.intro_bottom .txt_wrap p', {
      opacity: 0,
    })
    .from('.intro .scroll', {
      opacity: 0,
      duration: 1,
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
  pro1 = gsap.timeline({
    scrollTrigger: {
      trigger: $('.product_1'),
      start: 'top 50%',
    }
  });
  pro1.from('.product_1 .bottle_bg', {
      opacity: 0,
      yPercent: 30,
      scale: (0.4),
      duration: 2,
    }, 'product_1')
    .to('.product_1 .red_flower_large', {
      opacity: 1,
      yPercent: -10,
      duration: 2,
    }, 'product_1')
    .to('.product_1 .red_flower_large_petal_right', {
      opacity: 1,
      yPercent: -10,
      duration: 2,
      rotate: 15,
    }, 'product_1')
    .to('.product_1 .red_flower_large_petal_left', {
      opacity: 1,
      yPercent: -10,
      duration: 2,
      rotate: -15,
    }, 'product_1');

  //product_2
  pro2 = gsap.timeline({
    scrollTrigger: {
      trigger: $('.product_2'),
      start: 'top 50%',
    }
  });
  pro2.from('.product_2 .bottle_img, .product_2 .bottle_bg, .tentacle_base_1, .tentacle_base_2', {
      opacity: 0,
    })
    .from('.tentacle_1_arm', {
      opacity: 0,
      yPercent: 30,
      duratrion: 1,
    }, 'product_2')
    .from('.tentacle_2_arm', {
      opacity: 0,
      yPercent: 50,
      duratrion: 1,
    }, 'product_2');
  gsap.to('.product_2 .octopus_left', {
    rotate: 10,
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: "linear"
  });

  $('.product_2 .tentacle_arm').each(function (index, item) {
    let r = $(this).data('r');
    let d1 = $(this).data('d1');
    gsap.to(item, {
      rotate: r,
      repeat: -1,
      yoyo: true,
      duration: d1,
    });
  });

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
    ease: "linear",
    yoyo: true,
  });


  //quote_first
  gsap.from('.quote_first .red_flower_small_main', {
    rotate: -3,
    yoyo: true,
    ease: "linear",
    duration: 2.5,
    repeat: -1,
  });

  //product_3 
  //butterfly
  gsap.to('.product_3 .butterfly_wrap .butterfly_wing', {
    rotate: 5,
    yoyo: true,
    repeat: -1,
    duration: 1.5,
    ease: "linear",
  });
  gsap.from('.product_3 .butterfly_wrap', {
    scrollTrigger: {
      trigger: '.butterfly_wrap',
      start: '-50% 50%',
    },
    yPercent: -25,
    xPercent: -100,
    duration: 2,
  });

  //snake_rotate
  gsap.from('.product_4 .snake_1', {
    scrollTrigger: {
      trigger: '.product_4',
      start: '-10% 50%',
      end: 'bottom 80%',
      scrub: 1,
    },
    rotate: 70,
    duration: 2,
  });
  gsap.from('.product_4 .snake_2', {
    scrollTrigger: {
      trigger: '.product_4',
      start: '-10% 50%',
      end: '80% 50%',
      scrub: 1,
    },
    rotate: 110
  });

  pro4 = gsap.timeline({
    scrollTrigger: {
      trigger: $('.product_4'),
      start: 'top 60%',
    },
  });
  pro4.to('.product_4 .bottle04_bg_left', {
      opacity: 1,
      duration: 2,
      xPercent: -45,
    }, 'product_4+=0.7')
    .to('.product_4 .bottle04_bg_right', {
      opacity: 1,
      duration: 2,
      xPercent: 45,
    }, 'product_4+=1.5');

  //product_5 
  pro5 = gsap.timeline({
    scrollTrigger: {
      trigger: $('.product_5'),
      start: '-30% 70%',
      end: '-20% 50%',
      scrub: 3,
    },
  });
  pro5.to('.product_5 .mirabilis_leaf_b', {
      xPercent: -10,
      rotate: -22,
      duration: 3,
    }, 'product_5')
    .to('.product_5 .mirabilis_leaf_c', {
      xPercent: 35,
      rotate: 7.5,
      duration: 3,
    }, 'product_5');

  gsap.to('.product_5 .mirabilis_bottom_right_2', {
    rotate: 3,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "linear",
  });
  gsap.to('.product_5 .mirabilis_leaf_a', {
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "linear",
  });
  gsap.to('.product_5 .mirabilis_leaf_ab', {
    rotate: -40,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "linear",
  });

  mirabilis = gsap.timeline({
    scrollTrigger: {
      trigger: '.mirabilis_open_bud',
      start: 'top 68%',
      end: 'top 90%',
      scrub: 3,
    },
  });
  mirabilis.from('.product_5 .mirabilis_open_bud_petal_1', {
      rotate: 36,
      duration: 5,
    }, 'mirabilis')
    .from('.product_5 .mirabilis_open_bud_petal_3', {

      rotate: -36,
      duration: 5,
    }, 'mirabilis')
    .to('.product_5 .mirabilis_open_bud_petal_2', {

      rotate: -2,
      duration: 5,
    }, 'mirabilis')
    .to('.product_5 .mirabilis_open_bud_petal_4', {

      rotate: 2,
      duration: 5,
    }, 'mirabilis')
    .to('.product_5 .mirabilis_open_bud_main', {

      yPercent: -4,
      duration: 5,
    }, 'mirabilis');

  //product_6
  pro6 = gsap.timeline({
    scrollTrigger: {
      trigger: '.pro6_center_wrap',
      start: '-20% 50%',
    },
  });
  pro6.from('.product_6 .imgSpread', {
      scale: 0.1,
      opacity: 0,
      duration: 1,
      stagger: {
        each: -0.5
      }
    }, 'product_6')
    .from('.product_6 .moveLeft', {
      xPercent: 0,
      opacity: 0,
      duration: 1,
      stagger: {
        each: -0.5
      }
    }, 'product_6')
    .from('.product_6 .moveRight', {
      xPercent: 0,
      opacity: 0,
      duration: 1,
      stagger: {
        each: -0.5
      }
    }, 'product_6');

  //stemMove
  gsap.from('.stemMove01', {
    rotate: 10,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "linear",
  });
}); //end