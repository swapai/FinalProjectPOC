<?php
require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  exit;
}

$clientList = ClientList::fetchAll();
$json = json_encode($clientList, JSON_PRETTY_PRINT);
// 3. Print
header('Content-Type: application/json');
echo $json;
