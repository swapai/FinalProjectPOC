<?php
require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  exit;
}

$productList = ProductList::fetchAll();
$json = json_encode($productList, JSON_PRETTY_PRINT);
// 3. Print
header('Content-Type: application/json');
echo $json;
