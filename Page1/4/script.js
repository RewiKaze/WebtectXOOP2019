function description(i){
    let d1 = document.getElementById("Content1");
    let d2 = document.getElementById("Content2");
    let db1 = document.getElementById("db1");
    let db2 = document.getElementById("db2");
    if(i == 1){
        d1.style.display = "block";
        db1.style.backgroundColor = "#ffffe0";
        d2.style.display = "none";
        db2.style.backgroundColor = "#ffffe0";
        db1.style.boxShadow = "3px 5px 15px 3px #E8E9BD inset";
        db2.style.boxShadow = "";
    }
    else{
        d1.style.display = "none";
        db1.style.backgroundColor = "#ffffe0";
        db2.style.boxShadow = "3px 5px 15px 3px #E8E9BD inset";
        d2.style.display = "block";
        db2.style.backgroundColor = "#ffffe0";
        db1.style.boxShadow = "";
    }
}