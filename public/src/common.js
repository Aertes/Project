
//通过检测cookie中有没有PHPSESSID来判断用户是否登录
//除了登录页面以外都要进行检测
/*var pathname = location.pathname;
if(pathname != '/index.php/login' && !$.cookie('PHPSESSID')){
    location.href = '/index.php/login';
}

var loginfo = $.cookie('loginfo') && JSON.parse($.cookie('loginfo'));

var html = template('tpl', loginfo);


$('.aside .profile').html(html);*/


define(['jquery', 'template', 'cookie'], function ($, template) {
    var pathname = location.pathname;

    if(pathname != '/index.php/login' && !$.cookie('PHPSESSID')){
        location.href = '/index.php/login';
    }

    var loginfo = $.cookie('loginfo') && JSON.parse($.cookie('loginfo'));
    var html = template('tpl', loginfo);
    $('.aside .profile').html(html); 
})