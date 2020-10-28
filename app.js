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

var caMemoustille = document.createElement("audio");
caMemoustille.src = "sons/ca-memoustille.mp3";

var entameMaisPasMort = document.createElement("audio");
entameMaisPasMort.src = "sons/entame-mais-pas-mort.mp3";

var grandSoif = document.createElement("audio");
grandSoif.src = "sons/grand-soif.mp3";

var grosCon = document.createElement("audio");
grosCon.src = "sons/gros-con.mp3";

var jsuisBienLa = document.createElement("audio");
jsuisBienLa.src = "sons/je-suis-bien-la.mp3";

var larmeALoeil = document.createElement("audio");
larmeALoeil.src = "sons/larme-a-loeil.mp3";

var leDemarreur = document.createElement("audio");
leDemarreur.src = "sons/le-demarreur.mp3";

var pardon = document.createElement("audio");
pardon.src = "sons/pardon.mp3";

var topTop = document.createElement("audio");
topTop.src = "sons/top-top.mp3";

var tuPuDuCul = document.createElement("audio");
tuPuDuCul.src = "sons/tu-pu-du-cul.mp3";

function play(son, i){
    let sonToPlay = son
    let duration = sonToPlay.duration;
    if(!sonToPlay.paused){
        sonToPlay.pause();
        sonToPlay.currentTime = 0;
        playClass(document.getElementById("playbutton"+i));
    }else{
        sonToPlay.play();
        pauseClass(document.getElementById("playbutton"+i));
        setTimeout(function(){
            if(sonToPlay.currentTime > duration*0.80){
                playClass(document.getElementById("playbutton"+i));
            }
        }, duration*1000);
    }
}

function pauseClass(element){
    element.classList.remove("fa-play-circle");
    element.classList.add("fa-pause-circle");
}

function playClass(element){
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
}