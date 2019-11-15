function showUserName() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("user sign in");
            let info_user = firebase.auth().currentUser;
            var database = firebase.database();
            if (info_user) {
                document.getElementById("show-username").innerHTML = "Hello, <mark>" + user.displayName + "</mark>";
                database.ref().child('users').orderByChild('email').equalTo(user.email).once("value", check => {
                    if (check.exists()) {
                        database.ref("users/" + user.uid).once("value").then(function (snapshot) {
                            var progress = snapshot.val().lesson;
                            console.log(snapshot.val().lesson);
                            document.getElementsByClassName("success")[0].style.width = parseInt(progress / 5 * 100) + "%";
                            document.getElementsByClassName("boxsuccess")[0].innerHTML = parseInt(progress / 5 * 100) + "%";
                            var percent = parseInt(progress / 5 * 100);
                            if(percent<20){
                                document.getElementById("progress-text").innerHTML = "<center>ยินดีต้อนรับสมาชิกใหม่ มาเริ่มเรียนกันดีกว่า 🎉</center>"
                            }else if(percent>=20 && percent < 50){
                                document.getElementById("progress-text").innerHTML = "<center>เรียนได้นิดนึงแล้ว พยายามเข้า! 💪</center>";
                            }else if (percent >= 50 && percent < 70){
                                document.getElementById("progress-text").innerHTML = "<center>ถึงครึ่งทางแล้วนะ! มาเรียนกันต่อเลย! 👍</center>";
                            }else if (percent >= 70 && percent < 100){
                                document.getElementById("progress-text").innerHTML = "<center>ใกล้จบแล้วพยายามอีกนิดนึง!! 👏👏</center>";
                            }else{
                                document.getElementById("progress-text").innerHTML = "<center>🎊ยินดีด้วยคุณเรียนจบแล้ว🎊 <br> สามารถย้อนไปเรียนบทเก่าๆได้นะ</center>";
                            }
                        })
                    } else {
                        writeUserData(user.displayName, user.email, user.uid);
                        console.log("Write New Data");
                    }
                })


            }
        } else {
            console.log("not signed");
            window.location.href = "../index.html";
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

function resume() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var database = firebase.database();
            database.ref().child('users').orderByChild('email').equalTo(user.email).once("value", check => {
                if (check.exists()) {
                    database.ref("users/" + user.uid).once("value").then(function (snapshot) {
                        var progress = snapshot.val().lesson;
                        if (progress >= 1 & progress < 2) {
                            window.location.href = "../Page1/2/Page1.html";
                        } else if (progress >= 2 & progress < 3) {
                            window.location.href = "../Page1/3/Page1.html";
                        } else if (progress >= 3 & progress < 4) {
                            window.location.href = "../Page1/4/Page1.html";
                        } else if (progress >= 4 & progress < 5) {
                            window.location.href = "../Page1/5/Page1.html";
                        } else {
                            window.location.href = "../Page1/1/Page1.html";
                        }
                    })
                }
            });
        }
    });
}