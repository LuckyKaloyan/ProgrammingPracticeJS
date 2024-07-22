function toggle() {


if(document.getElementsByClassName("button")[0].textContent=="MORE"){
    document.getElementsByClassName("button")[0].textContent="LESS";
    document.getElementById("extra").style.display="block";
}else{
    document.getElementsByClassName("button")[0].textContent="MORE";
    document.getElementById("extra").style.display="none";
}

}