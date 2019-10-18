function register() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
    }).then(function (cred) {
        if (cred) {
            cred.user.updateProfile({
                displayName: username
            })
            console.log("Success");
            console.log(cred.user);
            setTimeout(() => {
                window.location.href="signin1.html"
            }, 2000);
        
        }
    });

}