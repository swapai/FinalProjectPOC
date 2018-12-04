var listOfClients = new Vue({
  el: '#clientMain',
  data: {
    clientList:[
      {
        clientNum:1,
        clientName: "Name of first Client",
        clientID: "########",
        contactName: "John Does",
        contactEmail: "mail@mail.com",
        clientAddress: "Location Address of Client"
      },
      {
        clientNum:2,
        clientName: "Name of Second Client",
        clientID: "########",
        contactName: "John Does",
        contactEmail: "mail@mail.com",
        clientAddress: "Location Address of Client"
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
    if(clientNum ==1){
      window.location = 'salesDashboard.html';
    }
    if(clientNum ==2){
      window.location = 'serviceDashboard.html';
    }
  }
},

  created (){

    // const url = new URL(window.location.href);
    // const clientId = url.searchParams.get('clientId');
    // console.log('Client Id: '+ clientId);
    // this.site.clientId = clientId;
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
