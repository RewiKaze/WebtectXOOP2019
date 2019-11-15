function backToMain() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            window.location.href = "../../signin/signin2.html";
        } else {
            window.location.href = "../../index.html";
        }
    });
}
function start(x) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var database = firebase.database();
            database.ref().child('users').orderByChild('email').equalTo(user.email).once("value", check => {
                if (check.exists()) {
                    database.ref("users/" + user.uid).once("value").then(function (snapshot) {
                        progress = snapshot.val().lesson;
                        if (x == 1) {
                            if (progress == 0) {
                                window.location.href = "../../page2.1/lesson1/lesson1-1.html";
                            } else if (progress == 0.1) {
                                window.location.href = "../../page2.1/lesson1/lesson1-2.html";
                            } else if (progress == 0.2) {
                                window.location.href = "../../page2.1/lesson1/lesson1-3.html";
                            } else if (progress == 0.3) {
                                window.location.href = "../../page2.1/lesson1/lesson1-4.html";
                            } else if (progress == 0.4) {
                                window.location.href = "../../page2.1/lesson1/lesson1-5.html";
                            } else {
                                window.location.href = "../../page2.1/lesson1/lesson1-1.html";
                            }
                        } else if (x == 2) {
                            if (progress == 1) {
                                window.location.href = '../../page2.1/lesson2/lesson2-1.html';
                            } else if (progress == 1.1) {
                                window.location.href = "../../page2.1/lesson2/lesson2-2.html";
                            } else if (progress == 1.2) {
                                window.location.href = "../../page2.1/lesson2/lesson2-3.html";
                            } else {
                                window.location.href = "../../page2.1/lesson2/lesson2-1.html";
                            }

                        } else if (x == 3) {
                            if (progress == 2) {
                                window.location.href = '../../page2.1/lesson3/lesson3-1.html';
                            } else if (progress == 2.1) {
                                window.location.href = "../../page2.1/lesson3/lesson3-2.html";
                            } else if (progress == 2.2) {
                                window.location.href = "../../page2.1/lesson3/lesson3-3.html";
                            } else if (progress == 2.3) {
                                window.location.href = "../../page2.1/lesson3/lesson3-4.html";
                            } else {
                                window.location.href = '../../page2.1/lesson3/lesson3-1.html';
                            }

                        } else if (x == 4) {
                            if (progress == 3) {
                                window.location.href = '../../page2.1/lesson4/lesson4-1.html';
                            } else if (progress == 3.1) {
                                window.location.href = "../../page2.1/lesson4/lesson4-2.html";
                            } else if (progress == 3.2) {
                                window.location.href = "../../page2.1/lesson4/lesson4-3.html";
                            } else if (progress == 3.3) {
                                window.location.href = "../../page2.1/lesson4/lesson4-4.html";
                            } else if (progress == 3.4) {
                                window.location.href = "../../page2.1/lesson4/lesson4-5.html";
                            } else if (progress == 3.5) {
                                window.location.href = "../../page2.1/lesson4/lesson4-6.html";
                            } else if (progress == 3.6) {
                                window.location.href = "../../page2.1/lesson4/lesson4-7.html";
                            } else {
                                window.location.href = '../../page2.1/lesson4/lesson4-1.html';
                            }

                        } else if (x == 5) {
                            console.log(progress);
                            if (progress == 4) {
                                window.location.href = '../../page2.1/lesson5/lesson5-1.html';
                            } else if (progress == 4.1) {
                                window.location.href = "../../page2.1/lesson5/lesson5-2.html";
                            } else if (progress == 4.2) {
                                window.location.href = "../../page2.1/lesson5/lesson5-3.html";
                            } else if (progress == 4.3) {
                                window.location.href = "../../page2.1/lesson5/lesson5-4.html";
                            } else {
                                window.location.href = '../../page2.1/lesson5/lesson5-1.html';
                            }
                        }

                    })
                }
            });
        } else {
            checkPopup(1);
        }


    })
}

function checkGoNextLesson(y) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var database = firebase.database();
            database.ref().child('users').orderByChild('email').equalTo(user.email).once("value", check => {
                if (check.exists()) {
                    database.ref("users/" + user.uid).once("value").then(function (snapshot) {
                        var progress = snapshot.val().lesson;
                        if (y == 1) {
                            if (progress >= 1) {
                                window.location.href = "../2/Page1.html";
                            } else {
                                checkPopup(3);
                            }
                        } else if (y == 2) {
                            if (progress >= 2) {
                                window.location.href = "../3/Page1.html";
                            } else {
                                checkPopup(3);
                            }
                        }
                        else if (y == 3) {
                            if (progress >= 3) {
                                window.location.href = "../4/Page1.html";
                            } else {
                                checkPopup(3);
                            }
                        }
                        else if (y == 4) {
                            if (progress >= 4) {
                                window.location.href = "../5/Page1.html";
                            } else {
                                checkPopup(3);
                            }
                        }


                    });
                };
            })
        }else{
            if (y == 1){
                window.location.href = "../2/Page1.html";
            }else if(y==2){
                window.location.href = "../3/Page1.html"
            }else if(y==3){
                window.location.href = "../4/Page1.html"
            }else if(y==4){
                window.location.href = "../5/Page1.html"
            }
        }
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
    X.className = "X";
    icon.className = "icon";
    X.innerHTML = "X";

    if (whatPopUp == 1) {
        popup.style.backgroundColor = "#afeeee";
        h1.innerHTML = "กรุณาเข้าสู่ระบบก่อนเรียน";
        icon.src = "../../img/icon/alarm (1).png";
        X.onclick = function main() {
           
            window.location.href ="../../signin/signin.html";
        };
    }
    else if (whatPopUp == 2) {
        popup.style.backgroundColor = "#ffad5b";
        h1.innerHTML = "มี e-mail นี้อยู่ในระบบแล้ว";
        icon.src = "../../img/icon/notification.png";
        X.onclick = function miss() {
            let bgpopup = document.querySelector('.background');
            bgpopup.remove();
        };
        
    }
    else if (whatPopUp == 3) {
        popup.style.backgroundColor = "#ff7979";
        h1.innerHTML = "คุณยังเรียนไม่ถึงบทเรียนนี้";
        icon.src = "../../img/icon/warning (4).png";
        X.onclick = function miss() {
            let bgpopup = document.querySelector('.background');
            bgpopup.remove();
        };
    }
    else if (whatPopUp == 4) {
        popup.style.backgroundColor = "#c0c0c0";
        h1.innerHTML = "ดูเหมือนคุณจะจำรหัสผิดนะ";
        icon.src = "../../img/icon/choice.png";
        X.onclick = function miss() {
            let bgpopup = document.querySelector('.background');
            bgpopup.remove();
        };
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

