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
         this.kpiList.forEach(
           (entry, index, arr) => {
             entry.runningTotalFiredHours = entry.firedHours +
               (index == 0 ? 0 : arr[index-1].runningTotalFiredHours)
         });
},
  buildOutputChart(){
      Highcharts.chart('outputChart', {
            title: {
                text: 'Engine Power'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Power (kW)'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[1]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 0.5,
                        lineColor: '#000000',
                        fillColor: '#000000'
                    },
                    lineColor: '#000000',
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineColor: '#000000',
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            tooltip: {
                backgroundColor: {
                    linearGradient: [0, 0, 0, 60],
                    stops: [
                        [0, '#CCCCCC'],
                        [1, '#E0E0E0']
                    ]
                },
                borderWidth: 1,
                borderColor: '#888888'
            },
            series: [{
                type: 'area',
                name: 'Power',
                // Data needs [ [date, num], [date2, num2 ], ... ]
                data: this.kpiList.map( item => [Date.parse(item.dataCollectiveDate), Number(item.output)] )
            }]
        });
  },buildAvailabilityAndReliabilityChart(){
      Highcharts.chart('availabilityAndReliabilityChart', {
        chart: {
      type: 'areaspline'
  },
  title: {
      text: 'Availability and reliability'
  },
  legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 150,
      y: 100,
      floating: true,
      borderWidth: 1,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
  },
  xAxis: {
      type: 'datetime',
      plotBands: [{
          from: 4.5,
          to: 6.5,
          color: 'rgba(68, 170, 213, .2)'
      }]
  },
  yAxis: {
      title: {
          text: 'Availability and Reliability'
      }
  },
  tooltip: {
      shared: true,
      valueSuffix: ' units'
  },
  credits: {
      enabled: false
  },
  plotOptions: {
      areaspline: {
          fillOpacity: 0.5
      }
  },
  series: [{
      name: 'Availability',
      data: this.kpiList.map( item => [Date.parse(item.dataCollectiveDate), Number(item.availability)] )
  }, {
      name: 'Reliability',
      data: this.kpiList.map( item => [Date.parse(item.dataCollectiveDate), Number(item.reliability)] )
    }]
  });
  },
  buildHeatRateChart(){
    Highcharts.chart('heatRateChart', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Engine Fuel Consumption'
    },
    xAxis: {
        type: 'datetime',
    },
    yAxis: {
        title: {
            text: 'Heat Rate (kWh)'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false,
            },
            enableMouseTracking: false,
            lineColor: '#000000',
            lineWidth: 1,
        }
    },
    series: [{
      name: 'Heat Rate (kWh)',
      // Data needs [ [date, num], [date2, num2 ], ... ]
      data: this.kpiList.map( item => [Date.parse(item.dataCollectiveDate), Number(item.heatRate)] )
    }]
})
},
buildTripsAndStartsChart(){
  Highcharts.chart('tripsAndStartsChart', {

    title: {
        text: 'Trips and Starts Plot'
    },
    yAxis: {
        title: {
            text: 'Number of Trips and Starts'
        }
    },
    xAxis: {
        type: 'datetime',
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            color: 'purple',
            pointStart: 2010
        }
    },
    series: [{
      type:'line',
        name: 'Trips',
        data:  this.kpiList.map( item => [Date.parse(item.dataCollectiveDate), Number(item.trips)] )
    }, {
        type:'line',
        name: 'Starts',
        data: this.kpiList.map( item => [Date.parse(item.dataCollectiveDate), Number(item.starts)] )
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

})
},
buildCompressorEfficiencyChart(){
  Highcharts.chart('compressorEfficiencyChart', {
    title: {
        text: 'Operational Efficiency Chart'
    },
    yAxis: {
            title: {
                text: 'Operational Efficiency (%)'
            },
        },
        legend: {
            enabled: false
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: true,
                    lineColor: '#682c32',
                    lineWidth: 1,
                }
            }
        },

    series: [{
        name: 'Operational Efficiency (%)',
        // Data needs [ [date, num], [date2, num2 ], ... ]
        data: this.kpiList.map( item => [Date.parse(item.dataCollectiveDate), Number(item.compressorEfficiency)] )
    }],
    responsive: {
       rules: [{
           condition: {
               maxWidth: 500
           },
           chartOptions: {
               legend: {
                  enabled: false
               }
           }
       }]
     }
})
},
buildFiredHoursChart(){
  Highcharts.chart('firedHoursChart', {

                chart: {
                    type: 'area',
                    zoomType: 'x',
                    panning: true,
                    panKey: 'shift',
                    scrollablePlotArea: {
                        minWidth: 600
                    }
                },

                title: {
                    text: 'Number of Hours Fired Over Time'
                },

                xAxis: {
                    type: 'datetime'
                },
                yAxis: {
                    title: {
                        text: 'Running Total (Hours)'
                    }
                },
                legend: {
                    enabled: false
                },

                series: [{
                    data: this.kpiList.map( item => [Date.parse(item.dataCollectiveDate), Number(item.firedHours)] ),
                    lineColor: Highcharts.getOptions().colors[1],
                    color: Highcharts.getOptions().colors[2],
                    fillOpacity: 0.5,
                    name: 'Fired Hours',
                    marker: {
                        enabled: false
                    },
                    threshold: null
                }]

            });
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
