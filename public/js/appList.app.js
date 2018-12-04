var listOfApps = new Vue({
  el: '#appsMain',
  data: {
    appList:[
      {
        appNum:1,
        appName: "Name of first App",
        appDescription: "Description of the App"
      },
      {
        appNum:2,
        appName: "Name of second App",
        appDescription: "Description of the App"
      },
      {
        appNum:3,
        appName: "Name of third App",
        appDescription: "Description of the App"
      },
      {
        appNum:4,
        appName: "Name of fourth App",
        appDescription: "Description of the App"
      },
      {
        appNum:5,
        appName: "Name of fifth App",
        appDescription: "Description of the App"
      },
      {
        appNum:6,
        appName: "Name of sixth App",
        appDescription: "Description of the App"
      }
    ]
},


methods: {
gotoWebsiteNext() {
   window.location = 'salesDashboard.html';
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
