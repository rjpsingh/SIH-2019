 // Initialize Firebase
// var config = {
//     apiKey: "AIzaSyB2DZ3NIC_Lo5gqHhWTn1kX5M_LCVIZ7zY",
//     authDomain: "myschnieder.firebaseapp.com",
//     databaseURL: "https://myschnieder.firebaseio.com",
//     projectId: "myschnieder",
//     storageBucket: "myschnieder.appspot.com",
//     messagingSenderId: "105921094692"
// };
// firebase.initializeApp(config);
// const firestore = firebase.firestore();
// const settings = {
//     /* your settings... */
//     timestampsInSnapshots: true
// };
// firestore.settings(settings);

 document.getElementById("deleteprod").onclick = function () {
     var deleteProd = document.getElementById('deleteprodid').value;

     firestore.collection('Products').doc(deleteProd).delete().then(alert('Product Deleted')).catch((error) => {
         console.log(error)
     });


 }
