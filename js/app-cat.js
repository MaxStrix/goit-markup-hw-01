
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = function () {
    sleep(2000).then(() => { animes(); });
}

document.write("<div class=\"rana\" style=\"margin-left: -600px;\">");
document.write("    <img  id=\"flapFlap\" src=\"img/giphy.gif\" alt=\"runing cat\" style=\"position: fixed; padding-left: 2600px; z-index: -1; top: 50px;\">");
document.write("    <img  id=\"flapFlop\" src=\"img/giphy.gif\" alt=\"runing cat\" style=\"position: fixed; transform: scaleX(-1); z-index: -1;top: 200px;\">");
document.write("</div>");




function animes() {
         
        let startAni = Date.now(); 
        let secondCatTimer = 0
  
        let timer = setInterval(function() {
            let timePass = Date.now() - startAni;

            if (timePass >= 16000) {
              clearInterval(timer); 
              return;
           }       
              
            draw(timePass);
          
            if (timePass >= 8000) {
              secondCatTimer = timePass - 8400
                drawBack(secondCatTimer);
            }
          }, 20);
   
function draw(timePass) {
  document.getElementById("flapFlap").style.marginLeft = -timePass / 2 + 'px';
   
  }

function drawBack(secondCatTimer) {
  document.getElementById("flapFlop").style.marginLeft = secondCatTimer / 2 + 'px';
   
  }
}
  

