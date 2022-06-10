<?php
require('../../models/publicaciones.php');
$publicaciones = new PublicacionesModel();
$publicaciones->id = $_POST['id'];
if(!empty($publicaciones->id)){
    echo json_encode($publicaciones->readOne());
}else{
    echo json_encode(array("error"=>true, "mensaje"=>"¡Minimo 16 caracteres!"));
}
?>