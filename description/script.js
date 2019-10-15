function description(i){
    let d1 = document.getElementById("Content1");
    let d2 = document.getElementById("Content2");
    let db1 = document.getElementById("db1");
    let db2 = document.getElementById("db2");
    if(i == 1){
        d1.style.display = "block";
        db1.style.backgroundColor = "gray";
        d2.style.display = "none";
        db2.style.backgroundColor = "rgb(240, 236, 191)";
        db1.style.boxShadow = "3px 5px 15px 3px rgb(46, 46, 46) inset";
        db2.style.boxShadow = "";
    }
    else{
        d1.style.display = "none";
        db1.style.backgroundColor = "rgb(240, 236, 191)";
        db2.style.boxShadow = "3px 5px 15px 3px rgb(46, 46, 46) inset";
        d2.style.display = "block";
        db2.style.backgroundColor = "gray";
        db1.style.boxShadow = "";
    }
}