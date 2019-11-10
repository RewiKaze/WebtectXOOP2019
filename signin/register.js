function register() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/email-already-in-use') {
            alert("Email already registed");
        }
    }).then(function (cred) {
        if (cred) {
            cred.user.updateProfile({
                displayName: username
            }).then(function(){
                window.location.href="signin2.html";
            });


        }
    });

}


function writeUserData(name, email, userId) {
    firebase.database().ref().child('users').child(userId).set({
        username: name,
        email: email,
        lesson: 1
    });
}