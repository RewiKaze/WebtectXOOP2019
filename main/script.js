function litpage() {
    let rp = document.getElementById("ii");
    let trp = document.getElementById("staticback");
    let lp = document.getElementById("lit");
    let tiii = document.getElementById("titleii");
    
    if(rp.className == "col-sm-5"){
        rp.className = "ii";
        rp.style.width = "1px";
        trp.style.display = "none";
        tiii.style.display = "none";
        rp.style.left = "100vw";
        lp.style.left = "60%";
    }
    else{
        lp.style.left = "0vw";
        lp.style.right = "90vw";
        rp.className = "col-sm-5";
        rp.style.width = "40vw";
        rp.style.left = "0vw";
        trp.style.display = "grid"
        tiii.style.display = "block";
    }
} 