<?php
/*if (session_status() == PHP_SESSION_NONE) {
    session_start();
}*/
require_once('../../config/connect.php');

class Push extends DbModel{
    
    public $id;
    public $endpoint;
    public $auth;
    public $p256dh;

    public function __destruct(){
        //unset(StatusModel);
    }

    public function create(){
        $this->db_open();
        $_endpoint = mysqli_real_escape_string($this->connect, $this->endpoint);
        $_auth = mysqli_real_escape_string($this->connect, $this->auth);
        $_p256dh = mysqli_real_escape_string($this->connect, $this->p256dh);
        $this->db_close();
        $this->query = "INSERT INTO suscribers (endpoint, auth, p256dh) VALUES ('$_endpoint', '$_auth', '$_p256dh');";
        if($this->set_query()){
            return array("error"=>false, "id_push"=>$this->connect->insert_id);
        }else{
            return array("error"=>true);
        }
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
        $this->db_open();
        $_id = mysqli_real_escape_string($this->connect, $this->id);
        $this->db_close();
        $this->query = "DELETE FROM suscribers WHERE id = '$_id';";
        if($this->set_query()){
            return array("error"=>false);
        }else{
            return array("error"=>true);
        }
    }
    
}

?>