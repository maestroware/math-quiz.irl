function g(){
    var1 = document.getElementById("1").value;
    var2 = document.getElementById("2").value;
    localStorage.setItem("firstperson", var1)
    localStorage.setItem("secondperson", var2)
    window.location = "gp.html"
}