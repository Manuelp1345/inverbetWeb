<?php

require_once "connect.php";

$email = $_POST['email'];
$password = $_POST['password'];
$encrypt = hash_pbkdf2("sha256", $password, "inverbet", 1000, 0);


$response = pg_query($connect, 'SELECT * FROM public."inverbetApp_user" WHERE email = ' . "'$email'");
$data = pg_fetch_assoc($response);

if (!$data) {
    echo  json_encode("Usuario y/o contraseña incorrectos");
    exit();
}


if ($data['password'] != $encrypt) {
    echo json_encode("Usuario y/o contraseña incorrectos");
    exit();
}
unset($data['password']);

$data['last_login'] = date('Y-m-d H:i:s');

echo json_encode($data);

$query = "UPDATE public.\"inverbetApp_user\" SET last_login = '" . date('Y-m-d H:i:s') . "' WHERE email = '$email'";
$response = pg_query($connect, $query);