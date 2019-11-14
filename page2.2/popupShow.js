$(document).ready(function () {
    $('input:checkbox').click(function () {
        $('input:checkbox').not(this).prop('checked', false);
    });
});

function refresh() {
    document.getElementById('bgWrong').className = 'none';
}

function check(trueChoise, page) {
    let choise1 = document.getElementById('choise1');
    let choise2 = document.getElementById('choise2');

    if (trueChoise == 1) {
        if (choise1.checked) {
            document.getElementById('bgCorrect').className = 'background';
            /*control save progress*/
            updateScore(page);
            /*end here*/
        } else {
            document.getElementById('bgWrong').className = 'background';
        }
    } else {
        if (choise2.checked) {
            document.getElementById('bgCorrect').className = 'background';
            updateScore(page);
        } else {
            document.getElementById('bgWrong').className = 'background';
        }
    }
}

function choise() {
    $('input:checkbox').not(this).prop('checked', false);
}


function updateScore(currentPage) {
    /*control save progress*/
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var database = firebase.database();
            database.ref().child('users').orderByChild('email').equalTo(user.email).once("value", check => {
                if (check.exists()) {
                    database.ref("users/" + user.uid).once("value").then(function (snapshot) {
                        var progress = snapshot.val().lesson;

                        if (progress == 0 && currentPage == 1.1) {
                            database.ref("users/" + user.uid).update({ lesson: 0.1 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson1/lesson1-2.html" }
                            });

                        } else if (progress == 0.1 && currentPage == 1.2) {
                            database.ref("users/" + user.uid).update({ lesson: 0.2 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson1/lesson1-3.html" }
                            });;

                        } else if (progress == 0.2 && currentPage == 1.3) {
                            database.ref("users/" + user.uid).update({ lesson: 0.3 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson1/lesson1-4.html" }
                            });;
                        } else if (progress == 0.3 && currentPage == 1.4) {
                            database.ref("users/" + user.uid).update({ lesson: 0.4 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson1/lesson1-5.html" }
                            });;
                        } else if (progress == 0.4 && currentPage == 1.5) {
                            database.ref("users/" + user.uid).update({ lesson: 1 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../Page1/2/Page1.html" }
                            });;
                        } else if (progress == 1 && currentPage == 2.1) {
                            database.ref("users/" + user.uid).update({ lesson: 1.1 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson2/lesson2-2.html" }
                            });;
                        } else if (progress == 1.1 && currentPage == 2.2) {
                            database.ref("users/" + user.uid).update({ lesson: 1.2 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson2/lesson2-3.html" }
                            });;
                        } else if (progress == 1.2 && currentPage == 2.3) {
                            database.ref("users/" + user.uid).update({ lesson: 2 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../Page1/3/Page1.html" }
                            });;
                        } else if (progress == 2 && currentPage == 3.1) {
                            database.ref("users/" + user.uid).update({ lesson: 2.1 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson3/lesson3-2.html" }
                            });;
                        } else if (progress == 2.1 && currentPage == 3.2) {
                            database.ref("users/" + user.uid).update({ lesson: 2.2 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson3/lesson3-3.html" }
                            });;
                        } else if (progress == 2.2 && currentPage == 3.3) {
                            database.ref("users/" + user.uid).update({ lesson: 2.3 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson3/lesson3-4.html" }
                            });;
                        } else if (progress == 2.3 && currentPage == 3.4) {
                            database.ref("users/" + user.uid).update({ lesson: 3 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../Page1/4/Page1.html" }
                            });;
                        } else if (progress == 3 && currentPage == 4.1) {
                            database.ref("users/" + user.uid).update({ lesson: 3.1 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson4/lesson4-2.html" }
                            });;
                        } else if (progress == 3.1 && currentPage == 4.2) {
                            database.ref("users/" + user.uid).update({ lesson: 3.2 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson4/lesson4-3.html" }
                            });;
                        } else if (progress == 3.2 && currentPage == 4.3) {
                            database.ref("users/" + user.uid).update({ lesson: 3.3 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson4/lesson4-4.html" }
                            });;
                        } else if (progress == 3.3 && currentPage == 4.4) {
                            database.ref("users/" + user.uid).update({ lesson: 3.4 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson4/lesson4-5.html" }
                            });;
                        } else if (progress == 3.4 && currentPage == 4.5) {
                            database.ref("users/" + user.uid).update({ lesson: 3.5 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson4/lesson4-6.html" }
                            });;
                        } else if (progress == 3.5 && currentPage == 4.6) {
                            database.ref("users/" + user.uid).update({ lesson: 3.6 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson4/lesson4-7.html" }
                            });;
                        } else if (progress == 3.6 && currentPage == 4.7) {
                            database.ref("users/" + user.uid).update({ lesson: 4 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../Page1/5/Page1.html" }
                            });;
                        } else if (progress == 4 && currentPage == 5.1) {
                            database.ref("users/" + user.uid).update({ lesson: 4.1 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson5/lesson5-2.html" }
                            });;
                        } else if (progress == 4.1 && currentPage == 5.2) {
                            database.ref("users/" + user.uid).update({ lesson: 4.2 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson5/lesson5-3.html" }
                            });;
                        } else if (progress == 4.2 && currentPage == 5.3) {
                            database.ref("users/" + user.uid).update({ lesson: 4.3 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson5/lesson5-4.html" }
                            });;
                        } else if (progress == 4.3 && currentPage == 5.4) {
                            database.ref("users/" + user.uid).update({ lesson: 5 }).then(function () {
                                document.getElementById("play").onclick = function () { location.href = "../../signin/signin2.html" }
                            });;
                        } else {
                            if (currentPage == 1.1) {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson1/lesson1-2.html" }
                            } else if (currentPage == 1.2) {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson1/lesson1-3.html" }
                            } else if (currentPage == 1.3) {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson1/lesson1-4.html" }
                            }else if (currentPage == 1.4) {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson1/lesson1-5.html" }
                            }else if (currentPage == 1.5) {
                                document.getElementById("play").onclick = function () { location.href = "../../Page1/2/Page1.html" }
                            }else if (currentPage == 2.1) {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson2/lesson2-2.html" }
                            }else if (currentPage == 2.2) {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson2/lesson2-3.html" }
                            }else if (currentPage == 2.3) {
                                document.getElementById("play").onclick = function () { location.href = "../../Page1/3/Page1.html" }
                            }else if (currentPage == 3.1) {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson3/lesson3-2.html" }
                            }else if (currentPage == 3.2) {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson3/lesson3-3.html" }
                            }else if (currentPage == 3.3) {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson3/lesson3-4.html" }
                            }else if (currentPage == 3.4) {
                                document.getElementById("play").onclick = function () { location.href = "../../Page1/4/Page1.html" }
                            }else if (currentPage == 4.1) {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson4/lesson4-2.html" }
                            }else if (currentPage == 4.2) {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson4/lesson4-3.html" }
                            }else if (currentPage == 4.3) {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson4/lesson4-4.html" }
                            }else if (currentPage == 4.4) {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson4/lesson4-5.html" }
                            }else if (currentPage == 4.5) {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson4/lesson4-6.html" }
                            }else if (currentPage == 4.6) {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson4/lesson4-7.html" }
                            }else if (currentPage == 4.7) {
                                document.getElementById("play").onclick = function () { location.href = "../../Page1/5/Page1.html" }
                            }else if (currentPage == 5.1) {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson5/lesson5-2.html" }
                            }else if (currentPage == 5.2) {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson5/lesson5-3.html" }
                            }else if (currentPage == 5.3) {
                                document.getElementById("play").onclick = function () { location.href = "../../page2.1/lesson5/lesson5-4.html" }
                            }else if (currentPage == 5.4) {
                                document.getElementById("play").onclick = function () { location.href = "../../signin/signin2.html" }
                            }
                        }
                    })
                }
            });
        }
    })
    /*end here*/
}