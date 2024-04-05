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

 $(".products .product").hover(function(){ /*hiệu ứng bóng cho sản phẩm*/ 
      $(".products .product:hover").css("box-shadow","0 4px 8px 5px rgba(0, 0, 0, 0.2)", "0 6px 20px 5px rgba(0, 0, 0, 0.19)");
    },
    function(){
      $(".products .product").css("box-shadow","none");
    }),



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
  }),




    /*click vào nút lập tức được active, loại bỏ luôn active của nút trước đó*/
    $("header .container .right a").click(function(){
      $("header .container .right a.active").removeClass("active");
      $(this).addClass("active");
     });
    /*tương tự code trênnhưng cho phần khác*/
    $(".products .products-button button").click(function(){
      $(".products .products-button button.active1").removeClass("active1");
      $(this).addClass("active1");
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
   



      /*chọn nút kiểu dùng for , đừng dùng show, hide hay display: none, display:block => xấu vì ko có hiệu ứng, dùng fadeOut(), fadeIn() */
   buttonIds = ["lasted", "most-liked", "best-seller", "low-to-high", "high-to-low"];
   // Duyệt qua từng id nút
   for (var i = 0; i < buttonIds.length; i++) {
       $("#" + buttonIds[i]).click(function () {
           // Lấy class tương ứng với id của nút
           var className = "." + $(this).attr("id");
           // Hiển thị các phần tử có class tương ứng
           $(".products .products-list>div:not(" + className + ")").fadeOut(); //ẩn
             // Hiển thị các phần tử có class tương ứng sau khi ẩn xong
           $(".products .products-list>div" + className).fadeIn(); //hiện
     });
   }


});
