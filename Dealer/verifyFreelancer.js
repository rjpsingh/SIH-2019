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

//  document.getElementById('freelist').onclick=function(){
//    document.getElementById('freelist').style.display='none';
   var divis=document.getElementById('listdiv');

    firestore.collection('Dealer/dealergzb001/VerifyFreelancers').get().then((q1)=>{
      var i=1;
      q1.forEach((d1)=>{
        var listDiv=document.createElement('div');
        listDiv.id='fl'+i;
        listDiv.className='newVeri';  
        divis.appendChild(listDiv);

        var f=document.createElement('p');
        f.id='freelancer'+i;
        f.innerHTML=d1.id;
          f.className='emailid';
        listDiv.appendChild(f);

        var reject=document.createElement('input');
        reject.type='button';
        reject.value='Reject';
        reject.className='Rejectbtn';  
        reject.id='reject'+i;
        listDiv.appendChild(reject);
        reject.onclick=function(){
          firestore.collection('Dealer').doc(d1).delete().then(alert('Deleted'));
          firestore.collection('Freelancer').doc(d1.id).delete().then(alert('Deleted'));
          document.getElementById('fl'+i).style.display='none';
        }

        var verifyBtn=document.createElement('input');
        verifyBtn.type='button';
        verifyBtn.id='verifybtn'+i;
        verifyBtn.className='Verifybtn';   
        verifyBtn.value='Freelancer Verified';
        listDiv.appendChild(verifyBtn);
        verifyBtn.onclick=function(){
          verifyBtn.disabled=true;
          var rate=document.createElement('input');
          rate.type='number';
          rate.placeholder='Freelancer Rating';
          rate.id='rating'+i;
          listDiv.appendChild(rate);

          var submitrating=document.createElement('input');
          submitrating.type='button';
          submitrating.id='submitrate'+i;
          submitrating.value='Submit';
          submitrating.className='Rating';    
          listDiv.appendChild(submitrating);
          submitrating.onclick=function(){

        firestore.collection('Freelancer').get().then((q2)=>{
            q2.forEach((d2)=>{
             if(d1.id==d2.id){
    
            var Ref=firebase.database().ref('myschnieder/Users/ServiceMan'+d1.data().UID);
              Ref.set({
                  industryScale:d2.data().industryScale,
                  name:d2.data().Name,
                  phone:d2.data().Contact,
                  serviceType:d2.data().serviceType
              })//set ends here
             }
                          })// end of for each
        })//end of collection
              

              firestore.collection('Freelancer').doc(d1.id).update({
                VerifiedByDealer:'dealergzb001',
                CurrentStatus:true,
                Ratings:document.getElementById('rating'+i).value
              }).then(console.log('Data moved')).catch((error)=>{console.log(error)});//end of update
              firestore.collection('Dealer/dealergzb001/VerifyFreelancers').doc(d1.id).delete().then(alert('All Done'));
              
              

              
              
            }//end of onclick sumit rating
        }//end of onclick verifyBtn
      })//end of foreach
    })//end of firestore collection dealer
//  }//end of onclick