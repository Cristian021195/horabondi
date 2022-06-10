<?php
require('../../models/publicaciones.php');
$publicacion = new PublicacionesModel();

if(empty($_POST['empresa'])){
    echo json_encode($publicacion->read());
}else{
    $publicacion->empresa = $_POST['empresa'];
    echo json_encode($publicacion->read());
}  

//echo json_encode(array("error"=>true, "mensaje"=>"¡Las publicaciones necesitan almenos 50 caracteres!"));
?>