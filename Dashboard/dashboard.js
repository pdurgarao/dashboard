function openSlide() {
    document.getElementById('sidebar-list-menu').style.width = "280px";
    document.getElementById('wrapper-mobile').style.marginLeft = "0px";
    document.body.style.backgroundColor ="rgba(0,0,0,0.2)";
    // document.getElementById("overlay").style.display = "block";
}


function closeSide() {
    document.getElementById('sidebar-list-menu').style.width = "0px";
    document.getElementById('wrapper-mobile').style.marginLeft = "0px";
    document.body.style.backgroundColor = "initial";
}