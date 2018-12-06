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
      },
      {
        productNum:2,
        productName: "X15",
        productID: "#1886778",
        modelNumber: "Stage V",
        productStatus: "In Service",
      },
      {
        productNum:3,
        productName: "X12",
        productID: "#7509778",
        modelNumber: "Stage V",
        productStatus: "In Operation",
      },
      {
        productNum:4,
        productName: "B4.5",
        productID: "#9552208",
        modelNumber: "Stage V",
        productStatus: "In Service",
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
