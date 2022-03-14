'use strict'

$(function(){
  /*=================================================
  // カルーセル用 jQueryプラグイン「slick」
  // マニュアル：https://kenwheeler.github.io/slick/
  ===================================================*/
  $('#slider').slick({
    autoplay: true,                         // 自動再生オン
    autoplaySpeed: 5000,                    // スライドを5秒で切り替え
    // arrows: true,                           // 左右の矢印を表示
    // dots: true,                             // ドット（ページ送り）を表示
    // slidesToShow: 1,                        // スライドを1枚表示（※centerModeをtrueにすると両端に2枚見切れた状態になる）
    // centerMode: true,                       // センターモード（両端が見切れた状態になる）
    // centerPadding: '18%',                   // 見切れたコンテンツの幅を18%に設定
    // prevArrow:'<div class="prev"></div>',   // 前へ矢印のHTMLを変更する
    // nextArrow:'<div class="next"></div>',   // 次へ矢印のHTMLを変更する
    // responsive: [              // レスポンシブの設定
    //   {
    //     breakpoint: 900,       // 900px以下の場合に適用
    //     settings: {
    //       centerMode: false    // センターモードをオフにする
    //     }
    //   }
    // ]
  });
});



// スムーススクロール

$(function(){
  $('a[href^="#"]').click(function() {
  var speed = 1000;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
  });
});



$(function(){
  $('#concept').each(function(i, elem){
      var contentsPOS = $(elem).offset().top;
      $(window).on('load scroll resize', function(){
          var scrollTop = $(window).scrollTop();
          var showClass = 'show';
          if (scrollTop >= contentsPOS - 1){
            $('.header').addClass(showClass);
          } else {
            $('.header').removeClass(showClass);
          }
      });
  });
});



const humbergerMenu = document.querySelector('.humberger-menu');

const navi = document.getElementById('humberger-navigation');

const humbergerMenuSections = document.querySelectorAll('.humberger-menu-section');

humbergerMenu.addEventListener('click', function () {
  humbergerMenu.classList.toggle('active');
  navi.classList.toggle('active');
});

humbergerMenuSections.forEach((humbergerMenuSection) => {
  humbergerMenuSection.addEventListener('click', function () {
    humbergerMenu.classList.remove('active');
    navi.classList.remove('active');
  });
});