<?php
require('../../models/horarios.php');

$tablas_vistas = [
'vista-exp-38-hab-ns',
'vista-exp-38-hab-sn',
'vista-exp-301-hab-ns',
'vista-exp-301-hab-sn',
'vista-exp-38-sab-ns',
'vista-exp-38-sab-sn',
'vista-exp-301-sab-ns',
'vista-exp-301-sab-sn',
'vista-exp-38-dom-ns',
'vista-exp-38-dom-sn',
'vista-exp-301-dom-ns',
'vista-exp-301-dom-sn',
'vista-tes-38-hab-ns',
'vista-tes-38-hab-sn',
'vista-tes-38-dom-ns',
'vista-tes-38-dom-sn',
'vista-gut-329-dom-eo',
'vista-gut-329-dom-oe'
];

$horarios_arr = [];

foreach($tablas_vistas as &$view){
    $horarios = new HorariosModel();
    $horarios->tabla_vista = $view;
    array_push($horarios_arr, $horarios->read());
}
array_unshift($horarios_arr, $tablas_vistas);
echo json_encode($horarios_arr);

?>