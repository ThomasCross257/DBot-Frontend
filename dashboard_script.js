const fs = require("fs");
const replace = require('replace-in-file');

var GuildID = 00000000000000000; // For testing purposes only.

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
  
  }

function createCommandFile(){
    var Name = document.getElementById("NameCreate").value;
    var Description = document.getElementById("Desccreate").value;
    var Response = document.getElementById("CmdResponse").value;
    fs.copyFile(`./commands/custom/template.js`, `./commands/custom/customCommands/${GuildID}/${Name.toLowerCase()}`);
    const NameOptions = {
        files: `./commands/custom/customCommands/${GuildID}/${Name.toLowerCase()}`,
        from: "demo",
        to: Name.toLowerCase()
    }
    const DescOptions = {
        files: `./commands/custom/customCommands/${GuildID}/${Name.toLowerCase()}`,
        from: "PLACEHOLDER",
        to: Description
    }
    const ResOptions = {
        files: `./commands/custom/customCommands/${GuildID}/${Name.toLowerCase()}`,
        from: "Template. If you are seeing this, you should probably contact a developer",
        to: Response
    }
    try{
        const NameRes = replace(NameOptions);
        const DescRes = replace(DescOptions);
        const ResponseRes = replace(ResOptions);
        console.log(NameRes);
        console.log(DescRes);
        console.log(ResponseRes);
    }
    catch (error){
        console.log("Something went wrong.", error);
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
function createCommand(){
  var ChidDivs = document.getElementById("ChildDivs");
  var CreateCommand = document.getElementById("CMDCreate");
  if(ChidDivs.style.display === "block"){
    ChidDivs.style.display = "none";
    CreateCommand.style.display = "block";
  }
  
  else{
    ChidDivs.style.display = "none";
    CreateCommand.style.display = "none";
    ChidDivs.style.display = "block"
    return;
  }
}
function BackCreate(){
    var ChidDivs = document.getElementById("ChildDivs");
    var CreateCommand = document.getElementById("CMDCreate");
    if(ChidDivs.style.display === "none"){
        CreateCommand.style.display = "none";
        ChidDivs.style.display = "block";
    }
    
    else{
        ChidDivs.style.display = "none";
        CreateCommand.style.display = "none";
        ChidDivs.style.display = "block"
      return;
    }
  }