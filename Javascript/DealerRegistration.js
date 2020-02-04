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

  document.getElementById('document').onchange=function(e){
  	var file=e.target.files[0];
  	var storageRef=firebase.storage().ref('DealerDocuments/'+file.name);
  	storageRef.put(file);
  	storageRef.getDownloadURL((url)=>{
  		document.getElementById('store').value=url
  	})
  }

document.getElementById('submitdealer').onclick=function(){
	var dealerName=document.getElementById('ownername').value;
	var storeName=document.getElementById('storename').value;
	var dealerEmail=document.getElementById('dealermail').value;
	var contact=document.getElementById('contact').value;
	var address1=document.getElementById('address1').value;
	var address2=document.getElementById('address2').value;
	var state=document.getElementById('state').value;
	var pinCode=document.getElementById('pincode').value;
	var gst=document.getElementById('gstno').value;
	var pas=document.getElementById('pass').value;

	firestore.collection('Admin/Devanshu.Mehta@schneider-electric.com/NewDealerRequest').doc(dealerEmail).set({
		OwnerName:dealerName,
		StoreName:storeName,
		DealerEmail:dealerEmail,
		Contact:contact,
		AddressLine1:address1,
		AddressLine2:address2,
		State:state,
		LoginPassword:pas,
		PinCode:pinCode,
		PhoneVerification:false,
		GSTNo:gst,
		DocumentLink:document.getElementById('store').value
	}).then(alert('Our representative will catch u soon')).catch((error)=>{console.log(error)});
	document.getElementById('dealerform').style.display='none';
    
    document.getElementById('verifyphone').style.display='block';
    

}

document.getElementById('vrfybtn').onclick=function(){
    window.location.replace='../Auth/materialize.html';
}