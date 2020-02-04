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

document.getElementById('retailerVeri').onclick=function(){
  firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
      console.log('user found');
      firestore.collection('Dealer/'+user.email+'/VerifyRetailer').get().then((q1)=>{
        var i=1;
        var allret=document.getElementById('');
        q1.forEach((d1)=>{
          var newD=document.createELement('div');
          newD.id='retverdiv'+i;
          allret.appendChild(newD);

          var eachret=document.createELement('h4');
          eachret.id='eachretailerid'+i;
          eachret.innerHTML=d1.id;
          newD.appendChild(eachret);

          var verifyThis=document.createELement('input');
          verifyThis.type='button';
          verifyThis.value='This Retailer is verified by me';
          newD.appendChild(verifyThis);
          verifyThis.onclick=function(){
            firestore.collection('Retailers').doc(d1.id).update({
              VerificationStatus:true
            })//end of retailer update
            console.log('Verication status id true');
            firestore.collection('Dealer/'+user.email+'/VerifiedRetailers').doc(d1.id).set({});
            console.log('Set in verified dealer');
            firestore.collection('Dealer/'+user.email+'/VerifyRetailer').doc(d1.id).delete();
            console.log('Deleted from verify retailer collection');
          }

        })//end of for each
      })//end of collection
    }//end of if
    else{
      console.log('No user found')
    }
  })//end of auth 
}//end of onclick