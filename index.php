<?php 

/*
    极简控制器
 */

    /*phpinfo();
    exet;*/

    //$_SERVER 数组 可以获得服务器信息 其中PATH_INFO 是地址部分信息
    
    //var_dump($_SERVER);

    // $filename = $_SERVER['PATH_INFO'];

    // include '/views' . $filename . '.html';
    
    //获取路径信息
    //格式为/index/login
     $pathInfo = $_SERVER['PATH_INFO'];

     // print_r (explode('/', $pathInfo));
     
     //將路徑進行拆分
     $pathInfo = explode('/', substr($pathInfo, 1));

     //格式为/user/user_list 时去加载 /views/user/user_list.html
     
     $path = $pathInfo[0]; //目录名称
     $filename = $pathInfo[1]; //文件名称

     //路径简化
     if(count($pathInfo) == 1){
        if(!$path){
            $path = 'index';
            $filename = 'index';
        }else{
            $path = 'index';
            $filename = $pathInfo[0];
        }
     }

     include '/views/' . $path . '/' . $filename . '.html';


 ?>