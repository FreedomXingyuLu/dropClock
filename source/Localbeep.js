//Loclbeep Beep(beepkind) such as default,1,2

var exec = require('child_process').exec; 
function BEEP(beepkind){
     exec("mplayer ./public/music/"+beepkind+".*");
     console.log("localbeep.tried")
}
module.exports = BEEP;
