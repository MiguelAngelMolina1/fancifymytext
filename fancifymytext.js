
function makeBigger() {
    document.getElementById("myText").style.fontSize = "24pt";
}

//Applys styling to radio buttons 
function applyStyle() {
    var el = document.getElementById("myText");

    if(document.getElementById("fancyShmancy").checked) {
        el.style.fontWeight = "bold";
        el.style.color = "blue ";
        el.style.textDecoration = "underline";

    } else {
        el.style.fontWeight = "normal";
        el.style.color = "";
        el.style.textDecoration = "none"
    }
}

function mooify() {
    //Take Element
    var el = document.getElementById("myText");
    var text = el.value.toUpperCase();

    //Split by sentence and words
    var sentences = text.split(".");
    sentences = sentences.map(function(s) {
        if(s.trim().length === 0) return s; //No More Editing
        var words = s.trim().split(" ");
        words[words.length-1] += "-MOO"; //Append -MOO to the end of each word
        return " " + words.join(" ");
    });

    el.value = sentences.join(".");

}