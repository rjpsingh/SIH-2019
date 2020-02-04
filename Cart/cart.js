  var config = {
      apiKey: "AIzaSyB2DZ3NIC_Lo5gqHhWTn1kX5M_LCVIZ7zY",
      authDomain: "myschnieder.firebaseapp.com",
      databaseURL: "https://myschnieder.firebaseio.com",
      projectId: "myschnieder",
      storageBucket: "myschnieder.appspot.com",
      messagingSenderId: "105921094692"
  };
  firebase.initializeApp(config);
  var firestore = firebase.firestore();
  /*firebase.auth().onAuthStateChanged(function(user) {
  	 if(user)
  {*/

  var productDiv = document.getElementById('cartproducts');
  // firestore.collection('consumer/sanketnitra2292@gmail.com').get().then((topquery)=> {
  // 	topquery.forEach((tdoc)=> {

  firestore.collection('Consumer/sanketnitra2292@gmail.com/MyCart').get().then((query) => {
      var i = 1;
      var sum = 0;
      query.forEach((doc) => {
          firestore.collection('Products').get().then((q) => {
              q.forEach((d) => {
                  if (d.id == doc.id) {
                      console.log("hiiiiiiiiiii");


                      var getCartDiv = document.createElement('div');
                      getCartDiv.id = 'productincart' + i;
                      getCartDiv.className = 'lii';
                      ////                      getCartDiv.style.border = 'dashed';
                      //                      getCartDiv.style.height = '10%';
                      //                      getCartDiv.style.width = '10%';
                      productDiv.appendChild(getCartDiv);
                      // gets image
                      var prodImage = document.createElement('img');
                      prodImage.id = 'prodimage' + i;
                      prodImage.className = 'prodimage';
                      prodImage.style.height = '135px';
                      prodImage.style.width = '105px';
                      prodImage.src = d.data().ProductImage;
                      getCartDiv.appendChild(prodImage);
                      // refrence
                      var ref = document.createElement('a');
                      ref.id = 'prodref' + i;
                      ref.className = 'prodref';
                      ref.href = d.data().CompleteRef;
                      getCartDiv.appendChild(ref);
                      // name of product
                      var prodName = document.createElement('h3');
                      prodName.id = 'prodname' + i;
                      prodName.className = 'prodname';
                      prodName.innerHTML = d.data().Name;
                      ref.appendChild(prodName);

                      // price
                      var Price = document.createElement('h2');
                      Price.id = 'price' + i;
                      Price.className = 'price'
                      Price.innerHTML = '&#8377; &nbsp' + d.data().MRP;
                      getCartDiv.appendChild(Price);
                      // quantity
                      var Qt = document.createElement('input');
                      Qt.id = 'Qt' + i;
                      Qt.className = 'Qt';
                      Qt.value = 0;
                      Qt.value = doc.data().Quantity;
                      getCartDiv.appendChild(Qt);
                      //adder button
                      var incProduct = document.createElement('input');
                      incProduct.type = 'button';
                      incProduct.value = '+';
                      incProduct.id = 'incproduct' + i;
                      incProduct.onclick = function () {
                          firestore.collection('Consumer/sanketnitra2292@gmail.com/MyCart').doc(doc.id).update({
                              'Quantity': doc.data().Quantity + 1
                          }).catch((error) => {
                              console.log(error)
                          });
                         
//                          document.location.reload(true);
                      }
                      getCartDiv.appendChild(incProduct);
                      // decrease button
                      var decProduct = document.createElement('input');
                      decProduct.type = 'button';
                      decProduct.id = 'decproduct' + i;
                      decProduct.value = '-';
                      getCartDiv.appendChild(decProduct);

                      decProduct.onclick = function () {
                          firestore.collection('Consumer/sanketnitra2292@gmail.com/MyCart').doc(doc.id).update({
                              'Quantity': doc.data().Quantity - 1
                          }).catch((error) => {
                              console.log(error)
                          });

                          //                          window.location.relaod(true);

                      }
                      if (Qt.value > 1) {
                          decProduct.style.pointerEvents = 'auto';
                      } else {
                          decProduct.style.pointerEvents = 'none';
                      }

                      // remove from cart
//
//                      var delFromCart = document.createElement('button');
//                      delFromCart.id = 'del' + i;
//                      delFromCart.className = 'delete';
//                      delFromCart.innerHTML = 'Delete From Cart';
//                      delFromCart.onclick = function () {
//
//                          firestore.collection('Consumer/sanketnitra2292@gmail.com/MyCart').doc(doc.id).update({
//                              'Quantity': 0
//
//                          }).catch((error) => {
//                              console.log(error)
//                          });
//                          firestore.collection('Consumer/sanketnitra2292@gmail.com/MyCart').doc(doc.id) delete().then(function () {
//                              console.log("Document successfully deleted!");
//                          }).catch(function (error) {
//                              console.error("Error removing document: ", error);
//                          });
//                          var elem = document.querySelector('#cartproducts');
//                          elem.parentNode.removeChild(elem);
//                          
//                          window.location.reload(true);
//
//
//                      }

                      sum = sum + (doc.data().Quantity * d.data().MRP);
                      firestore.collection('Consumer').doc('sanketnitra2292@gmail.com').update({
                          CartAmount: Number(sum)

                      });


                  }
              })

          })
      })



  })
  // })
  // })
  var total = firestore.collection('Consumer').doc('sanketnitra2292@gmail.com');

  total.get().then((dd) => {

      console.log('hi cart');
      var cartDetail = document.getElementById('detailList');
      var detailRow = [];
      detailRow[0] = document.createElement('li');
      detailRow[0].innerHTML = 'Total : &nbsp &#8377; &nbsp' + dd.data().CartAmount;
      cartDetail.appendChild(detailRow[0]);
      detailRow[1] = document.createElement('li');
      detailRow[1].innerHTML = 'Tax : &nbsp &#8377; &nbsp' + (0.18 * dd.data().CartAmount);
      cartDetail.appendChild(detailRow[1]);
      detailRow[2] = document.createElement('li');
      detailRow[2].innerHTML = 'Amout Payable : &nbsp &#8377; &nbsp' + (dd.data().CartAmount + (0.18 * dd.data().CartAmount));
      cartDetail.appendChild(detailRow[2]);
      detailRow[2] = document.createElement('button');
      detailRow[2].innerHTML = 'Checkout';
      detailRow[2].onclick = function(){
          Instamojo.open('http://www.instamojo.com/@sankettiwari');
      }
      cartDetail.appendChild(detailRow[2]);


  })
  //   
  //function rload(){
  ////    var container = document.getElementById("cartproducts");
  ////    var content = container.innerHTML;
  ////    container.innerHTML= content; 
  ////    
  //    location.reload();
  //   //this line is to watch the result in console , you can remove it later	
  //    console.log("Refreshed"); 
  //}



  /* 
  
  var docRef = db.collection("cities").doc("SF");

            docRef.get().then(function(doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })
  
  
  
  
 else
 {
 	//window.location.replace("");
  console.log("Not Logged In");
 }
});*/
