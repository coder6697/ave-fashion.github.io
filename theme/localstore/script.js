$(document).ready(function(){
    $(".openbtn").click(function(){ /*thứ xảy ra khi nhấn nút mobile-menu*/
        $("#mySidenav").css("width","250px");
    }),
    $(".closebtn").click(function(){
        $("#mySidenav").css("width","0");
    }),





    $(window).scroll(function(){/*hiệu ứng nút mobile-menu trượt xuống khi qua top của .main*/
    if($(this).scrollTop()>=$(".main").offset().top){
      $(".mobile-menu span").css({
        "transform":"translateY(-85px)",
        "color":"#333333",
      });
    }
    else{
    $(".mobile-menu span").css({
      "transform":"none",
      "color":"#f8f8f8",
    });
    }
  }),


  $(window).scroll(function(){/*hiệu ứng thanh bar desktop-menu trượt xuống khi qua top của .bar*/
  if($(this).scrollTop()>=$(".bar").offset().top){
    $(".bar .desktop-menu").css({
      "position":"fixed",
      "z-index":"2",
      "width":"100%",
      "background-color":"#b1b0b0",
    });
    $(".bar .desktop-menu").addClass("animation");
    $(".bar .div-replace").css("display","block");/*div giả ẩn hiện khắc phục tình trạng giật*/ 
  }
  else{
  $(".bar .desktop-menu").removeClass("animation");
  $(".bar .desktop-menu").css({
    "background":"rgba(0,0,0,0)",
    "position":"relative",
  });
  $(".bar .div-replace").css("display","none");
  }
  }),


  /*click vào nút lập tức được active, loại bỏ luôn active của nút trước đó*/
  $("header .container .right a").click(function(){
    $("header .container .right a.active").removeClass("active");
    $(this).addClass("active");
   });


  $(window).scroll(function(){/*hiệu ứng nút back-to-top*/
    if($(window).scrollTop() > 20){
      $("#myBtn").fadeIn();
    }
    else
      $("#myBtn").fadeOut();
  }),
  $("#myBtn").click(function(){
    $(document).scrollTop(0); //Chrome, Firefox, IE and Opera
    $("body").scrollTop(0); //Safari
  })




});