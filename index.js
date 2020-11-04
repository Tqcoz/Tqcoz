// Made by YouWalkedOff, do not steal and claim it's made by you! 
let msg='YouWalkedOff';document.querySelector('.header').addEventListener('mouseover',e=>{console.log(e);document.querySelector('.header').innerHTML=msg+' <i class="fas fa-toggle-off"></i>'});document.querySelector('.header').addEventListener('mouseout',e=>{document.querySelector('.header').innerHTML=msg+' <i class="fas fa-toggle-on"></i>'});for(x = 0;x < 15; x++){console.log(x + "// **** Made by YouWalkedOff **** \\" + x)}
window.onload = function() {
    var url = new URL((window.location.href).toLowerCase())
    
    console.log();
    switch(url.searchParams.get("selected")){
        case "portfolio":
            document.querySelector("#portfolio").innerHTML = "<li-selected>portfolio</li-selected>"
            break;
        case "github":
            document.querySelector("#github").innerHTML = "<li-selected>github</li-selected>"
            break;
        case "projects":
            document.querySelector("#projects").innerHTML = "<li-selected>projects</li-selected>"
            break;
        default:
            switch(Math.floor((Math.random() * 3) + 1)){
                case 1:
                    document.querySelector("#portfolio").innerHTML = "<li-selected>portfolio</li-selected>"
                    break;
                case 2:
                    document.querySelector("#github").innerHTML = "<li-selected>github</li-selected>"
                    break;
                case 3:
                    document.querySelector("#projects").innerHTML = "<li-selected>projects</li-selected>"
                    break;
            }
            break;
                
            
    }
}