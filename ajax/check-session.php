<?php
session_start();
if(isset($_SESSION['id'])) {
    echo json_encode(array("session"=>true));
}else{
    echo json_encode(array("session"=>false));
}

?>