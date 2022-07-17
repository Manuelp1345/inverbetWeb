<?php

require_once "connect.php";

$email = $_POST['email'];
$password = $_POST['password'];

$response = pg_query($connect, 'SELECT * FROM public."inverbetApp_user" WHERE email = ' . "'$email'");
$data = pg_fetch_assoc($response);

if (!$data) {
    echo "Usuario y/o contraseña incorrectos";
    exit();
}


if ($data['password'] != $password) {
    echo "Usuario y/o contraseña incorrectos";
    exit();
}

echo "Login correcto";