function litpage() {
    let rp = document.getElementById("ii");
    let trp = document.getElementById("staticback");
    let lp = document.getElementById("lit");
    let tiii = document.getElementById("titleii");
    
    if(rp.className == "ii"){
        rp.className = "col-sm-5";
       
        trp.style.display = "grid";
 
        tiii.style.display = "block";
     
    }
    else{
        rp.className = "ii";
        rp.style.right = "0vw";
        rp.style.left = "100vw";
        trp.style.display = "none";
        rp.style.width = "1px";
        tiii.style.display = "none";
        
    }
   
} 