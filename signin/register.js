function register() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/email-already-in-use') {
            checkPopup(2);
        }else{
            alert(errorMessage);
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



function checkPopup(whatPopUp) {
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