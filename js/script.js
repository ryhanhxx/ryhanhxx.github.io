function toggleImageDisplayUi() {
    var x = document.getElementById("idImg1");
    var y = document.getElementById("idImg2");
    var z = document.getElementById("idImg3");
    var x1 = document.getElementById("idImg4");

    // if (x.style.display === "none" || y.style.display === "none") {
    if (z.style.display === "none"){ 

    } else {
        y.style.display = "flex";
        x.style.display = "flex";
        z.style.display = "none";
        x1.style.display = "none";
    }
}

function toggleImageDisplayVec(){
    var x = document.getElementById("idImg1");
    var y = document.getElementById("idImg2");
    var z = document.getElementById("idImg3");
    var x1 = document.getElementById("idImg4");

    if (x.style.display === "none") {
        
    } else {
        y.style.display = "none";
        x.style.display = "none";
        z.style.display = "flex";
        x1.style.display = "flex";
    }
}

