var serviceInformation = new Vue({
  el: '#serviceMain',
  data: {
    singleProduct:{
        productNum:0,
        productName: "",
        productID: "",
        modelNumber: "",
        productStatus: "",
        adjustedLifeExpectancy: "",
        orderNumber: "",
        orderDate: "",
        deliveryDate: "",
        likelihoodOfFailureInFuture:"",
        lastServiceDate: "",
        causeOfLastFailure: "",
        descriptionOfResolutionForLastFailure:"",
        downtimeInHoursForLastFailure: "",
        expectedDowntimeCurrent: "",
        criticalityOfIssue: 0
    },
    productList:[
      // {
      //   productNum:1,
      //   productName: "X15",
      //   productID: "#1556778",
      //   modelNumber: "Stage V",
      //   productStatus: "In Operation",
      //   adjustedLifeExpectancy: "520",
      //   orderNumber: "X15V9800554",
      //   orderDate: "2017-09-11",
      //   deliveryDate: "2017-10-12",
      //   likelihoodOfFailureInFuture:"10%",
      //   lastServiceDate: "2018-08-08",
      //   causeOfLastFailure: "Increased temperature affecting performance",
      //   descriptionOfResolutionForLastFailure:"Code fix pushed to deploy coolant",
      //   downtimeInHoursForLastFailure: "1",
      //   expectedDowntimeCurrent: "0",
      //   criticalityOfIssue: 0
      // },
      // {
      //   productNum:2,
      //   productName: "X15",
      //   productID: "#1886778",
      //   modelNumber: "Stage V",
      //   productStatus: "In Operation",
      //   adjustedLifeExpectancy: "532",
      //   orderNumber: "X15V9800554",
      //   orderDate: "2017-09-11",
      //   deliveryDate: "2017-10-12",
      //   likelihoodOfFailureInFuture:"20%",
      //   lastServiceDate: "2018-08-08",
      //   causeOfLastFailure: "Hydrocyclone failed in rotation",
      //   descriptionOfResolutionForLastFailure:"Code fix was pushed",
      //   downtimeInHoursForLastFailure: "2",
      //   expectedDowntimeCurrent: "0",
      //   criticalityOfIssue: 1
      // },
      // {
      //   productNum:3,
      //   productName: "X12",
      //   productID: "#7509778",
      //   modelNumber: "Stage V",
      //   productStatus: "In Operation",
      //   adjustedLifeExpectancy: "256",
      //   orderNumber: "X12V7770550",
      //   orderDate: "2016-07-01",
      //   deliveryDate: "2016-08-08",
      //   likelihoodOfFailureInFuture:"50%",
      //   lastServiceDate: "2017-11-11",
      //   causeOfLastFailure: "Hydrocyclone broke down",
      //   descriptionOfResolutionForLastFailure:"Part was replaced by Eric Was",
      //   downtimeInHoursForLastFailure: "2",
      //   expectedDowntimeCurrent: "0.25",
      //   criticalityOfIssue: 2
      // },
      // {
      //   productNum:4,
      //   productName: "B4.5",
      //   productID: "#9552208",
      //   modelNumber: "Stage V",
      //   productStatus: "In Service",
      //   adjustedLifeExpectancy: "149",
      //   orderNumber: "B45V5811552",
      //   orderDate: "2015-07-01",
      //   deliveryDate: "2015-08-08",
      //   likelihoodOfFailureInFuture:"70%",
      //   lastServiceDate: "2017-10-08",
      //   causeOfLastFailure: "High heat rate and heavy loads of unserviced engine causing choked motor pump",
      //   descriptionOfResolutionForLastFailure:"Replacement of inner motors pumps and oiling of engine",
      //   downtimeInHoursForLastFailure: "2",
      //   expectedDowntimeCurrent: "2",
      //   criticalityOfIssue: 3
      // }
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
  },
  disableRedButton(){
    // $("#alertRed").hide().show('medium');
    $('#buttonRed').hide();
  },
  disableYellowButton(){
    // $("#alertRed").hide().show('medium');
    $('#buttonYellow').hide();
  },
  disableGreenButton(){
    // $("#alertRed").hide().show('medium');
    $('#buttonGreen').hide();
  },
  getProductInformationFromId(productNum){
    fetch('api/productList.php?productNum='+productNum)
    .then(response => response.json())
    .then(json => {
        serviceInformation.singleProduct = json
    })
    .catch(err => {
        console.log('Client Notes fetch error: ');
        console.log(err);
    })
  }        

},


  created (){

    // const url = new URL(window.location.href);
    // const clientId = url.searchParams.get('clientId');
    // console.log('Client Id: '+ clientId);
    // this.site.clientId = clientId;
    //
    fetch('api/productList.php')
    .then( response => response.json() )
    .then( json => {serviceInformation.productList = json} )
    .catch( err => {
      console.error('SITE FETCH ERROR:');
      console.error(err);
    })
  }
})
