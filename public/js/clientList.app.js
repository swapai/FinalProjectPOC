var listOfClients = new Vue({
  el: '#clientMain',
  data: {
    appNumberNotifiction:0,
    clientList:[
      {
        clientNum:1,
        clientName: "Hitachi Construction Machinery - North America",
        clientID: "#AXBBB99",
        contactName: "William Joe",
        contactEmail: "wijoe@hitachicon.com",
        clientAddress: "1000 Deere Hitachi Road, Kernersville NC 27285, U.S.A"
      },
      {
        clientNum:2,
        clientName: "Ram Trucks",
        clientID: "#A78BB99",
        contactName: "Cathy Bing",
        contactEmail: "cabing@ramtrucks.com",
        clientAddress: "2200 S Walnut St, Bloomington, IN 47401"
      },
      {
        clientNum:3,
        clientName: "Name of Third Client",
        clientID: "########",
        contactName: "John Does",
        contactEmail: "mail@mail.com",
        clientAddress: "Location Address of Client"
      },
      {
        clientNum:4,
        clientName: "Name of fourth Client",
        clientID: "########",
        contactName: "John Does",
        contactEmail: "mail@mail.com",
        clientAddress: "Location Address of Client"
      },
      {
        clientNum:5,
        clientName: "Name of fifth Client",
        clientID: "########",
        contactName: "John Does",
        contactEmail: "mail@mail.com",
        clientAddress: "Location Address of Client"
      },
      {
        clientNum:6,
        clientName: "Name of sixth Client",
        clientID: "########",
        contactName: "John Does",
        contactEmail: "mail@mail.com",
        clientAddress: "Location Address of Client"
      }
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
    //
    // fetch('api/site.php?clientId='+clientId)
    // .then( response => response.json() )
    // .then( json => {sitesApp.siteList = json} )
    // .catch( err => {
    //   console.error('SITE FETCH ERROR:');
    //   console.error(err);
    // })
  }
})
