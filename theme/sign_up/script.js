$(document).ready(function(){
    $(".openbtn").click(function(){ /*thứ xảy ra khi nhấn nút mobile-menu*/
        $("#mySidenav").css("width","250px");
    }),
    $(".closebtn").click(function(){
        $("#mySidenav").css("width","0");
    })



    
    $(window).scroll(function(){/*hiệu ứng nút mobile-menu trượt xuống khi qua top của .main*/
    if($(this).scrollTop()>=$(".bar").offset().top){
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




 /*click vào nút lập tức được active, loại bỏ luôn active của nút trước đó*/
 $("header .container .right a").click(function(){
    $("header .container .right a.active").removeClass("active");
    $(this).addClass("active");
   })


  
  $(window).scroll(function(){/*hiệu ứng nút back-to-top*/
    if($(window).scrollTop() > 20){
      $("#myBtn").fadeIn();
    }
    else
      $("#myBtn").fadeOut();
  })
  $("#myBtn").click(function(){
    $(document).scrollTop(0); //Chrome, Firefox, IE and Opera
    $("body").scrollTop(0); //Safari
  })




  /*Xử lý form đăng nhập, đăng ký (từ đây trở xuống đều áp dụng cho việc xử lý form)*/
  $("#login").validate({
    rules: {
        email_1: {
            required: true,
            email: true,
        },
        password1: { /*chỗ password này sai*/
            required: true,
            regex: /abc123/,
        },
    },
    messages: {
        email_1: {
            required: "Vui lòng nhập email",
            email: "Phải là dạng email",
        },
        password1: {
            required: "Vui lòng nhập mật khẩu",
            regex: "Mật khẩu sai",
        },
    },
});



  $("#register").validate({
    rules: {
      // compound rule
      email_2: {
        required: true,
        email:true,//Chỗ này nó đã viết sẵn chuỗi ký tự rồi nên mình không cần khai báo lại
      },
      password2:{
        required:true,
        regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      },
      confirm2:{
        required: true,
        equalTo:"[name=password2]",
      },
    },
    messages: {
      email_2:{
        required:"Vui lòng nhập email",
        email:"Phải là dạng email",
      },
      password2:{
        required:"Vui lòng nhập mật khẩu",
        regex:"Phải thỏa mãn mẫu đã học bao gồm số, ký tự, đặc biệt, chữ hoa, chữ thường",
      },
     confirm2:{
        required:"Vui lòng xác nhận mật khẩu",
        equalTo:"Phải trùng khớp với mật khẩu ở trên",
      },
    },
  });


  // Hàm xử lý chuỗi
  $.validator.addMethod(
    "regex",
    function(value, element, regexp) 
    {
      if (regexp.constructor != RegExp)
        regexp = new RegExp(regexp);
      else if (regexp.global)
        regexp.lastIndex = 0;
      return this.optional(element) || regexp.test(value);
    },
    "Please check your input. It is not matched regex"
    );
  

})