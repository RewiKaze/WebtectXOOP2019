function litpage() {
    let rp = document.getElementById("ii");
    let trp = document.getElementById("staticback");
    let lp = document.getElementById("iii");
    if (rp.style.width == "40vw") {
        rp.style.left = "100%";
        rp.style.width = "1px";
        trp.style.display = "none"
        lp.style.width = "99.8%";
    }
    else {
        rp.style.width = "40%";
        trp.style.display = "block"
        lp.style.width = "58%";
    }

} 