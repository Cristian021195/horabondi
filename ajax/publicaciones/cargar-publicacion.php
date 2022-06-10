<?php
require('../../models/publicaciones.php');
require('../../helpers/sendMessage.php');
$publicacion = new PublicacionesModel();


/* ONE SIGNAL DATA */
$body = array(
    "contents"=>array(
        "en"=>"Hello world"
    ),
    "included_segments"=> ["All"],
    "app_id"=> "9f895016-5666-4216-a052-13abc5bb0b18"
);

$headers = array(
        'method'  => 'POST',
        'header'  => "Content-Type: application/x-www-form-urlencoded\r\n" .
                    "Authorization: Basic ODUyNDExNjQtY2JhNS00NWZkLTgyMzEtYWQyNTBhOWFiODB3\r\n",
        'content' => $body
);
if(!empty($_POST['publicacion'])){
    if($_POST['id'] == 'undefined'){
        $publicacion->id = null;
    }else{
        $publicacion->id = $_POST['id'];
    }    
    $publicacion->publicacion = $_POST['publicacion'];
    $publicacion->empresa = $_POST['empresa'];
    $publicacion->nombre_llave = 'key_publicaciones';//36870302
    $publicacion->llave = password_hash('36870302', PASSWORD_DEFAULT, ['cost'=>10]);
    if(strlen($publicacion->publicacion) >= 25){
        $publicacion->cambiarLlave();
        if(empty($publicacion->id)){//nueva publicacion
            //sendMessage($publicacion->publicacion, $publicacion->empresa, '34');
            $ultimo_id = $publicacion->create(); 
            
            if ( is_int($ultimo_id) ) {
                echo json_encode(array("error"=>false));
                sendMessage($publicacion->publicacion, $publicacion->empresa, strval($ultimo_id));
            }else{
                echo json_encode(array("error"=>true));
            }
        }else{//publicacion a editar
            echo json_encode($publicacion->update());
            sendMessage($publicacion->publicacion, $publicacion->empresa, $publicacion->id);
            //echo sendMessage($publicacion->publicacion, $publicacion->empresa, '7');
            
        }        
    }else{
        echo json_encode(array("error"=>true, "mensaje"=>"¡Las publicaciones necesitan almenos 50 caracteres!"));
    }
}else{
    echo json_encode(array("error"=>true, "mensaje"=>"¡Las publicaciones necesitan almenos 50 caracteres!"));
}


/*{
"contents": {"en": "Hello World!"} ,
"included_segments" : ["All"],
"app_id": "9f895016-5666-4216-a052-13abc5bb0b18"
}
*/
?>
