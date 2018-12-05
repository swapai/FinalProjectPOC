var salesInformation = new Vue({
  el: '#salesMain',
  data: {
    productList:[
      {
        productNum:1,
        productName: "Name of first Client",
        productID: "########",
        modelNumber: "John Does",
        productStatus: "In Operation",
        adjustedLifeExpectancy: "80%",
        likelihoodOfFailureInFuture:"35%",
        lastServiceDate: "2010-08-11",
        causeOfLastFailure: "Something happened",
        descriptionOfResolutionForLastFailure:"Code fix was pushed",
        downtimeInHoursForLastFailure: "2",
        expectedDowntimeCurrent: "0"
      },
      {
        productNum:2,
        productName: "Name of first Client",
        productID: "########",
        modelNumber: "John Does",
        productStatus: "In Service",
        adjustedLifeExpectancy: "80%",
        likelihoodOfFailureInFuture:"50%",
        lastServiceDate: "2010-08-11",
        causeOfLastFailure: "Something happened",
        descriptionOfResolutionForLastFailure:"Code fix was pushed",
        downtimeInHoursForLastFailure: "2",
        expectedDowntimeCurrent: "0.15"
      },
      {
        productNum:3,
        productName: "Name of first Client",
        productID: "########",
        modelNumber: "John Does",
        productStatus: "In Operation",
        adjustedLifeExpectancy: "80%",
        likelihoodOfFailureInFuture:"35%",
        lastServiceDate: "2010-08-11",
        causeOfLastFailure: "Something happened",
        descriptionOfResolutionForLastFailure:"Code fix was pushed",
        downtimeInHoursForLastFailure: "2",
        expectedDowntimeCurrent: "0"
      },
      {
        productNum:4,
        productName: "Name of first Client",
        productID: "########",
        modelNumber: "John Does",
        productStatus: "In Service",
        adjustedLifeExpectancy: "80%",
        likelihoodOfFailureInFuture:"50%",
        lastServiceDate: "2010-08-11",
        causeOfLastFailure: "Something happened",
        descriptionOfResolutionForLastFailure:"Code fix was pushed",
        downtimeInHoursForLastFailure: "2",
        expectedDowntimeCurrent: "0.15"
      }
    ]
},


methods: {
  gotoWebsiteNext(productNum) {
    if(productNum ==1){
      window.location = 'salesDashboard.html';
    }
    if(productNum ==2){
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
