function toggleImageDisplayUi() {
    var x = document.getElementById("idImg1");
    var y = document.getElementById("idImg2");
    var z = document.getElementById("idImg3");

    if (x.style.display === "none" || y.style.display === "none") {
        
    } else {
        y.style.display = "none";
        x.style.display = "none";
        z.style.display = "flex";
    }
}

function toggleImageDisplayVec(){
    var x = document.getElementById("idImg1");
    var y = document.getElementById("idImg2");
    var z = document.getElementById("idImg3");

    if (z.style.display === "none") {
        
    } else {
        y.style.display = "flex";
        x.style.display = "flex";
        z.style.display = "none";
    }
}

