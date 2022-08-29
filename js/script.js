



// ズームフェードスライド//
$('.slider').on('init', function (event, slick) {
  //ここに初期化した際に発生するイベントを記述します
});

//slickを初期化した際に発生するイベント（初期表示のスライドに.slick-animationのクラスをつける)
$('.slider-wrap').on('init', function () {
  $('.slick-slide[data-slick-index="0"]').addClass('slick-animation');
})
  .slick({
    autoplay: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    pauseOnHover: false
  })
  .on({
    // スライドが移動する前に発生するイベント
    beforeChange: function (event, slick, currentSlide, nextSlide) {
      //表示されているスライドに.slick-animationのクラスをつける
      $(".slick-slide", this).eq(nextSlide).addClass("slick-animation");

      //あとで、.slick-animationのクラスを消すための.stop-animationクラスを付ける
      $(".slick-slide", this).eq(currentSlide).addClass("stop-animation");
    },
    // スライドが移動した後に発生するイベント
    afterChange: function () {
      //見えてないスライドにはアニメーションのクラスを外す
      $(".stop-animation", this).removeClass("stop-animation slick-animation");
    },
  });













//logoの表示
$(window).on('load', function () {
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});

//ハンバーガーメニュー//
/* オプション設定 */
const options = {
  slide: 'top', /* スライド方向（none, top, bottom, left, right） */
  duration: 300, /* 表示アニメーション速度（ms） */
  weight: 'regular', /* アイコン太さ（regular, light, solid） */
  dark: true, /* 画面の暗転（true, false） */
};


//スライドイン 上に//
$(function () {
  const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
  const fade_move = 300; // どのぐらい要素を動かすか(px)
  const fade_time = 2000; // フェードの時間(ms)
  // フェード前のcssを定義
  $(".scroll-fade-up").css({
    opacity: 0,
    transform: "translateY(" + fade_move + "px)",
    transition: fade_time + "ms",
  });
  // スクロールまたはロードするたびに実行
  $(window).on("scroll load", function () {
    const scroll_top = $(this).scrollTop();
    const scroll_bottom = scroll_top + $(this).height();
    const fade_position = scroll_bottom - fade_bottom;
    $(".scroll-fade-up").each(function () {
      const this_position = $(this).offset().top;
      if (fade_position > this_position) {
        $(this).css({
          opacity: 1,
          transform: "translateY(0)",
        });
      }
    });
  });
});

//スライドイン 下に//
$(function () {
  const fade_bottom = 300; // 画面下からどの位置でフェードさせるか(px)
  const fade_move = 300; // どのぐらい要素を動かすか(px)
  const fade_time = 2000; // フェードの時間(ms)
  // フェード前のcssを定義
  $(".scroll-fade-down").css({
    opacity: 0,
    transform: "translateY(-" + fade_move + "px)",
    transition: fade_time + "ms",
  });
  // スクロールまたはロードするたびに実行
  $(window).on("scroll load", function () {
    const scroll_top = $(this).scrollTop();
    const scroll_bottom = scroll_top + $(this).height();
    const fade_position = scroll_bottom - fade_bottom;
    $(".scroll-fade-down").each(function () {
      const this_position = $(this).offset().top;
      if (fade_position > this_position) {
        $(this).css({
          opacity: 1,
          transform: "translateY(0)",
        });
      }
    });
  });
});

//スライドイン 左に//
$(function () {
  const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
  const fade_move = 500; // どのぐらい要素を動かすか(px)
  const fade_time = 1500; // フェードの時間(ms)
  // フェード前のcssを定義
  $(".scroll-fade-left").css({
    opacity: 0,
    transform: "translateX(" + fade_move + "px)",
    transition: fade_time + "ms",
  });
  // スクロールまたはロードするたびに実行
  $(window).on("scroll load", function () {
    const scroll_top = $(this).scrollTop();
    const scroll_bottom = scroll_top + $(this).height();
    const fade_position = scroll_bottom - fade_bottom;
    $(".scroll-fade-left").each(function () {
      const this_position = $(this).offset().top;
      if (fade_position > this_position) {
        $(this).css({
          opacity: 1,
          transform: "translateX(0)",
        });
      }
    });
  });
});

//スライドイン 右に//
$(function () {
  const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
  const fade_move = 500; // どのぐらい要素を動かすか(px)
  const fade_time = 1500; // フェードの時間(ms)
  // フェード前のcssを定義
  $(".scroll-fade-right").css({
    opacity: 0,
    transform: "translateX(-" + fade_move + "px)",
    transition: fade_time + "ms",
  });
  // スクロールまたはロードするたびに実行
  $(window).on("scroll load", function () {
    const scroll_top = $(this).scrollTop();
    const scroll_bottom = scroll_top + $(this).height();
    const fade_position = scroll_bottom - fade_bottom;
    $(".scroll-fade-right").each(function () {
      const this_position = $(this).offset().top;
      if (fade_position > this_position) {
        $(this).css({
          opacity: 1,
          transform: "translateX(0)",
        });
      }
    });
  });
});


$('.slider').slick({
  arrows: false,//左右の矢印はなし
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
  speed: 12000,//スライドのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
  cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
  slidesToShow: 1,//スライドを画面に4枚見せる
  slidesToScroll: 1,//1回のスライドで動かす要素数
  responsive: [
    {
      breakpoint: 769,//モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
      }
    },
    {
      breakpoint: 426,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1.5,//スライドを画面に1.5枚見せる
      }
    }
  ]
});