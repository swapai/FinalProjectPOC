var salesInformation = new Vue({
  el: '#salesMain',
  data: {
    productList:[
      {
        productNum:1,
        productName: "X15",
        productID: "#1556778",
        modelNumber: "Stage V",
        productStatus: "In Operation",
        adjustedLifeExpectancy: "520",
        orderNumber: "X15V9800554",
        orderDate: "2017-09-11",
        deliveryDate: "2017-10-12",
      },
      {
        productNum:2,
        productName: "X15",
        productID: "#1886778",
        modelNumber: "Stage V",
        productStatus: "In Operation",
        adjustedLifeExpectancy: "532",
        orderNumber: "X15V9800554",
        orderDate: "2017-09-11",
        deliveryDate: "2017-10-12",
      },
      {
        productNum:3,
        productName: "X12",
        productID: "#7509778",
        modelNumber: "Stage V",
        productStatus: "In Operation",
        adjustedLifeExpectancy: "256",
        orderNumber: "X12V7770550",
        orderDate: "2016-07-01",
        deliveryDate: "2016-08-08",
      },
      {
        productNum:4,
        productName: "B4.5",
        productID: "#9552208",
        modelNumber: "Stage V",
        productStatus: "In Service",
        adjustedLifeExpectancy: "149",
        orderNumber: "B45V5811552",
        orderDate: "2015-07-01",
        deliveryDate: "2015-08-08",
      }
    ]
},


methods: {
  gotoWebsiteNext(num) {
    if(num ==1){
      url = 'currentOrderDetails.html';
    }
    if(num ==2){
      url = 'pastOrder.html';
    }
    newwindow=window.open(url,'Order Details','height=300,width=300');
       if (window.focus) {newwindow.focus()}
       return false;
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
