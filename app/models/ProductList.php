<?php

class ProductList
{
  public $productNum;
  public $productName;
  public $productID;
  public $modelNumber;
  public $productStatus;
  public $adjustedLifeExpectancy;
  public $orderNumber;
  public $orderDate;
  public $deliveryDate;
  public $likelihoodOfFailureInFuture;
  public $lastServiceDate;
  public $causeOfLastFailure;
  public $descriptionOfResolutionForLastFailure;
  public $downtimeInHoursForLastFailure;
  public $expectedDowntimeCurrent;
  public $criticalityOfIssue;

  public function __construct($row) {
    $this->productNum = isset($row['productNum']) ? intval($row['productNum']) : null;
    $this->productName = $row['productName'];
    $this->productID = $row['productID'];
    $this->modelNumber = $row['modelNumber'];
    $this->productStatus = $row['productStatus'];
    $this->adjustedLifeExpectancy = $row['adjustedLifeExpectancy'];
    $this->orderNumber = $row['orderNumber'];
    $this->orderDate = $row['orderDate'];
    $this->deliveryDate = $row['deliveryDate'];
    $this->likelihoodOfFailureInFuture = $row['likelihoodOfFailureInFuture'];
    $this->lastServiceDate = $row['lastServiceDate'];
    $this->causeOfLastFailure = $row['causeOfLastFailure'];
    $this->descriptionOfResolutionForLastFailure = $row['descriptionOfResolutionForLastFailure'];
    $this->downtimeInHoursForLastFailure = $row['downtimeInHoursForLastFailure'];
    $this->expectedDowntimeCurrent = $row['expectedDowntimeCurrent'];
    $this->criticalityOfIssue = intval($row['criticalityOfIssue']);
    }

    public static function fetchAll() {
      // 1. Connect to the database
      $db = new PDO(DB_SERVER, DB_USER, DB_PW);

      // 2. Prepare the query
      $sql = 'SELECT * FROM productList';
      $statement = $db->prepare($sql);

      // 3. Run the query
      $success = $statement->execute();

      // 4. Handle the results
      $arr = [];
      while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
        $theProduct =  new ProductList($row);
        array_push($arr, $theProduct);
      }
      return $arr;
      }
  }
