const firebaseConfig = {
    apiKey: "AIzaSyBTQKG25PCSTaKS3mTHk-JC8m1ir84yakw",
    authDomain: "dataform-e4f00.firebaseapp.com",
    projectId: "dataform-e4f00",
    storageBucket: "dataform-e4f00.appspot.com",
    messagingSenderId: "849695654561",
    appId: "1:849695654561:web:6fa904f179daf8fdc4e6e0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //Reference contact info collections


  let contactInfo = firebase.database().ref("infos");

  document.querySelector(".contact").addEventListener("submit",submitForm);


  function submitForm(e){
    e.preventDefault()
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;

    saveContactInfo(name,email);

  

document.querySelector('.alert').style.display = 'block';


setTimeout(function(){

    document.querySelector('.alert').style.display = 'none';
},3000);

document.querySelector(".contact").reset();

}




function saveContactInfo(name,email){

    let newContactInfo =  contactInfo.push();

    newContactInfo.set({

        name: name,
        email: email

    });



}
