var listOfApps = new Vue({
  el: '#appsMain',
  data: {
    appList:[
      {
        appName: "Name of first App",
        appDescription: "Description of the App"
      },
      {
        appName: "Name of second App",
        appDescription: "Description of the App"
      }
    ]
},


methods: {
gotoWebsiteNext() {
   window.location = 'salesDashboard.html' + sid;
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
