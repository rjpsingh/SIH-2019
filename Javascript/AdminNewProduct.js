 // Initialize Firebase
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

document.getElementById('pic').onchange=function(e){
  var file=e.target.files[0];
  var storage=firebase.storage().ref('ProductImages/'+file.name);
  storage.put(file);
  storage.getDownloadURL().then((url)=>{
    window.localStorage.setItem('newprodimage',url);
   
  })
}


document.getElementById('newproductentry').onclick=function(){
  var prodId=document.getElementById('prodid').value;
  var range=document.getElementById('range').value;
  var name=document.getElementById('prodname').value;
  var type=document.getElementById('type').value;
  var pres=document.getElementById('presentation').value;
  var current=document.getElementById('curr').value;
  var volt=document.getElementById('voltage').value;
  var description=document.getElementById('descript').value;
  var col=document.getElementById('color').value;
  var ref=document.getElementById('ref').value;
  var pic=document.getElementById('storeurl').innerHTML;

  firestore.collection('Products').doc(prodId).set({
    'Color':col,
    'Description':description,
    'DevicePresentation':pres,
    'Name':name,
    'OperationalVoltage':volt,
    'ProdcutType':type,
    'Range':range,
    'RatedCurrent':current,
    'CompleteRef':ref,
    'ProductImage':window.localStorage.getItem('newprodimage')
  }).catch((error)=>{console.log(error)});
  
}


