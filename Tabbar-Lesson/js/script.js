// ある値に等しくない要素を非表示にする
$('#tab-contents .tab[id != "tab1"]').hide();

// クリックされた時の動作設定
$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});