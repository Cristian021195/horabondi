<?php

function getBaseUrl(){
    $url = '';
    if(isset($_SERVER['HTTPS'])&&$_SERVER['HTTPS']==='on'){
       $url="https://";
    }else{
       $url="http://";
    }
    /*if($_SERVER['SERVER_PORT'] == 80){
        echo $_SERVER['SERVER_NAME'];  
    }else{
        echo $_SERVER['SERVER_NAME'].":".$_SERVER['SERVER_PORT'];
    }*/

    return $url.$_SERVER['HTTP_HOST'];
}
?>