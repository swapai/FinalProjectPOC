var listOfProducts = new Vue({
  el: '#clientMain',
  data: {
    productList:[
      {
        productNum:1,
        productName: "Name of first Client",
        productID: "########",
        modelNumber: "John Does",
        productStatus: "In Operation",
      },
      {
        productNum:2,
        productName: "Name of first Client",
        productID: "########",
        modelNumber: "John Does",
        productStatus: "In Service",
      },
      {
        productNum:3,
        productName: "Name of first Client",
        productID: "########",
        modelNumber: "John Does",
        productStatus: "In Operation",
      },
      {
        productNum:4,
        productName: "Name of first Client",
        productID: "########",
        modelNumber: "John Does",
        productStatus: "In Service",
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
