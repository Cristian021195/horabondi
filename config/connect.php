<?php
abstract class DbModel{
    private static $db_host = 'localhost';
    private static $db_user = '';
    private static $db_pass = '';
    private static $db_charset = 'utf8';
    private static $db_name = '';
    protected $connect;
    protected $query;
    protected $rows = array();
    protected $num_rows;
    protected $result;
    
    abstract protected function create();//si heredamos, tenemos que implementar.
    abstract protected function read();
    abstract protected function readOne();
    abstract protected function readRange($start, $end);
    //abstract protected function readLike($nombre);
    abstract protected function update();
    abstract protected function delete();

    protected function db_open(){//la coneccion solo la hace le modelo.
        $this->connect = new mysqli(self::$db_host, self::$db_user,self::$db_pass, self::$db_name);
        $this->connect->set_charset(self::$db_charset);
    }
    protected function db_close(){
        $this->connect->close();
    }
    protected function set_query(){//AQUI PODEMOS MANDAR EL ULTIMO ID. CHECKEAR
        $this->db_open();
        if($this->connect->query($this->query)){
            return true;
        }else{
            return false;
        }
        $this->db_close();
    }
    protected function get_query(){
        $this->db_open();
        $this->result = $this->connect->query($this->query);
        //var_dump($this->result);
        while($this->rows[] = $this->result->fetch_assoc());
        $this->result->close();
        
        $this->db_close();

        return array_pop($this->rows);
    }
    protected function get_query_arr(){
        $this->db_open();
        $this->result = $this->connect->query($this->query);
        while($this->rows[] = $this->result->fetch_array());
        $this->result->close();        
        $this->db_close();
        return array_pop($this->rows);
    }
}
?>