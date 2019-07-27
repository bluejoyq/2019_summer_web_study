let t = document.getElementById("target");
t.addEventListener('click', change);
function change(){
    let string = document.getElementById("text");
    string.innerText = "Now, I am a web Master!";
}