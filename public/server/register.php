<?php

require_once "connect.php";

$email = $_POST['email'];
$name = $_POST['name'];
$lastname = $_POST['lastname'];
$movil = $_POST['phone'];
$prefijo = $_POST['phone_code'];
$password = $_POST['password'];
$data_joined = date('Y-m-d');
$encrypt = hash_pbkdf2("sha256", $password, "inverbet", 1000, 0);


$query = "INSERT INTO public.\"inverbetApp_user\" (email, username,first_name, last_name, movil, prefijo, password, is_active,is_staff,is_superuser,date_joined)
VALUES ('$email', '$name','$name', '$lastname', '$movil', '$prefijo', '$encrypt', 'false', 'false', 'false', '$data_joined') RETURNING *;";
$response = pg_query($connect, $query);

if ($response) {
    $data = pg_fetch_assoc($response);
    unset($data['password']);

    echo json_encode($data);
} else {
    echo json_encode("Error al registrar usuario");
    exit();
}