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

 document.getElementById("update").onclick = function () {
     var field = document.getElementById('selectfield').value;
     var prod = document.getElementById('prodid').value;
     var value = document.getElementById('val').value;


     if (field == "Name") {
         firestore.collection('Products').doc(prod).update({
             Name: value
         }).catch((error) => {
             console.log(error)
         })
     }


     if (field == "MRP") {
         firestore.collection('Products').doc(prod).update({
             MRP: value
         }).catch((error) => {
             console.log(error)
         })
     }

     if (field == "Range") {
         firestore.collection('Products').doc(prod).update({
             Range: value
         }).catch((error) => {
             console.log(error)
         })
     }

     if (field == "ProductType") {
         firestore.collection('Products').doc(prod).update({
             ProductType: value
         }).catch((error) => {
             console.log(error)
         })
     }

     if (field == "DevicePresentation") {
         firestore.collection('Products').doc(prod).update({
             DevicePresentation: value
         }).catch((error) => {
             console.log(error)
         })
     }

     if (field == "Description") {
         firestore.collection('Products').doc(prod).update({
             Description: value
         }).catch((error) => {
             console.log(error)
         })
     }

     if (field == "OpertationalVoltage") {
         firestore.collection('Products').doc(prod).update({
             OpertationalVoltage: value
         }).catch((error) => {
             console.log(error)
         })
     }

     if (field == "RatedCurrent") {
         firestore.collection('Products').doc(prod).update({
             RatedCurrent: value
         }).catch((error) => {
             console.log(error)
         })
     }

     if (field == "Color") {
         firestore.collection('Products').doc(prod).update({
             Color: value
         }).catch((error) => {
             console.log(error)
         })
     }

     if (field == "CompleteRef") {
         firestore.collection('Products').doc(prod).update({
             CompleteRef: value
         }).catch((error) => {
             console.log(error)
         })
     }



 }
