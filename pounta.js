var score = 0;

var time = 0;

var interval = null;

var bonusT = ["5","25","38","49","57","67","76","89","98","108","112"];

var bonus2 = 0;

var hasard = Math.floor(Math.random()*17);

var yourScore = document.createElement("div");
document.body.appendChild(yourScore);
yourScore.classList.add("score");

var ScoreTotal = document.createElement("div");
document.body.appendChild(ScoreTotal);
ScoreTotal.classList.add("scoreTotal");

var navbar = document.createElement("navbar");
document.body.appendChild(navbar);
navbar.classList.add("navbar");

var bouttonNoob = document.createElement("button");
navbar.appendChild(bouttonNoob);
bouttonNoob.classList.add("bouttonNoob");
bouttonNoob.textContent = "Noob";
bouttonNoob.addEventListener("click", clique);

var bouttonHardcore = document.createElement("button");
navbar.appendChild(bouttonHardcore);
bouttonHardcore.classList.add("bouttonHardcore");
bouttonHardcore.textContent = "Hardcore";
bouttonHardcore.addEventListener("click", clique2);

var bouttonUltra = document.createElement("button");
navbar.appendChild(bouttonUltra);
bouttonUltra.classList.add("bouttonUltra");
bouttonUltra.textContent = "Ultraviolence";
bouttonUltra.addEventListener("click", clique3);

var youLoose = document.createElement("div");
document.body.appendChild(youLoose);
youLoose.classList.add("loose");

var youWin = document.createElement("div");
document.body.appendChild(youWin);
youWin.classList.add("win");

var temps = document.createElement("div");
document.body.appendChild(temps);
temps.classList.add("temps");

var acceuil = document.createElement("div");
document.body.appendChild(acceuil);
acceuil.classList.add("acceuil");

acceuil.innerHTML = "Welcome to" + "</br>" + "Pounta Click !!!";

var noob = new Audio("son/noob.mp3");
var hardcore = new Audio("son/hardcore2.mp3");
var ultra = new Audio("son/ultra2.mp3");
var points = new Audio("son/soundEffect.wav");
var dead = new Audio("son/dead.wav");
var victory = new Audio("son/victory.mp3");
var gameOver = new Audio("son/gameOver.mp3");
var acceuilAudio = new Audio("son/acceuil.mp3");
var nyanCat = new Audio("son/rainbow.mp3");

acceuilAudio.play();

function reload(){
    var bouttonReload = document.createElement("button");
    navbar.appendChild(bouttonReload);
    bouttonReload.textContent="Start menu"
    bouttonReload.classList.add("bouttonReload");

    bouttonReload.addEventListener("dblclick", function window(){
        document.location.reload();
    })
}


function rainbow(){
    
    if(score == bonusT[bonus2]){

        bonus2++;

        nyanCat.play();
        noob.volume = 0;
        ultra.volume = 0;
        hardcore.volume = 0;

        var rainbow = document.createElement("div");
        document.body.appendChild(rainbow);
        rainbow.classList.add("rainbow");
        rainbow.addEventListener("click", bonus);

        rainbow.style.position = "absolute";

        function loop(){
            $(".rainbow").animate(
                {
                    left:Math.floor(Math.random()*100) + "%",
                    top:Math.floor(Math.random()*100) + "%",
        }, 2000 , loop)
        }

        loop();
    }

    function bonus(){
        (event.target).remove();
        score += 10;
        time += 5;
        nyanCat.pause();
        noob.volume = 1;
        ultra.volume = 1;
        hardcore.volume = 1;
    }
}


function song(son){
    

    if(son === "noob")
    {
        noob.play();
        hardcore.pause();
        ultra.pause();
        victory.pause();
        dead.pause();
        gameOver.pause();
        acceuilAudio.pause();
    }
    else if(son === "hardcore"){
        noob.pause();
        hardcore.play();
        ultra.pause();
        victory.pause();
        dead.pause();
        gameOver.pause();
        acceuilAudio.pause();
    }
    else if(son === "ultra"){
        noob.pause();
        hardcore.pause();
        ultra.play();
        victory.pause();
        dead.pause();
        gameOver.pause();
        acceuilAudio.pause();
    }
    else if(son === "perdu"){
        dead.play();
        noob.pause();
        hardcore.pause();
        ultra.pause();
        victory.pause();
        gameOver.pause();
        acceuilAudio.pause();
    }
    else if(son === "victory"){
        dead.pause();
        noob.pause();
        hardcore.pause();
        ultra.pause();
        victory.play();
        gameOver.pause();
        acceuilAudio.pause();
    }
    else if(son === "gameover"){
        gameOver.play();
        noob.pause();
        hardcore.pause();
        ultra.pause();
        victory.pause();
        acceuilAudio.pause();
    }
    else if(son === "rainbow"){
        gameOver.pause();
        noob.pause();
        hardcore.pause();
        ultra.pause();
        victory.pause();
        acceuilAudio.pause();
        nyanCat.play();
    }
}


// Niveau NOOB

function clique()
{
    song("noob");

    bouttonHardcore.style.display="none";

    bouttonNoob.style.display="none";

    bouttonUltra.style.display="none";

    reload();

    time = 60;

    score = 0;

    acceuil.style.display="none";

    youLoose.innerHTML= "";

    youWin.innerHTML="";

    yourScore.innerHTML="";

    ScoreTotal.innerHTML="";

    

    let formes = document.querySelectorAll(".forme, .noire");

    if(interval != null){
        clearInterval(interval);
        temps.innerHTML="";
    }

    if(formes != 0 && noire != 0)
    {

        formes.forEach(
            function DestroyAll(e)
            {
                e.remove();
            }
        );

    }

    for(i=0; i<3; i++)
    {

        var noire = document.createElement("div");
        document.body.appendChild(noire);
        noire.classList.add("noire");

        noire.style.position = "absolute";
        noire.style.top = Math.floor(Math.random()*100) + "%";
        noire.style.left = Math.floor(Math.random()*100) + "%";

        noire.style.width = Math.floor(Math.random()*80) + "px";
        noire.style.height = noire.style.width;

        function loop(){
            $(".noire").animate(
                {
                    left:Math.floor(Math.random()*100) + "%",
                    top:Math.floor(Math.random()*100) + "%",
        }, 3000 , loop)
        }

        loop();

        noire.addEventListener("click", perdu);

        function perdu()
        {
            song("perdu");

            let all = document.querySelectorAll(".forme, .noire");
            
            if(all.length != 0){
                all.forEach(
                    function(d)
                    {
                    d.remove();
                    }
                )
            }

            score.innerHTML="";

            finish();

        }

    }

    for(i=0; i<17; i++)
    {

        var forme = document.createElement("div");
        document.body.appendChild(forme);
        forme.classList.add("forme");

        forme.style.position = "absolute";
        forme.style.top = Math.floor(Math.random()*100) + "%";
        forme.style.left = Math.floor(Math.random()*100) + "%";

        forme.style.width = Math.floor(Math.random()*40)+ "px";
        forme.style.height = forme.style.width;

        let r = Math.floor(Math.random()*255 + 10);
        let g = Math.floor(Math.random()*255 + 10);
        let b = Math.floor(Math.random()*255 + 10);

        forme.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

        function loop(){
            $(".forme").animate(
                {
                    left:Math.floor(Math.random()*100) + "%",
                    top:Math.floor(Math.random()*100) + "%",
        }, 4000 , loop)
        }

        loop();

        forme.addEventListener("click", detruit);

        function detruit()
        {
            points.play();
            score++;
            yourScore.innerHTML = "Score : " + score;

            (event.target).remove();

            // let nbrBoules = document.querySelectorAll(".forme, .noire");
            // function deplacer(e)
            // {
            //     e.style.top = Math.floor(Math.random()*100) + "%";
            //     e.style.left = Math.floor(Math.random()*100) + "%";
            // }
            // nbrBoules.forEach(
            //     function (d)
            //     {
            //         deplacer(d);
            //     }
            // );

                let all = document.querySelectorAll(".forme");
            
                if(all.length == 0){
                    let all = document.querySelectorAll(".forme, .noire, .rainbow");
            
                    if(all.length != 0){
                        all.forEach(
                                function(d)
                                {
                                d.remove();
                                }
                            )
                        }

                    youWin.innerHTML = "You win !!!!";

                    song("victory");

                    clearInterval(interval);

                    temps.innerHTML="";

                    yourScore.innerHTML="";
                
                    ScoreTotal.innerHTML= "Your total : " + ((score + (time*10)) * 10) + " en " + (60 - time) + " seconde(s)";
                }
            
                rainbow();
        }

    }

    interval = setInterval(bip, 1000);

    function finish() {
        clearInterval(interval);

        song("gameover");

        youLoose.innerHTML ="You lose !!!!" + "</br>" + "Try Again !!!!";

        temps.innerHTML="";	

        yourScore.innerHTML="";

        let formes = document.querySelectorAll(".forme, .noire, .rainbow");

        if(formes.length != 0){
                formes.forEach(
                    function(d){
                        d.remove();
                    }
                );
        }

        ScoreTotal.innerHTML= "Your total : " + (score);

    }

    function bip() {
        time--;
        if(time == 0) finish();
        else {	
            temps.innerHTML = "Time : " + time + "sec";
        }	
    }

}

// Niveau NOOB

// Niveau HARDCORE

function clique2()
{

    song("hardcore");

    bouttonHardcore.style.display="none";

    bouttonNoob.style.display="none";

    bouttonUltra.style.display="none";

    reload();

    time = 46;

    score = 0;

    acceuil.style.display="none";

    youLoose.innerHTML= "";

    youWin.innerHTML="";

    yourScore.innerHTML="";

    ScoreTotal.innerHTML="";

    let formes = document.querySelectorAll(".forme, .noire");

    if(interval != null){
        clearInterval(interval);
        temps.innerHTML="";
    }

    if(formes != 0 && noire != 0)
    {

        formes.forEach(
            function DestroyAll(e)
            {
                e.remove();
            }
        );

    }

    for(i=0; i<20; i++)
    {

        var noire = document.createElement("div");
        document.body.appendChild(noire);
        noire.classList.add("noire");

        noire.style.position = "absolute";
        noire.style.top = Math.floor(Math.random()*100) + "%";
        noire.style.left = Math.floor(Math.random()*100) + "%";

        noire.style.width = Math.floor(Math.random()*(80)) + "px";
        noire.style.height = noire.style.width;

        function loop(){
            $(".noire").animate(
                {
                    left:Math.floor(Math.random()*100) + "%",
                    top:Math.floor(Math.random()*100) + "%",
        }, 3000 , loop)
        }

        loop();

        noire.addEventListener("click", perdu);

        function perdu()
        {
            song("perdu");

            let all = document.querySelectorAll(".forme, .noire");
            
            if(all.length != 0){
                all.forEach(
                    function(d)
                    {
                    d.remove();
                    }
                )
            }

            score.innerHTML="";

            finish();

        }

    }


    for(i=0; i<60; i++)
    {

        var forme = document.createElement("div");
        document.body.appendChild(forme);
        forme.classList.add("forme");

        forme.style.position = "absolute";
        forme.style.top = Math.floor(Math.random()*100) + "%";
        forme.style.left = Math.floor(Math.random()*100)+ "%";

        forme.style.width = Math.floor(Math.random()*60)+ "px";
        forme.style.height = forme.style.width;

        let r = Math.floor(Math.random()*255 + 10);
        let g = Math.floor(Math.random()*255 + 10);
        let b = Math.floor(Math.random()*255 + 10);

        forme.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

        function loop(){
            $(".forme").animate(
                {
                    left:Math.floor(Math.random()*100) + "%",
                    top:Math.floor(Math.random()*100) + "%",
        }, 5000 , loop)
        }

        loop();

        forme.addEventListener("click", detruit);


        function detruit()
        {
            points.play();
            score++;
            yourScore.innerHTML = "Score : " + score;

            (event.target).remove();

            // let nbrBoules = document.querySelectorAll(".forme, .noire");
            // function deplacer(e)
            // {
            //     e.style.top = Math.floor(Math.random()*100) + "%";
            //     e.style.left = Math.floor(Math.random()*100) + "%";
            // }
            // nbrBoules.forEach(
            //     function (d)
            //     {
            //         deplacer(d);
            //     }
            // );

                let all = document.querySelectorAll(".forme");
            
                if(all.length == 0){
                    let all = document.querySelectorAll(".forme, .noire, .rainbow");

                    if(all.length != 0){
                        all.forEach(
                            function(d)
                            {
                                d.remove();
                            }
                        )
                    }

                    song("victory")

                    youWin.innerHTML = "You win !!!!";

                    clearInterval(interval);

                    temps.innerHTML="";

                    yourScore.innerHTML="";
                
                    ScoreTotal.innerHTML= "Your total : " + ((score + time) * 100) + " en " + (45 - time) + " seconde(s)";
                    
                }

                rainbow();
                
        }

    }

    interval = setInterval(bip, 1000);

    function finish() {
        clearInterval(interval);

        song("gameover");

        youLoose.innerHTML ="You lose !!!!" + "</br>" + "Try Again !!!";

        temps.innerHTML="";
        
        yourScore.innerHTML="";

        let formes = document.querySelectorAll(".forme, .noire, .rainbow");

        if(formes.length != 0){
                formes.forEach(
                    function(d){
                        d.remove();
                    }
                );
        }

        ScoreTotal.innerHTML= "Your total : " + (score);

    }

    function bip() {
        time--;
        if(time == 0) finish();
        else {	
            temps.innerHTML = "Time : " + time + "sec";
        }	
    }

}

// Niveau HARDCORE

// Niveau ULTRAVIOLENCE!!!!

function clique3()
{

    song("ultra");

    bouttonHardcore.style.display="none";

    bouttonNoob.style.display="none";

    bouttonUltra.style.display="none";

    reload();

    time = 101;

    score = 0;

    acceuil.style.display="none";

    youLoose.innerHTML= "";

    youWin.innerHTML="";

    yourScore.innerHTML="";

    ScoreTotal.innerHTML="";

    let formes = document.querySelectorAll(".forme, .noire");

    if(interval != null){
        clearInterval(interval);
        temps.innerHTML="";
    }

    if(formes != 0 && noire != 0)
    {

        formes.forEach(
            function DestroyAll(e)
            {
                e.remove();
            }
        );

    }

    for(i=0; i<70; i++)
    {

        var noire = document.createElement("div");
        document.body.appendChild(noire);
        noire.classList.add("noire");

        noire.style.position = "absolute";
        noire.style.top = Math.floor(Math.random()*100) + "%";
        noire.style.left = Math.floor(Math.random()*100) + "%";

        noire.style.width = Math.floor(Math.random()*(60)) + "px";
        noire.style.height = noire.style.width;

        function loop(){
            $(".noire").animate(
                {
                    left:Math.floor(Math.random()*100) + "%",
                    top:Math.floor(Math.random()*100) + "%",
        }, 3000 , loop)
        }

        loop();

        noire.addEventListener("click", perdu);

        function perdu()
        {
            song("perdu");
            
            let all = document.querySelectorAll(".forme, .noire");
            
            if(all.length != 0){
                all.forEach(
                    function(d)
                    {
                    d.remove();
                    }
                )
            }

            finish();

        }

    }


    for(i=0; i<130; i++)
    {

        var forme = document.createElement("div");
        document.body.appendChild(forme);
        forme.classList.add("forme");

        forme.style.position = "absolute";
        forme.style.top = Math.floor(Math.random()*100) + "%";
        forme.style.left = Math.floor(Math.random()*100) + "%";

        forme.style.width = Math.floor(Math.random()*48)+ "px";
        forme.style.height = forme.style.width;

        let r = Math.floor(Math.random()*255 + 10);
        let g = Math.floor(Math.random()*255 + 10);
        let b = Math.floor(Math.random()*255 + 10);

        forme.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

        function loop(){
            $(".forme").animate(
                {
                    left:Math.floor(Math.random()*100) + "%",
                    top:Math.floor(Math.random()*100) + "%",
        }, 4000 , loop)
        }

        loop();

        forme.addEventListener("click", detruit);


        function detruit()
        {
            points.play();
            score++;
            yourScore.innerHTML = "Score : " + score;

            (event.target).remove();

            // let nbrBoules = document.querySelectorAll(".forme, .noire");
            // function deplacer(e)
            // {
            //     e.style.top = Math.floor(Math.random()*100) + "%";
            //     e.style.left = Math.floor(Math.random()*100) + "%";
            // }
            // nbrBoules.forEach(
            //     function (d)
            //     {
            //         deplacer(d);
            //     }
            // );

                let all = document.querySelectorAll(".forme");
            
                if(all.length == 0){
                    let all = document.querySelectorAll(".forme, .noire, .rainbow");
            
                    if(all.length != 0){
                        all.forEach(
                            function(d)
                            {
                                d.remove();
                            }
                        )
                    }

                    song("victory")

                    youWin.innerHTML = "You win !!!!";

                    clearInterval(interval);

                    temps.innerHTML="";

                    yourScore.innerHTML="";
                
                    ScoreTotal.innerHTML= "Your total : " + ((score + time) * 1000) + " en " + (30 - time) + " seconde(s)";
                    
                }

                rainbow();
                
        }

    }

    interval = setInterval(bip, 1000);

    function finish() {
        clearInterval(interval);

        song("gameover");

        youLoose.innerHTML ="You lose !!!!" + "</br>" + "Try Again !!!";

        temps.innerHTML="";
        
        yourScore.innerHTML="";

        let formes = document.querySelectorAll(".forme, .noire, .rainbow");

        if(formes.length != 0){
                formes.forEach(
                    function(d){
                        d.remove();
                    }
                );
        }

        ScoreTotal.innerHTML= "Your total : " + (score);

    }

    function bip() {
        time--;
        if(time == 0) finish();
        else {	
            temps.innerHTML = "Time : " + time + "sec";
        }	
    }

}

// Niveau ULTRAVIOLENCE!!!!