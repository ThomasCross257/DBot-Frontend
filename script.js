const { Server } = require("tls");

function unhideSuggestions(){
    var a = document.getElementById("Suggestions")
    var b = document.getElementById("Welcome")
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
function unhideWelcome(){
    var a = document.getElementById("Suggestions")
    var b = document.getElementById("Welcome")
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
    var b = document.getElementById("Welcome")
    var c = document.getElementById("News")
    var d = document.getElementById("Links")
    if (c.style.display === "none") {
        c.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        d.style.display = "none";
      } else {
        c.style.display = "none";
    }
}
function unhideLinks(){
    var a = document.getElementById("Suggestions")
    var b = document.getElementById("Welcome")
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
function showDetails(){
  var a = document.getElementById("UserTag")
  var b = document.getElementById("UserID")
  var c = document.getElementById("TicketNum")
  var d = document.getElementById("AnswerDropDown")
  var e = document.getElementById("BackButton");
  var f = document.getElementById("TicketInfo");
  if (f.style.display === "none" && e.style.display === "none") {
      f.style.display = "inline-block";
      e.style.display = "inline-block";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
    } else {
      f.style.display = "none";
      e.style.display = "none";
      a.style.display = "inline-block";
      b.style.display = "inline-block";
      c.style.display = "inline-block";
      d.style.display = "inline-block";
  }
}

function SwapModes(){
  var DevMode = document.getElementById("DeveloperMode");
  var UsrMode = document.getElementById("UserMode");
  if(DevMode.style.display === "none"){
    UsrMode.style.display = "none";
    DevMode.style.display = "block";
  }
  else{
    DevMode.style.display = "none";
    UsrMode.style.display = "none";
    UsrMode.style.display = "block";
  }
}

function returnServers(){
  var ServerList = document.getElementById("ServerList");
  var Dashboard = document.getElementById("ServerDashboardMain");
  if(ServerList.style.display === "none"){
    Dashboard.style.display = "none";
    ServerList.style.display = "block";
    document.getElementById("ServerTitle").textContent = "No Server Selected";
  }
  
  else{
    ServerList.style.display = "none";
    Dashboard.style.display = "none";
    ServerList.style.display = "block"
    return;
  }
}
function manageServer(){
  var ServerList = document.getElementById("ServerList");
  var Dashboard = document.getElementById("ServerDashboardMain");
  var Name = document.getElementById("ServerListOption")
  if(Dashboard.style.display == "none"){
    Dashboard.style.display = "block";
    ServerList.style.display = "none";
    document.getElementById("ServerTitle").textContent = Name.innerText;
  }
  else{
    ServerList.style.display = "none";
    Dashboard.style.display = "none";
    Dashboard.style.display = "block"
    document.getElementById("ServerTitle").textContent = Name.innerText;
    console.log("Done");
    return;
  }
}