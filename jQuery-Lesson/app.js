// 4章記述
// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });


// 5章記述
// 青ボックス出現
// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color':'#0000FF'});
//   });

// // 上から下に出現
// $(function(){
//   $('.box1').slideDown();
// });

// // 下から上に出現
// $(function(){
//   $('.box1').slideUp();
// });

// マウスカーソルイベントにてCSS変化
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color':'#0000FF'})
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color':'#FF0000'})
//   });
// });

// マウスオーバーのクラスを設定しての、適応解除方法
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// マウスクリックイベント
$(function(){
  $('.box1').on('click',function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});