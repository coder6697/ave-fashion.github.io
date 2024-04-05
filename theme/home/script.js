$(document).ready(function(){
    $(".openbtn").click(function(){ /*thứ xảy ra khi nhấn nút mobile-menu*/
        $("#mySidenav").css("width","250px");
    }),
    $(".closebtn").click(function(){
        $("#mySidenav").css("width","0");
    }),





    $(".products .product").hover(function(){ /*hiệu ứng bóng cho sản phẩm*/ 
      $(".products .product:hover").css("box-shadow","0 4px 8px 5px rgba(0, 0, 0, 0.2)", "0 6px 20px 5px rgba(0, 0, 0, 0.19)");
    },
    function(){
      $(".products .product").css("box-shadow","none");
    }),





   $(window).scroll(function(){/*hiệu ứng nút mobile-menu trượt xuống khi qua top của .main-tab*/
      if($(this).scrollTop()>=$(".main-tab").offset().top){
        $(".mobile-menu span").css("transform","translateY(-65px)");
      }
      else
      $(".mobile-menu span").css("transform","none");
    }),





    $(window).scroll(function(){/*hiệu ứng thanh bar desktop-menu trượt xuống khi qua top của .main-tab*/
    if($(this).scrollTop()>=$(".main-tab").offset().top){
      $(".main-tab .desktop-menu").css({
        "position":"fixed",
        "z-index":"4",
        "width":"100%",
        "background-color":"#b1b0b0",
      });
      $(".main-tab .desktop-menu").addClass("animation");
      $(".main-tab .div-replace").css("display","block");/*div giả ẩn hiện khắc phục tình trạng giật*/ 
    }
    else{
    $(".main-tab .desktop-menu").removeClass("animation");
    $(".main-tab .desktop-menu").css("background","rgba(0,0,0,0)");
    $(".main-tab .desktop-menu").css("position","relative");
    $(".main-tab .div-replace").css("display","none");
    }
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





    /*chọn nút kiểu thông thường , chưa có hiệu ứng ẩn hiện đẹp mắt
    $("#popular").click(function(){
      $(".product-tab .products>div.popular").show();
    }),
    $("#new").click(function(){
      $(".product-tab .products>div.new").show();
      $(".product-tab .products>div:not(.new)").hide();
    }),
    $("#best").click(function(){
      $(".product-tab .products>div.best").show();
      $(".product-tab .products>div:not(.best)").hide();
    }),
    $("#special").click(function(){
      $(".product-tab .products>div.special").show();
      $(".product-tab .products>div:not(.special)").hide();
    }),
    $("#soon").click(function(){
      $(".product-tab .products>div.soon").show();
      $(".product-tab .products>div:not(.soon)").hide();
    })
    */






   /*chọn nút kiểu dùng for , đừng dùng show, hide hay display: none, display:block => xấu vì ko có hiệu ứng, dùng fadeOut(), fadeIn() */
   buttonIds = ["popular", "new", "best", "special", "soon"];
    // Duyệt qua từng id nút
    for (var i = 0; i < buttonIds.length; i++) {
        $("#" + buttonIds[i]).click(function () {
            // Lấy class tương ứng với id của nút
            var className = "." + $(this).attr("id");
            // Hiển thị các phần tử có class tương ứng
            $(".product-tab .products>div:not(" + className + ")").fadeOut(); //ẩn
              // Hiển thị các phần tử có class tương ứng sau khi ẩn xong
            $(".product-tab .products>div" + className).fadeIn(); //hiện
      });
    }





    /*click vào nút lập tức được active, loại bỏ luôn active của nút trước đó*/
    $("header .container .right a").click(function(){
      $("header .container .right a.active").removeClass("active");
      $(this).addClass("active");
     });
    /*tương tự code trênnhưng cho phần khác*/
    $(".product-tab .product-menu button").click(function(){
      $(".product-tab .product-menu button.active1").removeClass("active1");
      $(this).addClass("active1");
     });




  });