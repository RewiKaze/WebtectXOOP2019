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


//alert
function check(whatPopUp) {
    let bgpopup = document.createElement("div");
    bgpopup.className = "background";
    let popup = document.createElement("div");
    popup.className = "popup";
    let h1 = document.createElement("h1");
    let icon = document.createElement("img");
    let X = document.createElement("div");
    X.onclick = function miss() {
        let bgpopup = document.querySelector('.background');
        bgpopup.remove();
    };
    X.className = "X";
    icon.className = "icon";
    X.innerHTML = "X";

    if (whatPopUp == 1) {
        popup.style.backgroundColor = "#afeeee";
        h1.innerHTML = "กรุณาเข้าสู่ระบบก่อนเรียน";
        icon.src = "../img/icon/alarm (1).png";
    }
    else if (whatPopUp == 2) {
        popup.style.backgroundColor = "#ffad5b";
        h1.innerHTML = "มี e-mail นี้อยู่ในระบบแล้ว";
        icon.src = "../img/icon/notification.png";
    }
    else if (whatPopUp == 3) {
        popup.style.backgroundColor = "#ff7979";
        h1.innerHTML = "คุณยังเรียนไม่ถึงบทเรียนนี้";
        icon.src = "../img/icon/warning (4).png";
    }
    else if (whatPopUp == 4) {
        popup.style.backgroundColor = "#c0c0c0";
        h1.innerHTML = "ดูเหมือนคุณจะจำรหัสผิดนะ";
        icon.src = "../img/icon/choice.png";
    }
    popup.appendChild(X);
    popup.appendChild(icon);
    popup.appendChild(h1);

    bgpopup.appendChild(popup);
    document.body.appendChild(bgpopup);
}

function miss() {
    let bgpopup = document.querySelector('.background');
    bgpopup.remove();
}