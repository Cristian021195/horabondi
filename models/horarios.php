<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
require_once('../../config/connect.php');

class HorariosModel extends DbModel{
    
    public $tabla_vista;

    public function __destruct(){
        //unset(StatusModel);
    }

    public function create(){
    }
    public function read(){
        $this->query = "SELECT * FROM `$this->tabla_vista`";
        $this->get_query();
        return $this->rows;
    }
    public function readOne(){
    }
    public function readRange($start, $end){//
    }
    public function update(){
    }
    public function delete(){
    }
    
}

?>