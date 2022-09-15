//checkbox in Amigurumi Patterns page//
function myFunction() {
    //for beginner checkbox//
    var checkBox = document.getElementById("beginner");
    var text = document.getElementById("tutorial beginner");
    if (checkBox.checked == true){
    text.style.display = "block";
    } else {
    text.style.display = "none";
    }
    //for intermediate checkbox//
    var checkBox = document.getElementById("intermediate");
    var text = document.getElementById("tutorial intermediate");
    if (checkBox.checked == true){
    text.style.display = "block";
    } else {
    text.style.display = "none";
    }
    //for advanced checkbox//
    var checkBox = document.getElementById("advanced");
    var text = document.getElementById("tutorial advanced");
    if (checkBox.checked == true){
    text.style.display = "block";
    } else {
    text.style.display = "none";
    }
}