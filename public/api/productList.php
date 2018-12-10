<?php
require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  exit;
}
$productNum = intval($_GET['productNum'] ?? 0);
if ($productNum > 0) {
  $productList = ProductList::fetchByProductNum($productNum);
}else{
  $productList = ProductList::fetchAll();
}
$json = json_encode($productList, JSON_PRETTY_PRINT);
// 3. Print
header('Content-Type: application/json');
echo $json;
