var listOfApps = new Vue({
  el: '#appsMain',
  data: {
    userId:"",
     appNumberNotifiction:0,
    appList:[
      {
        appNum:1,
        appName: "Sales OTrack",
        appDescription: "The salesman's companion to identify checkpoints and determine order flow"
      },
      {
        appNum:2,
        appName: "Smart Diagnostics",
        appDescription: "Make smarter decisions to improve engine operational efficiency "
      },
      {
        appNum:3,
        appName: "JIRA",
        appDescription: "Plan, track, and manage agile and software development projects"
      },
      {
        appNum:4,
        appName: "Splunk",
        appDescription: "Real-time visibility to improve application delivery"
      },
      {
        appNum:5,
        appName: "AWS CodeDeploy",
        appDescription: "The fully managed deployment service that automates software deployments"
      },
      {
        appNum:6,
        appName: "Selenium",
        appDescription: "The portable software-testing framework for web applications"
      }
    ]
},


methods: {
  gotoWebsiteNext(appNum) {
    if(appNum == 1 || appNum == 2){
      window.location = 'clientList.html'+'?appNumber='+this.appNumberNotifiction;
    }      
  }
},

  created (){

    const url = new URL(window.location.href);
    const userId = url.searchParams.get('user');
    console.log('User Id: '+ userId);
    this.userId = userId;
    if(this.userId == "sales" || this.userId == "service"){
      if(this.userId == "sales"){
        this.appNumberNotifiction = 1;
      }else{
        this.appNumberNotifiction = 2;
      }
    }else{
      this.appNumberNotifiction = 0;
    }
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
