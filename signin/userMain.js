function showUserName() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("user sign in");
            let info_user = firebase.auth().currentUser;
            if (info_user) {
                document.getElementById("show-username").innerHTML   = "Hello, " + user.displayName;
                document
            }
        } else {
            console.log("not signed");
        }
    });

}