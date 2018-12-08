var kpiApp = new Vue({
  el: '#kpiMain',
  data: {
    kpi: {
      sensorDeployedId: 0,
      dataCollectiveDate: '',
      output : '',
      heatRate : '',
      compressorEfficiency : '',
      availability: '',
      reliability: '',
      firedHours: '',
      trips: '',
      starts: ''
    },
  kpiList: []
},methods:{
  fetchSensorTimeSeriesData (sensorDeployedId) {
    fetch('api/sensortimeseries.php?sensorDeployedId='+sensorDeployedId)
    .then( response => response.json() )
    .then( json => {
      kpiApp.kpiList = json;
      this.buildOutputChart();
      this.buildHeatRateChart();
      this.buildCompressorEfficiencyChart();
      this.formatSensorStats();
      this.buildFiredHoursChart();
      this.buildTripsAndStartsChart();
      this.buildAvailabilityAndReliabilityChart();
    } )
    .catch( err => {
      console.error('SITE FETCH ERROR:');
      console.error(err);
    })

   },
formatSensorStats() {

},
buildOutputChart(){
  new Chartist.Line('.ct-chart', {
    labels: this.kpiList.map( item => [Date.parse(item.dataCollectiveDate)] ),
    series: [
    this.kpiList.map( item => [Number(item.firedHours)] ),
    ]
  }, {
    low: 0,
    showArea: true
  });
},
buildAvailabilityAndReliabilityChart(){

},
buildHeatRateChart(){

},
buildTripsAndStartsChart(){

},
buildCompressorEfficiencyChart(){

},
buildFiredHoursChart(){

}

},

  created (){

    // const url = new URL(window.location.href);
    // const sensorDeployedId = url.searchParams.get('sensorDeployedId');
    // console.log('SensorDeployed Id: '+ sensorDeployedId);
    this.kpi.sensorDeployedId = 1;

  this.fetchSensorTimeSeriesData (1);
  }
})
