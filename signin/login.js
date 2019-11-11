function loginEmail(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else if(errorCode === 'auth/user-not-found') {
          alert('User not found');
        } else{
          alert("กรุณาเชื่อมต่ออินเตอร์เน็ต");
        }
        
      }).then(function(cred){
          if(cred){
          window.location = "signin2.html";
          }
      });
}