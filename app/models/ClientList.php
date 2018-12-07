<?php

class ClientList
{
  public $clientNum;
  public $clientName;
  public $clientID;
  public $contactName;
  public $contactEmail;
  public $clientAddress;


  public function __construct($row) {
    $this->clientNum = isset($row['clientNum']) ? intval($row['clientNum']) : null;
    $this->clientName = $row['clientName'];
    $this->clientID = $row['clientID'];
    $this->contactName = $row['contactName'];
    $this->contactEmail = $row['contactEmail'];
    $this->clientAddress = $row['clientAddress'];
    }

    public static function fetchAll() {
      // 1. Connect to the database
      $db = new PDO(DB_SERVER, DB_USER, DB_PW);

      // 2. Prepare the query
      $sql = 'SELECT * FROM clientList';
      $statement = $db->prepare($sql);

      // 3. Run the query
      $success = $statement->execute();

      // 4. Handle the results
      $arr = [];
      while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
        $theClient =  new ClientList($row);
        array_push($arr, $theClient);
      }
      return $arr;
      }

    // public function create() {
    //   $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    //   $sql = 'INSERT into sensorTimeSeries (sensorDeployedId, dataCollectiveDate, output, heatRate, compressorEfficiency, availability, reliability, firedHours, trips, starts)
    //         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    //   $statement = $db->prepare($sql);
    //   $success = $statement->execute([
    //         $this->sensorDeployedId,
    //         $this->dataCollectiveDate,
    //         $this->output,
    //         $this->heatRate,
    //         $this->compressorEfficiency,
    //         $this->availability,
    //         $this->reliability,
    //         $this->firedHours,
    //         $this->trips,
    //         $this->starts,
    //       ]);
    //
    //     }
    //
    //     public static function getSensorTimeSeriesBySensorDeployedId(int $sensorDeployedId) {
    //       // 1. Connect to the database
    //       $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    //       // 2. Prepare the query
    //       $sql = 'SELECT sensorDeployedId,dataCollectedDate,output,heatRate,compressorEfficiency, availability, reliability, firedHours, trips, starts FROM sensorTimeSeries WHERE sensorDeployedId = ?';
    //       $statement = $db->prepare($sql);
    //       // 3. Run the query
    //       $success = $statement->execute(
    //           [$sensorDeployedId]
    //       );
    //       // 4. Handle the results
    //       $arr = [];
    //       while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
    //         $sensorTimeSeriesItem =  new SensorTimeSeries($row);
    //         array_push($arr, $sensorTimeSeriesItem);
    //       }
    //         return $arr;
    //     }


  }
