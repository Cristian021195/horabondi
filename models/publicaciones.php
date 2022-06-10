<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
require_once('../../config/connect.php');

class PublicacionesModel extends DbModel{
    public $id;
    public $publicacion;
    public $empresa;
    public $llave;
    public $nombre_llave;

    public function __destruct(){
        //unset(StatusModel);
    }

    public function create(){
        $this->db_open();
        $_publicacion = mysqli_real_escape_string($this->connect, $this->publicacion);
        $_empresa = mysqli_real_escape_string($this->connect, $this->empresa);
        $this->db_close();
        $this->query = "INSERT INTO publicaciones (publicacion, empresa) VALUES ('$_publicacion', '$_empresa');";
            
        if($this->set_query()){
            //return array("error"=>false, "id"=>$this->connect->insert_id, "key_publicaciones"=>$this->llave );
            return $this->connect->insert_id;
        }else{
            return array("error"=>true);
        }
    }
    public function update(){
        $this->db_open();
        $_id = mysqli_real_escape_string($this->connect, $this->id);
        $_publicacion = mysqli_real_escape_string($this->connect, $this->publicacion);
        $_empresa = mysqli_real_escape_string($this->connect, $this->empresa);
        $this->db_close();

        $this->query = "UPDATE publicaciones SET publicacion = '$_publicacion', empresa='$_empresa' WHERE id = '$_id';";
            
        if($this->set_query()){
            return array("error"=>false, "id"=>$_id, "publicacion"=>$_publicacion, "empresa"=>$_empresa, "key_publicaciones"=>$this->llave, );
        }else{
            return array("error"=>true);
        }
    }
    public function read(){
        if(empty($this->empresa)){
            $this->query = "SELECT id, publicacion, empresa, fecha FROM publicaciones ORDER BY fecha DESC LIMIT 10;";
        }else{
            $this->query = "SELECT id, publicacion, empresa, fecha FROM publicaciones WHERE empresa = '$this->empresa' ORDER BY fecha DESC;";
        }        
        $this->get_query();
        $this->num_rows = count($this->rows);
        return $this->rows;
    }
    public function readOne(){
        $this->db_open();
        $_id = mysqli_real_escape_string($this->connect, $this->id);
        $this->db_close();

        $this->query = "SELECT id, publicacion, empresa, fecha FROM publicaciones WHERE id='$_id';";
        $this->get_query();
        $this->num_rows = count($this->rows);
        return $this->rows;
    }
    public function readRange($start, $end){//
        return array("error"=>true, "mensaje"=>"Funcion no definida para esta seccion");
    }
    public function delete(){
        $this->db_open();
        $_id = mysqli_real_escape_string($this->connect, $this->id);
        $this->db_close();

        $this->query = "DELETE FROM publicaciones WHERE id = '$this->id';";
        if($this->set_query()){
            return array("error"=>false);
        }else{
            return array("error"=>true, "mesaje"=>"No se pudo eliminar la publicacion");
        }
    }
    public function cambiarLlave(){        
        $this->query = "UPDATE llaves SET llave = '$this->llave' WHERE nombre = '$this->nombre_llave';";
        if($this->set_query()){
            return array("error"=>false, "id_nota"=>$this->connect->insert_id);
        }else{
            return array("error"=>true);
        }
    }
    
}

?>