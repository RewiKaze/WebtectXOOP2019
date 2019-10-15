function litpage() {
    let rp = document.getElementById("ii");
    let trp = document.getElementById("static");
    let lp = document.getElementById("iii");
    if (rp.style.width == "40%") {
        rp.style.left = "100%";
        rp.style.width = "1px";
        trp.style.display = "none"
        lp.style.width = "99.8%";
    }
    else {
        rp.style.width = "40%";
        
        lp.style.width = "58%";
    }

} 

function profile(){
    
}