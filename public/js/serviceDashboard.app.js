var salesInformation = new Vue({
  el: '#serviceMain',
  data: {
    productList:[
      {
        productNum:1,
        productName: "X15",
        productID: "#1556778",
        modelNumber: "Stage V",
        productStatus: "In Operation",
        adjustedLifeExpectancy: "80%",
        likelihoodOfFailureInFuture:"25%",
        lastServiceDate: "2010-08-11",
        causeOfLastFailure: "Increased temperature affecting performance",
        descriptionOfResolutionForLastFailure:"Code fix pushed to deploy coolant",
        downtimeInHoursForLastFailure: "1",
        expectedDowntimeCurrent: "0",
        criticalityOfIssue: 0
      },
      {
        productNum:2,
        productName: "X15",
        productID: "#1886778",
        modelNumber: "Stage V",
        productStatus: "In Service",
        adjustedLifeExpectancy: "80%",
        likelihoodOfFailureInFuture:"50%",
        lastServiceDate: "2010-08-11",
        causeOfLastFailure: "Hydrocyclone failed in rotation",
        descriptionOfResolutionForLastFailure:"Code fix was pushed",
        downtimeInHoursForLastFailure: "2",
        expectedDowntimeCurrent: "0",
        criticalityOfIssue: 1
      },
      {
        productNum:3,
        productName: "X12",
        productID: "#7509778",
        modelNumber: "Stage V",
        productStatus: "In Operation",
        adjustedLifeExpectancy: "70%",
        likelihoodOfFailureInFuture:"55%",
        lastServiceDate: "2010-08-11",
        causeOfLastFailure: "Hydrocyclone broke",
        descriptionOfResolutionForLastFailure:"Part was replaced",
        downtimeInHoursForLastFailure: "2",
        expectedDowntimeCurrent: "0.25",
        criticalityOfIssue: 2
      },
      {
        productNum:4,
        productName: "B4.5",
        productID: "#9552208",
        modelNumber: "Stage V",
        productStatus: "In Service",
        adjustedLifeExpectancy: "80%",
        likelihoodOfFailureInFuture:"50%",
        lastServiceDate: "2010-08-11",
        causeOfLastFailure: "High heat rate and heavy loads of unserviced engine causing choked motor pump",
        descriptionOfResolutionForLastFailure:"Replacement of inner motors pumps and oiling of engine",
        downtimeInHoursForLastFailure: "2",
        expectedDowntimeCurrent: "2",
        criticalityOfIssue: 3
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
  },
  gotoWebsiteNextSensors(){
      window.location = 'dashboard.html';
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
