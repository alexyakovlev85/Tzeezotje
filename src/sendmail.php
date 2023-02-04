<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

$name = $_POST['name'];
$email = $_POST['email'];


$mail = new PHPMailer(true);


$mail->isSMTP();
$mail->Host       = 'smtp.gmail.com';
$mail->SMTPAuth   = true;
$mail->Username   = '';
$mail->Password   = '';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
$mail->Port       = 465;

$mail->setFrom($email);
$mail->addAddress('');

$mail->isHTML(true);
$mail->Subject = 'Reserve a table';
$mail->Body    = "
    <h2>Новое письмо</h2>
    <b>Имя:</b> $name<br>
    <b>Почта:</b> $email<br><br>
    ";

if ($mail->send()) {
    $message = "success";
} else {
    $message = "error";
}

$response = ['message' => $message];

header("Content-type: application/json");
echo json_encode($response);
