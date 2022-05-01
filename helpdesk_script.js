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