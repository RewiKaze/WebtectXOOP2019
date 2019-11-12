function description(i){
    let d1 = document.getElementById("Content1");
    let d2 = document.getElementById("Content2");
    let db1 = document.getElementById("db1");
    let db2 = document.getElementById("db2");
    if(i == 1){
        d1.style.display = "block";
        db1.style.backgroundColor = "rgb(176, 237, 238)";
        db1.style.borderLeft = ".25em solid rgb(255, 143, 159)";
        db1.style.color ="rgb(68, 68, 68)";
        d2.style.display = "none";

        db2.style.backgroundColor = "rgb(176, 237, 238)";
        db2.style.borderLeft = "";
        db1.style.boxShadow = "3px 5px 15px 3px rgb(156, 195, 195) inset";
        db2.style.boxShadow = "";
        db2.style.cursor = 'pointer';
        db1.style.cursor = '';
    }
    else{
        d1.style.display = "none";
        db1.style.borderLeft = "";
        db1.style.backgroundColor = "rgb(176, 237, 238)";
        db2.style.borderLeft = ".25em solid rgb(255, 143, 159)";
        db2.style.boxShadow = "3px 5px 15px 3px rgb(156, 195, 195) inset";
        d2.style.display = "block";
        db2.style.backgroundColor = "rgb(176, 237, 238)";
        db1.style.boxShadow = "";
        db2.style.cursor = '';
        db1.style.cursor = 'pointer';
    }
}