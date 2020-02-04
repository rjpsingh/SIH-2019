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

  var dealers=document.getElementById('dealerlist');
  firestore.collection('Admin/admin1/NewDealerRequest').get().then((query)=>{
    var i=1;
    query.forEach((doc)=>{
 /*     var ref=document.createElement('a');
      ref.id='ref'+i;
      ref.innerHTML=doc.id;
      dealerList.appendChild(ref);
  */
    var dealerList=document.createElement('div');
    dealerList.id='dealerlist'+i;
    dealerList.className='dealerDiv';    
    dealers.appendChild(dealerList);

      var dealerid=document.createElement('p');
      dealerid.id='dealerid'+i;
      dealerid.innerHTML=doc.id;
      dealerList.appendChild(dealerid);

      var verBtn=document.createElement('input');
      verBtn.type='button';
      verBtn.id='verbtn'+i;
      verBtn.value="Verify Dealer";
      dealerList.appendChild(verBtn);

      var hideit=document.createElement('input');
      hideit.type='button';
      hideit.id='hide'+i;
      hideit.value='Hide It';
      hideit.disabled=true;
      dealerList.appendChild(hideit);


      verBtn.onclick=function(){
        hideit.disabled=false;
        verBtn.disabled=true;
        var dealerDetails=document.createElement('div');
        dealerDetails.id='dealerdetails'+i;
        dealerList.appendChild(dealerDetails);

        var dealerName=document.createElement('h2');
        dealerName.id='dealername'+i;
        dealerName.innerHTML=doc.data().OwnerName;
        dealerDetails.appendChild(dealerName);

        var storeName=document.createElement('p');
        storeName.id='storename'+i;
        storeName.innerHTML=doc.data().StoreName;
        dealerDetails.appendChild(storeName);

        var dealerMail=document.createElement('p');
        dealerMail.id='dealermail'+i;
        dealerMail.innerHTML=doc.data().DealerEmail;
        dealerDetails.appendChild(dealerMail);

        var dealerContact=document.createElement('p');
        dealerContact.id='dealercontact'+i;
        dealerContact.innerHTML=doc.data().Contact;
        dealerDetails.appendChild(dealerContact);

        var address=document.createElement('p');
        address.id='dealeraddress'+i;
        address.innerHTML=doc.data().AddressLine1+doc.data().AddressLine2+doc.data().State;
        dealerDetails.appendChild(address);

        var pin=document.createElement('p');
        pin.id='pin'+i;
        pin.innerHTML=doc.data().PinCode;

        var gst=document.createElement('p');
        gst.id='gst'+i;
        gst.innerHTML=doc.data().GSTNo;
        dealerDetails.appendChild(gst);

        /*
        
          Enter code for id proof here


        */

        var verify=document.createElement('input');
        verify.type='button';
        verify.id='verify'+i;
        verify.value='Verify This Dealer';
        dealerDetails.appendChild(verify);
        verify.onclick=function(){
           

           
          firestore.collection('Dealer').doc(doc.data().DealerEmail).set({
            OwnerName:doc.data().OwnerName,
            StoreName:doc.data().StoreName,
            DealerEmail:doc.data().DealerEmail,
            DealerContact:doc.data().Contact,
            Address:address.innerHTML,
            State:doc.data().State,
            GSTNo:doc.data().GSTNo

          }).catch((error)=>{console.log(error)});



          firestore.collection('Admin/admin1/VerifiedDealers').doc(doc.id).set({}).catch((error)=>{console.log(error)})

          //Delete data of dealer from that table
          firestore.collection('Admin/admin1/NewDealerRequest').doc(doc.id).delete().then((error)=>{
            console.log(error)
          });
          
        }

        hideit.onclick=function(){
        verBtn.disabled=false;

        document.getElementById('dealerdetails'+i).style.display='none';
        hideit.disabled=true;
      }



      }

      i++;
    })
  })