function showUserName() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("user sign in");
            let info_user = firebase.auth().currentUser;
            var database = firebase.database();
            if (info_user) {
                document.getElementById("show-username").innerHTML = "Hello, <mark>" + user.displayName + "</mark>";
                database.ref().child('users').orderByChild('email').equalTo(user.email).once("value", check => {
                    if (check.exists()){
                        database.ref("users/"+user.uid).once("value").then(function(snapshot){
                            var progress = snapshot.val().lesson;
                            console.log(snapshot.val().lesson);
                            document.getElementsByClassName("success")[0].style.width = (progress/5 * 100) + "%";
                            document.getElementsByClassName("boxsuccess")[0].innerHTML = (progress/5 * 100) + "%";
                        })
                    }else{
                        writeUserData(user.displayName, user.email, user.uid);
                        console.log("Write New Data");
                    }
                })
                

            }
        } else {
            console.log("not signed");
            window.location.href = "../main/index.html";
        }
    });

}

function writeUserData(name, email, userId) {
    firebase.database().ref().child('users').child(userId).set({
        username: name,
        email: email,
        lesson: 0
    });
    document.getElementsByClassName("success")[0].style.width = '0%';
    document.getElementsByClassName("boxsuccess")[0].innerHTML = '0%';
}

function resume(){

}