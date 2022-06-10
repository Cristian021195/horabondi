<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
require_once('../config/connect.php');

class UpdateModel extends DbModel{
    
    public $nombre;

    public function __destruct(){
        //unset(StatusModel);
    }

    public function create(){
    }
    public function read(){
        $this->query = "SELECT nombre, llave FROM llaves;";
        $this->get_query();
        return $this->rows;
    }
    public function readOne(){
        $this->query = "SELECT nombre, llave FROM llaves WHERE llave = '$nombre'";
        $this->get_query();
        return $this->rows;
    }
    public function readRange($start, $end){//
    }
    public function update(){
    }
    public function delete(){
    }
    
}

?>