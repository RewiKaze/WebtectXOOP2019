function signout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location.href = "../main/index.html";
      }).catch(function(error) {
        // An error happened.
      });
      
      
}

firebase.database().ref("users").orderByChild("email").once("value", snapshot => {
}); 