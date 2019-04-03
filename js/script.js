// PhotoSwipe
initPhotoSwipeFromDOM('.my-gallery');

$(function () {

  $('figcaption').on('click', 'a', function (e) {
    e.stopPropagation();
  });

  $('a[href^="#"]').on('click', function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  //backToTop
  $('#backToTop').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });


  var $nav = $('#gnav');
  var offset = $nav.offset();
  var navHeight = $nav.innerHeight();
  $('.section').css('padding-top', navHeight / 2);

  $(window).on('resize', function () {
    var currentWidth = window.innerWidth;
    if (currentWidth == window.innerWidth) {
      // ウインドウ横幅が変わっていないため処理をキャンセル
      return;
    }
    $nav = $('#gnav');
    offset = $nav.offset();
    navHeight = $nav.innerHeight();
    $('.section').css('padding-top', navHeight / 2);
  });


  $(window).scroll(function () {
    if ($(window).scrollTop() >= offset.top) {
      $nav.addClass('fixed');
      $("#contents").css("margin-top", navHeight);
    } else {
      $nav.removeClass('fixed');
      $("#contents").css("margin-top", "0");
    }
  });


  
    var pagetop = $('#page_top');    
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });


});