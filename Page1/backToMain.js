function backToMain() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            window.location.href = "../../signin/signin2.html";
        } else {
            window.location.href = "../../main/index.html";
        }
    });
}
function start(x) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            if (x == 1) {
                window.location.href = "../../page2.1/lesson1/lesson1-1.html";
            } else if (x == 2) {
                window.location.href = '../../page2.1/lesson2/lesson2-1.html';
            }else if (x == 3) {
                window.location.href = '../../page2.1/lesson3/lesson3-1.html';
            }else if (x == 4) {
                window.location.href = '../../page2.1/lesson4/lesson4-1.html';
            }else if (x == 5) {
                window.location.href = '../../page2.1/lesson5/lesson5-1.html';
            }
        } else {
            window.location.href = "../../signin/signin.html"
        }
    });
}