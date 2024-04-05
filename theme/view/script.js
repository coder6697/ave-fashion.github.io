$(document).ready(function(){
    $(".openbtn").click(function(){ /*thứ xảy ra khi nhấn nút mobile-menu*/
        $("#mySidenav").css("width","250px");
    }),
    $(".closebtn").click(function(){
        $("#mySidenav").css("width","0");
    })




    
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
   })
    




  /*click vào nút lập tức được active, loại bỏ luôn active của nút trước đó*/
  $("header .container .right a").click(function(){
    $("header .container .right a.active").removeClass("active");
    $(this).addClass("active");
   })
   /*tương tự code trênnhưng cho phần khác*/
   $(".detail-description .buttons-list button").click(function(){
    $(".detail-description .buttons-list button.active1").removeClass("active1");
    $(this).addClass("active1");
   })


   
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





  /*chọn nút kiểu dùng for , đừng dùng show, hide hay display: none, display:block => xấu vì ko có hiệu ứng, dùng fadeOut(), fadeIn() */
  buttonIds = ["description", "video", "size-specs", "delivery-returns", "review"];
  // Duyệt qua từng id nút
  for (var i = 0; i < buttonIds.length; i++) {
      $("#" + buttonIds[i]).click(function () {
          // Lấy class tương ứng với id của nút
          var className = "." + $(this).attr("id");
          // Ẩn các phần tử có class tương ứng
          $(".detail-description .buttons-content>div:not(" + className + ")").fadeOut(); //ẩn
            // Hiển thị các phần tử có class tương ứng sau khi ẩn xong
          $(".detail-description .buttons-content>div" + className).fadeIn(); //hiện
    });
  }


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
  })





/*code menu hình ảnh trượt, ko tự động*/
 let slideIndex = 1;
 showSlides(slideIndex);
 
 function showSlides(n) {
   let i;
   const slides = $(".mySlides"); // Lấy danh sách các slide
   const dots = $(".dot"); // Lấy danh sách các chấm (dots)
 
   // Đảm bảo slideIndex không vượt quá số lượng slide
   if (n > slides.length) {
     slideIndex = 1;
   }
   if (n < 1) {
     slideIndex = slides.length;
   }
 
   // Ẩn tất cả các slide
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
 
   // Bỏ lớp "active" khỏi tất cả các chấm
   for (i = 0; i < dots.length; i++) {
     dots[i].classList.remove("active");
   }
 
   // Hiển thị slide hiện tại và thêm lớp "active" cho chấm tương ứng
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].classList.add("active");
 }


 $(".next").click(function() {
  showSlides(slideIndex += 1); 
}),


$(".prev").click(function() {
  showSlides(slideIndex -= 1);
})


});

