function userdata(){
    firebase.auth().onAuthStateChanged(function (user) {
        if (user){
            document.getElementById("username").innerHTML = "Hello! , <mark>"+user.displayName +"</mark>";
        }
    })

}
function logout() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        window.location.href="../../index.html";
    }).catch(function (error) {
        // An error happened.
    });



}