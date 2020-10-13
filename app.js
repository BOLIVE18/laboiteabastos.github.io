var ehLautreEh = document.createElement("audio");
ehLautreEh.src = "sons/eh-lautre-eh.mp3";

var hugo = document.createElement("audio");
hugo.src = "sons/hugo.mp3";

var ilEstOuMonTel = document.createElement("audio");
ilEstOuMonTel.src = "sons/il-est-ou-mon-telephone.mp3";

var ohLaGueule = document.createElement("audio");
ohLaGueule.src = "sons/oh-la-gueule.mp3";

var okMonFrere = document.createElement("audio");
okMonFrere.src = "sons/ok-mon-frere.mp3";

var ouinOuin = document.createElement("audio");
ouinOuin.src = "sons/ouin-ouin.mp3";

var unVolant = document.createElement("audio");
unVolant.src = "sons/un-volant-et-quatre-roues.mp3";

var weMaisLaNon = document.createElement("audio");
weMaisLaNon.src = "sons/wé-mais-la-non.mp3";

function play(son){
    if(!son.paused){
        son.pause();
        son.currentTime = 0;
    }else{
        son.play();
    }
}