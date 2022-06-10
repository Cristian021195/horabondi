<?php
require('../../models/publicaciones.php');
$publicacion = new PublicacionesModel();
$publicacion->id = $_POST['id'];
$publicacion->nombre_llave = 'key_publicaciones';//36870302
$publicacion->llave = password_hash('36870302', PASSWORD_DEFAULT, ['cost'=>10]);
if(!empty($publicacion->id)){
    $publicacion->cambiarLlave();
    echo json_encode($publicacion->delete());
}else{
    echo json_encode(array("error"=>true, "mensaje"=>"¡Minimo 16 caracteres!"));
}

?>