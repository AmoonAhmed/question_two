function displayMessage(){
    var FN = document.getElementById("FN");
    var LN = document.getElementById("LN");
    alert("Congratultions " + FN + LN + " you are now signed up!");
}
document.getElementById("Button").addEventListener("click",displayMessage);