function checkUser() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            document.getElementById("signupbox").innerHTML = "<div id='logoutbutton' style='cursor:pointer;' onclick='logout()'>Sign Out</div>";
            document.getElementById("signinbox").innerHTML = "<div id='username'>" + user.displayName + "</div>";
            document.getElementById("signinbox").style.display = "";
            document.getElementById("signupbox").style.display = "";
        } else {

            document.getElementById("signinbox").innerHTML = "<div id='signinbutton' style='cursor:pointer;' onclick='window.location.href=\"signin/signin.html\"'>Sign in</div>";
            document.getElementById("signupbox").innetHTML = "<div id='signupbutton' style='cursor:pointer;' onclick='window.location.href=\"signin/create1.html\"'>Sign up</div>";
            document.getElementById("signinbox").style.display = "";
            document.getElementById("signupbox").style.display = "";
        }
    });
}
function logout() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        window.location.reload();
    }).catch(function (error) {
        // An error happened.
    });



}