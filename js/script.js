function toggleImageDisplayUi() {
    var x = document.getElementById("idImg1");
    var y = document.getElementById("idImg2");
    var z = document.getElementById("idImg3");
    var x1 = document.getElementById("idImg4");
    var x2 = document.getElementById("idImg5");
    var x3 = document.getElementById("idImg6");

    // if (x.style.display === "none" || y.style.display === "none") {
    if (z.style.display === "none"){ 

    } else {
        y.style.display = "flex";
        x.style.display = "flex";
        z.style.display = "none";
        x1.style.display = "none";
        x2.style.display = "none";
        x3.style.display = "none";
    }
}

function toggleImageDisplayVec(){
    var x = document.getElementById("idImg1");
    var y = document.getElementById("idImg2");
    var z = document.getElementById("idImg3");
    var x1 = document.getElementById("idImg4");
    var x2 = document.getElementById("idImg5");
    var x3 = document.getElementById("idImg6");
    
    if (x.style.display === "none") {
        
    } else {
        y.style.display = "none";
        x.style.display = "none";
        z.style.display = "flex";
        x1.style.display = "flex";
        x2.style.display = "flex";
        x3.style.display = "flex";
    }
}

