$(".next").on("click", function () {
    var random = Math.floor(Math.random() * 11 + 1);
    console.log(random); //ランダムな数字がブラウザで表示されるようになる
    if (random == 1) {
      $('.image').attr('src', '');
      $(".name").html("名前 さん");
      $(".question").html("Q.？");
      $(".answer1").html("1");
      $(".answer2").html("2");
      $(".answer3").html("3");
      $(".answer4").html("4");
    } else if (random == 2) {
      $('.image').attr('src', 'img/arakawa.png');
      $(".name").html(" さん");
      $(".question").html("Q. ？");
      $(".answer1").html("1");
      $(".answer2").html("2");
      $(".answer3").html("3");
      $(".answer4").html("4");
    } else if (random == 3) {
      $('.image').attr('src', 'img/arakawa.png');
      $(".name").html(" さん");
      $(".question").html("Q. ？");
      $(".answer1").html("1");
      $(".answer2").html("2");
      $(".answer3").html("3");
      $(".answer4").html("4");
    } else if (random == 4) {
      $('.image').attr('src', 'img/arakawa.png');
      $(".name").html(" さん");
      $(".question").html("Q. ？");
      $(".answer1").html("1");
      $(".answer2").html("2");
      $(".answer3").html("3");
      $(".answer4").html("4");
    } else if (random == 5) {
      $('.image').attr('src', 'img/arakawa.png');
      $(".name").html(" さん");
      $(".question").html("Q. ？");
      $(".answer1").html("1");
      $(".answer2").html("2");
      $(".answer3").html("3");
      $(".answer4").html("4");
    } else if (random == 6) {
      $('.image').attr('src', 'img/arakawa.png');
      $(".name").html(" さん");
      $(".question").html("Q. ？");
      $(".answer1").html("1");
      $(".answer2").html("2");
      $(".answer3").html("3");
      $(".answer4").html("4");
    } else if (random == 7) {
      $('.image').attr('src', 'img/arakawa.png');
      $(".name").html(" さん");
      $(".question").html("Q. ？");
      $(".answer1").html("1");
      $(".answer2").html("2");
      $(".answer3").html("3");
      $(".answer4").html("4");
    } else if (random == 8) {
      $('.image').attr('src', 'img/arakawa.png');
      $(".name").html(" さん");
      $(".question").html("Q. ？");
      $(".answer1").html("1");
      $(".answer2").html("2");
      $(".answer3").html("3");
      $(".answer4").html("4");
    } else if (random == 9) {
      $('.image').attr('src', 'img/arakawa.png');
      $(".name").html(" さん");
      $(".question").html("Q. ？");
      $(".answer1").html("1");
      $(".answer2").html("2");
      $(".answer3").html("3");
      $(".answer4").html("4");
    } else if (random == 10) {
      $('.image').attr('src', 'img/arakawa.png');
      $(".name").html(" さん");
      $(".question").html("Q. ？");
      $(".answer1").html("1");
      $(".answer2").html("2");
      $(".answer3").html("3");
      $(".answer4").html("4");
    } else if (random == 11) {
      $('.image').attr('src', 'img/arakawa.png');
      $(".name").html(" さん");
      $(".question").html("Q. ？");
      $(".answer1").html("1");
      $(".answer2").html("2");
      $(".answer3").html("3");
      $(".answer4").html("4");
    } 

    // 全員分したかったのですが想定以上にクイズ作成に時間が取られるので、
    // 同様な課題が会った際に、後半半分の方のクイズも作りたいと思います。
  });

var right = 0;
$("#right").on("click", function(){
  right += 1;
});

var count = 0;
$(".next").on("click", function () {
  count += 1;
  if (count > 10 && right >= 0 && right <=2) {
    $("img").remove();
    $(".name").html("あなたの知識レベルは...?");
    $(".name").css("font-size", "18px");
    $(".name").css("color", "black");
    $(".question").html("一般生徒");
    $(".question").css("font-size", "50px")
    $(".question").css("font-weight", "bold")
    $(".question").css("color", "#00a7ea")
    $(".last").html('<a href="main.html">最初から始める</a>');
    $(".last").css("font-size", "30px")
    $(".answer").remove();
    $(".next").remove();
  }
  if (count > 10 && right >= 2 && right <=4) {
    $("img").remove();
    $(".name").html("あなたの知識レベルは...?");
    $(".name").css("font-size", "18px");
    $(".name").css("color", "black");
    $(".question").html("理事");
    $(".question").css("font-size", "50px")
    $(".question").css("font-weight", "bold")
    $(".question").css("color", "#00a7ea")
    $(".last").html('<a href="main.html">最初から始める</a>');
    $(".last").css("font-size", "30px")
    $(".answer").remove();
    $(".next").remove();
  }
  if (count > 10 && right >= 4 && right <=6) {
    $("img").remove();
    $(".name").html("あなたの知識レベルは...?");
    $(".name").css("font-size", "18px");
    $(".name").css("color", "black");
    $(".question").html("チューター");
    $(".question").css("font-size", "50px")
    $(".question").css("font-weight", "bold")
    $(".question").css("color", "#00a7ea")
    $(".last").html('<a href="main.html">最初から始める</a>');
    $(".last").css("font-size", "30px")
    $(".answer").remove();
    $(".next").remove();
  }
  if (count > 10 && right >= 6 && right <=8) {
    $("img").remove();
    $(".name").html("あなたの知識レベルは...?");
    $(".name").css("font-size", "18px");
    $(".name").css("color", "black");
    $(".question").html("担任");
    $(".question").css("font-size", "50px")
    $(".question").css("font-weight", "bold")
    $(".question").css("color", "#00a7ea")
    $(".last").html('<a href="main.html">最初から始める</a>');
    $(".last").css("font-size", "30px")
    $(".answer").remove();
    $(".next").remove();
  }
  if (count > 10 && right >= 8 && right <=10) {
    $("img").remove();
    $(".name").html("あなたの知識レベルは...?");
    $(".name").css("font-size", "18px");
    $(".name").css("color", "black");
    $(".question").html("総責任者");
    $(".question").css("font-size", "50px")
    $(".question").css("font-weight", "bold")
    $(".question").css("color", "#00a7ea")
    $(".last").html('<a href="main.html">最初から始める</a>');
    $(".last").css("font-size", "30px")
    $(".answer").remove();
    $(".next").remove();
  }
});
