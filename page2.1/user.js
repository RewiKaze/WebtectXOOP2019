function userdata(){
    firebase.auth().onAuthStateChanged(function (user) {
        if (user){
            document.getElementById("username").innerHTML = "Hello! , <mark>"+user.displayName +"</mark>";
        }
    })

}