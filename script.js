function unhideSuggestions(){
    var a = document.getElementById("Suggestions")
    var b = document.getElementById("Bugs")
    var c = document.getElementById("News")
    var d = document.getElementById("Links")
    if (a.style.display === "none") {
        a.style.display = "block";
        d.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
      } else {
        a.style.display = "none";
    }
}
function unhideBugs(){
    var a = document.getElementById("Suggestions")
    var b = document.getElementById("Bugs")
    var c = document.getElementById("News")
    var d = document.getElementById("Links")
    if (b.style.display === "none") {
        b.style.display = "block";
        a.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
      } else {
        b.style.display = "none";
    }
}
function unhideNews(){
    var a = document.getElementById("Suggestions")
    var b = document.getElementById("Bugs")
    var c = document.getElementById("News")
    var d = document.getElementById("Links")
    if (d.style.display === "none") {
        d.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
      } else {
        d.style.display = "none";
    }
}
function unhideLinks(){
    var a = document.getElementById("Suggestions")
    var b = document.getElementById("Bugs")
    var c = document.getElementById("News")
    var d = document.getElementById("Links")
    if (d.style.display === "none") {
        d.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
      } else {
        d.style.display = "none";
    }
}