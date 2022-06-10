<?PHP
require('actual.php');

function sendMessage($mensaje, $empresa, $id_publicacion) {
    $content = array(
        "en" => $mensaje
    );
    /*$hashes_array = array();
    array_push($hashes_array, array(
        "id" => "like-button",
        "text" => "Like",
        "icon" => "http://i.imgur.com/N8SN8ZS.png",
        "url" => "http://localhost:5000/".$empresa."/"."publicaciones/".$id_publicacion
    ));*/

    $fields = array(
        'app_id' => "9f895016-5666-4216-a052-13abc5bb0b18",
        'included_segments' => array(
            'All'
        ),
        'data' => array(
            "foo" => "bar"
        ),
        "chrome_web_badge"=>"https://res.cloudinary.com/dzos2872u/image/upload/v1639182671/102px-badge_utm907.png",
        'contents' => $content,
        //'web_buttons' => $hashes_array
        'url'=>getBaseUrl()."/".$empresa."/"."publicaciones/".$id_publicacion
    );
    
    $fields = json_encode($fields);
    //print("\nJSON sent:\n");
    //print($fields);
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://onesignal.com/api/v1/notifications");
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json;  charset=utf-8',
        'Authorization: Basic ODUyNDExNjQtY2JhNS00NWZkLTgyMzEtYWQyNTBhOWFiODA2'
    ));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_HEADER, FALSE);
    curl_setopt($ch, CURLOPT_POST, TRUE);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    return $response;
}

?>