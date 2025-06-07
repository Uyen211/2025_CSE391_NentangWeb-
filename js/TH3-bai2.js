$(document).ready(function () {
  $('#signupForm').validate({
    rules: {
      name: {
        required: true,
        maxlength: 50
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      name: {
        required: "Vui lòng nhập họ tên.",
        maxlength: "Họ tên không được quá 50 ký tự."
      },
      email: {
        required: "Vui lòng nhập email.",
        email: "Email không hợp lệ."
      },
      password: {
        required: "Vui lòng nhập mật khẩu.",
        minlength: "Mật khẩu phải từ 6 ký tự trở lên."
      }
    },
    submitHandler: function (form) {
      const formData = {
        name: $('#name').val(),
        email: $('#email').val(),
        password: $('#password').val()
      };

      $.ajax({
        url: 'https://my-endpoint.free.beeceptor.com', // Thay bằng API thật
        method: 'POST',
        data: JSON.stringify(formData),
        contentType: 'application/json',
        success: function (res) {
          $('#signupFormWrapper form').slideUp();
          $('#successMessage').removeClass('d-none').hide().fadeIn();
        },
        error: function () {
          alert('Server bận, vui lòng thử lại sau.');
        }
      });
    }
  });

  $('#viewDetail').on('click', function () {
    $('#detail').slideToggle();
  });
});
