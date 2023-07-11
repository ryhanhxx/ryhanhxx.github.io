function toggleImageDisplayUi() {
    var x = document.getElementById("idImg1");
    var y = document.getElementById("idImg2");

    if (x.style.display === "none") {
        
    } else {
        y.style.display = "flex";
        x.style.display = "none";
    }
}

function toggleImageDisplayVec(){
    var x = document.getElementById("idImg1");
    var y = document.getElementById("idImg2");

    if (y.style.display === "none") {
        
    } else {
        y.style.display = "none";
        x.style.display = "flex";
    }
}