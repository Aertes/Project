
define(['jquery'], function (jquery) {
    $('#loginFrom').on('submit', function () {
        var formData = $(this).serialize();
        $.ajax({
            url:'/api/login',
            type:'post',
            data: formData,
            success:function (info) {
                if(info.code == 200){
                    $.cookie('loginfo', JSON.stringify(info.result), {path : '/'});
                    location.href = '/';
                }
            }
        });
        return false;
    });
})