 /* var config = {
    apiKey: "AIzaSyB2DZ3NIC_Lo5gqHhWTn1kX5M_LCVIZ7zY",
    authDomain: "myschnieder.firebaseapp.com",
    databaseURL: "https://myschnieder.firebaseio.com",
    projectId: "myschnieder",
    storageBucket: "myschnieder.appspot.com",
    messagingSenderId: "105921094692"
  };
  firebase.initializeApp(config);
  const firestore=firebase.firestore();
*/

//var stockDiv=document.getElementById('addstock');
  document.getElementById('submitnewproduct').onclick=function(){
var productID=document.getElementById('productid').value;
var productName=document.getElementById('productname').value;
var productCat=document.getElementById('prodcategory').value;
var prodPrice=document.getElementById('price').value;
var qnty=document.getElementById('productquantity').value;
firestore.collection('Dealer/dealergzb001/Stock').doc(productID).set({
  Category:productCat,
  Name:productName,
  Price:Number(prodPrice),
  QuantityLeft:(qnty)
}).then(alert('Done')).catch((error)=>{console.log(error)});
 

  }