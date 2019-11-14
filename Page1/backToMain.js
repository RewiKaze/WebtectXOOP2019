function backToMain() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            window.location.href = "../../signin/signin2.html";
        } else {
            window.location.href = "../index.html";
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
            window.location.href = "../../signin/signin.html";
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
                            if (progress == 1) {
                                window.location.href = "../2/Page1.html";
                            } else {
                                alert("บทนี้มึงยังเรียนไม่ถึง ไอ้ควาย");
                            }
                        } else if (y == 2) {
                            if (progress == 2) {
                                window.location.href = "../3/Page1.html";
                            } else {
                                alert("บทนี้มึงยังเรียนไม่ถึง ไอ้ควาย");
                            }
                        }
                        else if (y == 3) {
                            if (progress == 3) {
                                window.location.href = "../4/Page1.html";
                            } else {
                                alert("บทนี้มึงยังเรียนไม่ถึง ไอ้ควาย");
                            }
                        }
                        else if (y == 4) {
                            if (progress == 4) {
                                window.location.href = "../5/Page1.html";
                            } else {
                                alert("บทนี้มึงยังเรียนไม่ถึง ไอ้ควาย");
                            }
                        }


                    });
                };
            })
        }
    });
}
