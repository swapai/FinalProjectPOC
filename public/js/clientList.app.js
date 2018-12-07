var listOfClients = new Vue({
  el: '#clientMain',
  data: {
    appNumberNotifiction:0,
    clientList:[
      // {
      //   clientNum:1,
      //   clientName: "Hitachi Construction Machinery - North America",
      //   clientID: "#AXBBB99",
      //   contactName: "William Joe",
      //   contactEmail: "wijoe@hitachicon.com",
      //   clientAddress: "1000 Deere Hitachi Road, Kernersville, NC 27285"
      // },
      // {
      //   clientNum:2,
      //   clientName: "Ram Trucks",
      //   clientID: "#A78BB99",
      //   contactName: "Cathy Bing",
      //   contactEmail: "cabing@ramtrucks.com",
      //   clientAddress: "2200 S Walnut St, Bloomington, IN 47401"
      // },
      // {
      //   clientNum:3,
      //   clientName: "Yale Pacific",
      //   clientID: "#H73BJ21",
      //   contactName: "Gina Gonzalez",
      //   contactEmail: "gina@yalep.com",
      //   clientAddress: "5200 Greenville Blvd NE,Greenville, NC 27834"
      // },
      // {
      //   clientNum:4,
      //   clientName: "Volvo Construction Equipment",
      //   clientID: "#K43AJ00",
      //   contactName: "George Shaw",
      //   contactEmail: "shawgeorge@volvo.com",
      //   clientAddress: "312 Volvo Way, Shippensburg, PA 17257"
      // },
      // {
      //   clientNum:5,
      //   clientName: "Freightliner",
      //   clientID: "#M22AH03",
      //   contactName: "Hami Smith",
      //   contactEmail: "hami.smith@freightliner.com",
      //   clientAddress: "3830 W Willoughby Dr, Edinburgh, IN 46124"
      // }
    ]
},


methods: {
  gotoWebsiteNext(clientNum) {
    if(this.appNumberNotifiction ==1){
      window.location = 'salesDashboard.html';
    }
    if(this.appNumberNotifiction ==2){
      window.location = 'serviceDashboard.html';
    }
  }
},

  created (){

    const url = new URL(window.location.href);
    const appNumber = url.searchParams.get('appNumber');
    console.log('App number: '+ appNumber);
    this.appNumberNotifiction = appNumber;

    fetch('api/clientList.php')
    .then( response => response.json() )
    .then( json => {listOfClients.clientList = json} )
    .catch( err => {
      console.error('SITE FETCH ERROR:');
      console.error(err);
    })
  }
})
