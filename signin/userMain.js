function showUserName() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("user sign in");
            let info_user = firebase.auth().currentUser;
            if (info_user) {
                writeUserData(user.displayName, user.email, user.uid);
                document.getElementById("show-username").innerHTML   = "Hello, " + user.displayName;

            }
        } else {
            console.log("not signed");
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