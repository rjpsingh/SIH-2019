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


var idp=document.getElementById('idproof');
var storedoc=document.getElementById('storedoc');

idp.onchange=function(e){
      var file=e.target.files[0];
      var storeRef=firebase.storage().ref('RetailerDocs'+file.name);
      storeRef.put(file);
      storeRef.getDownloadURL().then((url)=>{
        document.getElementById('hold1').value=url;
      })//end of then of get download url
    }// end of onchange

storedoc.onchange=function(e){
      var file1=e.target.files[0];
      var storeRef1=firebase.storage().ref('RetailerDocs'+file1.name);
      storeRef1.getDownloadURL().then((url)=>{
        document.getElementById('hold2').value=url
      })//end of get download url
    }//end of onchange



  document.getElementById('registerretailer').onclick=function(){
    console.log('inside onclick registerretailer');
    var sn=document.getElementById('storename').value;
    var owname=document.getElementById('ownername').value;
    var contact=document.getElementById('contact').value;
    var mail=document.getElementById('mail').value;
    var pas=document.getElementById('pass').value;
    var address=document.getElementById('address').value;
    var city=document.getElementById('city').value;
    var pin=document.getElementById('pin').value;

    firestore.collection('Dealer').get().then((q1)=>{
      q1.forEach((d1)=>{
        console.log('before if');
        if(d1.data().City===city && d1.data().NodalDealer==true){
          console.log('inside if ')
          firestore.collection('Dealer/'+d1.id+'/VerifyRetailers').doc(mail).set({}).then(console.log('Sent to dealer databse')).catch((error)=>{console.log(error)})//end of set
          firestore.collection('Retailers').doc(mail).set({
            StoreName:sn,
            OwnerName:owname,
            Contact:contact,
            Email:mail,
            City:city,
            Address:address,
            PinCode:pin,
            Password:pas,
            IdProofLink:document.getElementById('hold1').value,
            StoreDocuments:document.getElementById('hold2').value
          }).then(console.log('entered in retaierl database')).catch((error)=>{console.log(error)})//end of set of retailers
        }//end of if
        else{
          console.log('Not found');
        }
      })//end of for each
    })//end of collection dealer





  }//end of onclick