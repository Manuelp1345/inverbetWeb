<?php

const DB_HOST = 'localhost';
const DB_USER = 'postgres';
const DB_PASS = '2719';
const DB_NAME = 'inverbet';

$connect = pg_connect("host=" . DB_HOST . " dbname=" . DB_NAME . " user=" . DB_USER . " password=" . DB_PASS);

if (!$connect) {
    echo "can`t connect to database";
    exit();
}