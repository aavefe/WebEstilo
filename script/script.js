function desplegableVisible(){

    var x = document.getElementById("desplegable");
    if (x.className === "desplegable") {
        x.className += " barra";
      } else {
        x.className = "desplegable";    
    }
}