<?php 
$name = $_POST["name"];
$mail = $_POST["mail"];
$phone = $_POST["phone"];

$to  = "buyar_igor@yahoo.com";

$subject = "Вопрос - Edu.pro"; 

$message = ' <h1>Вопрос пользователя:</h1> </br> <p>Имя:>'.$name.'<span> </p> </br> <p>Телефон:'.$phone.'<span> </p> </br> <p>Почта:>'.$mail.'<span> </p>';

$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: От кого письмо <Edu@pro.tech>\r\n"; 

mail($to, $subject, $message, $headers); 
?>