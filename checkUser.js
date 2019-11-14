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


function checkLesson(x) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var database = firebase.database();
            database.ref().child('users').orderByChild('email').equalTo(user.email).once("value", check => {
                if (check.exists()) {
                    database.ref("users/" + user.uid).once("value").then(function (snapshot) {
                        var progress = snapshot.val().lesson;
                        if (x == 1) {
                            window.location.href = "Page1/1/Page1.html";
                        } else if (x == 2) {
                            if (progress >= 1) {
                                window.location.href = "Page1/2/Page1.html";
                            }else{
                                alert("กรุณาทำบทก่อนหน้าให้เสร็จก่อน");
                            }
                        }else if (x == 3) {
                            if (progress >= 2) {
                                window.location.href = "Page1/3/Page1.html";
                            }else{
                                alert("กรุณาทำบทก่อนหน้าให้เสร็จก่อน");
                            }
                        }
                        else if (x == 4) {
                            if (progress >= 3) {
                                window.location.href = "Page1/4/Page1.html";
                            }else{
                                alert("กรุณาทำบทก่อนหน้าให้เสร็จก่อน");
                            }
                        }
                        else if (x == 5) {
                            if (progress >= 4) {
                                window.location.href = "Page1/5/Page1.html";
                            }else{
                                alert("กรุณาทำบทก่อนหน้าให้เสร็จก่อน");
                            }
                        }
                    })
                }
            })

        }else{
            if(x==1){
                window.location.href = "Page1/1/Page1.html";
            }else if(x==2){
                window.location.href = "Page1/2/Page1.html";
            }else if (x==3){
                window.location.href = "Page1/3/Page1.html";
            }else if (x==4){
                window.location.href = "Page1/4/Page1.html";
            }else if(x==5){
                window.location.href = "Page1/5/Page1.html";
            }
        }
    })
}