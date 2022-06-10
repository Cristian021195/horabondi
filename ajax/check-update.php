<?php
require('../models/update.php');
$update = new UpdateModel();

if(!empty($_POST['nombre'])){
    $update->nombre = $_POST['nombre'];
    echo json_encode($update->readOne());
}else{
    echo json_encode($update->read());
}


/*$key = json_encode(array("horarios"=>1000004,"publicaciones"=>1000001));
echo $key;*/

//echo json_encode(array("error"=>true,"mensaje"=>"¡No vino ningun nombre de llave!"));



/*PASSWORDS

horarios (021195cd) : $2y$10$bQZ3NG9bK6LMu/G4mpLi5ubZSAak9SdGtWOaybjaUFJtS0WQ.rZGy
publicaciones (36870302): $2y$10$QzR169/g60MBzCLdKU9l1.bq4C/dL09FbA8oMctmFfEG7mM2dN3zG
precios (36870301): $2y$10$TBC72tUxcoLHcRiDfekpF.LB5y.yZ2.nGA9ZLSYs5jeJCl2XGzdMC

*/
?>


