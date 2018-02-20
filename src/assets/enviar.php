<?
//aca enviamos el formulario 
$nombre=$_POST["nombre"];
$email=$_POST["email"];
$telefono=$_POST["telefono"];
$mensaje=$_POST["mensaje"];

$headers  = 'MIME-Version: 1.0'."\r\n";
$headers .= 'Content-type: text/html; charset=utf-8'."\r\n";
$headers .= 'From:'.$email. "\r\n";
$headers .= 'Reply-to:'.$email. "\r\n";


$cuerpo="<div style='color:black,font-size:10px'>Nombre: $nombre</div>";
$cuerpo.="<div style='color:black,font-size:12px'>Email: $email</div>";
$cuerpo.="<div style='color:black,font-size:12px'>Telefono: $telefono</div>";
$cuerpo.="<div style='color:gray,font-size:10px'>Mensaje: $mensaje</div>";


mail("sedgardovillafane@gmail.com","Consulta Placas Antihumedad SECA ",$cuerpo,$headers);

echo "enviado";
?>