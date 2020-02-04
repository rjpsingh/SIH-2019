firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log(user.email);
        document.getElementById('id01').style.display = 'none';
        document.getElementById("logout_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";

        var user = firebase.auth().currentUser;

        if (user != null) {

            var email_id = user.email;
            document.getElementById("user_para").innerHTML = "Welcome  " + email_id;

        }

    } else {
        // No user is signed in.
        console.log('no user');
        document.getElementById("logout_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";

    }
});
//var storage=firebase.storage();
 //   const settings = {/* your settings... */ timestampsInSnapshots: true};
 // firestore.settings(settings);


var storage=firebase.storage();
var imageRef;
  firestore.collection('Products').get().then((query)=>{
    var i=1;
    query.forEach((doc)=>{
            var insertIntoDiv=document.getElementById('products');

            var getDiv=document.createElement('div');
            getDiv.className='card';
            insertIntoDiv.appendChild(getDiv);
            
            var newImg=document.createElement('img');
            newImg.id='prodimage';
            newImg.className='card-img-top';
            var imageRef=storage.refFromURL(doc.data().ProductImage);
            imageRef.getDownloadURL().then((url)=>{
              newImg.src=url;
            }).catch((error)=>{console.log(error)});
            getDiv.appendChild(newImg);

          var newTitle=document.createElement('h4');
          newTitle.id='title'+i;
          newTitle.className='card-title';
          newTitle.innerHTML=doc.data().Name;
          getDiv.appendChild(newTitle);

          var newType=document.createElement('p');
          newType.id='type'+i;
          newType.className='card-text';
          newType.innerHTML="Type :"+doc.data().ProductType;
          getDiv.appendChild(newType);

          var newp=document.createElement('p');
          newp.className='card-text';
          newp.id='range'+i;
          newp.innerHTML="Range :"+doc.data().Range;
          getDiv.appendChild(newp);
        
        
          var addToCart=document.createElement('input');
          addToCart.id='addtocart'+i;
          addToCart.type='button';
          addToCart.className='CartButton';
          addToCart.value='Add To Cart';
          addToCart.onclick=function(){
                            //var currentUser=localStorage.getItem('mySchneiderCurrentUser');
                              firestore.collection('Consumer/sanketnitra2292@gmail.com/MyCart').doc(doc.id).set({
                                'Quantity':1
                              }).catch((error)=>{console.log(error)})
                            }
          getDiv.appendChild(addToCart);

          var more=document.createElement('input');
          more.id='more'+i;
          more.type='button';
          more.className='Morebutton';
          more.value='More';
          more.onclick=function(){
                          window.location="ProductDetail.html";
                        }
          getDiv.appendChild(more);
  	       
        
      i++;
    })
  }).catch((error)=>{console.log(error)})