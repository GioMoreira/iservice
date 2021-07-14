<?php

$conexao = new PDO("mysql:host=localhost;dbname=iservice","root", "senha");


$obj = $conexao->prepare("select * from iservice.usuario where email=? and senha=?");
$email=$_GET["email"];
$senha=$_GET["senha"];
$obj->execute([$email, $senha]);


$dados = $obj->fetchAll(PDO::FETCH_ASSOC);

$resultado = json_encode($dados);

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
echo($resultado);

?>
