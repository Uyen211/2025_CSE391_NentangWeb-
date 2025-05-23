$(document).ready(function () {
    function validatePhoneVN(value) {
        if (value === "") return true;
        return /^(03|05|07|08|09|01[2|6|8|9])[0-9]{8}$/.test(value);
      }
      
      function validateNoNumber(value) {
        if (value === "") return true;
        return /^[a-zA-Z\s]+$/.test(value);
      }

    $.validator.addMethod("phoneVN", validatePhoneVN);

    $.validator.addMethod("noNumber", validateNoNumber);
      
    $("#formDK").validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
          noNumber: true
        },
        sdt: {
          required: true,
          phoneVN: true
        },
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 5
        }
      },
      messages: {
        name: {
          required: "Vui lòng nhập họ và tên",
          minlength: "Họ và tên phải có ít nhất 2 ký tự",
            noNumber: "Họ và tên không được chứa số hoặc ký tự đặc biệt"

        },
        sdt: {
          required: "Vui lòng nhập số điện thoại",
          phoneVN: "Số điện thoại không hợp lệ"
        },
        email: {
          required: "Vui lòng nhập địa chỉ email",
          email: "Địa chỉ email không hợp lệ"
        },
        password: {
          required: "Vui lòng nhập mật khẩu",
          minlength: "Mật khẩu phải có ít nhất 5 ký tự"
        }
      }
    });
  
    $("#dkButt").on("click", function () {
      if ($("#formDK").valid()) {
        $("#formCon").fadeOut();
        $("#message").slideDown();
      }
    });
  });
  