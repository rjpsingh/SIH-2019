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

  //document.getElementById('').onclick=function(){
      firestore.collection('Dealer/dealergzb001/Stock').get().then((q1)=>{
        var i=1;
        q1.forEach((d1)=>{
          var newDiv=document.createElement('div');
          newDiv.className='maindiv';
          document.getElementById('stock').appendChild(newDiv);
         
    
          var pid=document.createElement('h3');
          pid.id='pid'+i;
          pid.className='heading';    
          pid.innerHTML=d1.id;
          newDiv.appendChild(pid);

          var quant=document.createElement('h4');
          quant.id='quantity'+i;
         quant.className='quantityprod'; quant.innerHTML=d1.data().QuantityLeft;
          newDiv.appendChild(quant);

          var updatestock=document.createElement('input');
          updatestock.type='button';
          updatestock.className='subBtn';    
          updatestock.id='updatequantity'+i;
          updatestock.value='Update';
          newDiv.appendChild(updatestock);
          updatestock.onclick=function(){
            updatestock.disabled=true;
              var newquant=document.createElement('input');
              newquant.type='number';
              newquant.id='newquantity'+i;
              newquant.placeholder='Enter New Quantity';
              newDiv.appendChild(newquant);

              var ssubnewquant=document.createElement('input');
              subnewquant.type='button';
              subnewquant.value='Update Quantity';
              subnewquant.id='submitnewquantity'+i;
              newDiv.appendChild(subnewquant);
              subnewquant.onclick=function(){
                  firestore.collection('Dealer/dealergzb001/Stock').doc(d1.id).update({
                    'QuantityLeft':Number(newquant.value)
                  }).then(alert('Updated...Refresh Page to see')).catch((error)=>{console.log(error)});//end of firestore update

              }//end of onclick
          }//end of onclick

          i++;
        })
      });
  //}//end of onclick