  var config = {
    apiKey: "AIzaSyB2DZ3NIC_Lo5gqHhWTn1kX5M_LCVIZ7zY",
    authDomain: "myschnieder.firebaseapp.com",
    databaseURL: "https://myschnieder.firebaseio.com",
    projectId: "myschnieder",
    storageBucket: "myschnieder.appspot.com",
    messagingSenderId: "105921094692"
  };
  firebase.initializeApp(config);
  const firestore=firebase.firestore();


  document.getElementById('submitform').onclick=function(){
    firestore.collection('Dealer').get().then((q1)=>{
      
      var fcity=document.getElementById('city').value;
      var email=document.getElementById('email').value;
      var name=document.getElementById('name').value;
      var type=document.getElementById('type').value;
      var cont=document.getElementById('contact').value;
      var workscale=document.getElementById('Worktype').value;
      var pas=document.getElementById('pass').value;
      q1.forEach((d1)=>{
        if(d1.data().City==fcity){
            firebase.auth().createUser

/*get the dealer for the verification of the frrelancer*/

/*Proper Dealer found*/

/*upload documents */
document.getElementById('idproof').onchange=function(e){
  var file=e.target.files[0];
  var storage=firebase.storage.ref('FreelancerDocuments'+file.name);
  storage.put(file);
  storage.getDownloadURL().then((url)=>{
    window.localStorage.setItem('iddocumentlink',url);
  })
}
document.getElementById('certificate').onchange=function(){
  var file1=e.target.files[0];
  var storage1=firebase.storage.ref('FreelancerDocuments'+file.name);
  storage1.put(file1);
  storage1.getDownloadURL().then((url)=>{
    window.localStorage.setItem('certificatelink',url);
  })
}


/*documents uploaded*/


// get location starts here

function getLocation() {
  if (navigator.geolocation) {
    console.log('inside navigator geolocation')
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
     console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  var lat =position.coords.latitude;
  var longit= position.coords.longitude;
  console.log(lat+'and'+longit);
  window.sessionStorage.setItem('latitude1',lat);
  window.sessionStorage.setItem('longitude1',longit);
}

//location ends here

            firebase.auth().k;'.//';createUserWithEmailAndPassword(email,pas).catch((error)=>{
                var errorcode=error.code;
                var errorMessage=error.message;
            })//end of create user
            
            firebase.auth().onAuthStateChanged((user)=>{
                firestore.collection('Dealer/dealergzb001/VerifyFreelancers').doc(email).set({
                    UID:user.uid
                }).then(console.log('Sent to dealer')).catch((error)=>{console.log(error)})//collection ends here
            })//end of auth state changed
            
/*create a freelancer email/pass in auth*/
        

/**/
            
            


          firestore.collection('Dealer/dealergzb001/VerifyFreelancers').doc(email).set({}).catch((error)=>{console.log(error)});
          var idprf=window.sessionStorage.getItem('iddocumentlink');
          var crtft=window.sessionStorage.getItem('certificatelink')
          console.log(idprf,crtft);
          firestore.collection('Freelancer').doc(email).set({
            Name:name,
            Email:email,
            LoginPassword:pas,
            Contact:cont,
            City:fcity,
            serviceType:type,
            //VerifiedByDealer:"",
            CurrentStatus:false,
             industryScale:workscale, 
            Active:false,
            Ratings:0,
            IdProof:idprf,
            CertificationFile:crtft,
           // WorkLocation:firestore.GeoPoint(window.localStorage.getItem('latitude1'),window.localStorage.getItem('longitude1'))
          }).then(console.log('Done')).catch((error)=>{console.log(error)})           //ending of freelancer collection
        }               //end of if 
      })                //end of foreach loop
    })                  //end of Dealer collection
  }                     //end of onclick