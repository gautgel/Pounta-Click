var score = 0;

var time = 0;

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

var interval = null;

var acceuil = document.createElement("div");
document.body.appendChild(acceuil);
acceuil.classList.add("acceuil");

acceuil.innerHTML = "Welcome to" + "</br>" + "Pounta Click !!!";

// Niveau NOOB

function clique()
{
    time = 61;

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
        noire.style.top = Math.floor(Math.random()*(70)+ 20) + "%";
        noire.style.left = Math.floor(Math.random()*(80)+ 10) + "%";

        noire.style.width = Math.floor(Math.random()*(100)) + "px";
        noire.style.height = noire.style.width;

        noire.addEventListener("click", perdu);

        function perdu()
        {
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
        forme.style.top = Math.floor(Math.random()*(70)+20) + "%";
        forme.style.left = Math.floor(Math.random()*(80)+ 10) + "%";

        forme.style.width = Math.floor(Math.random()*40)+ "px";
        forme.style.height = forme.style.width;

        let r = Math.floor(Math.random()*255 + 10);
        let g = Math.floor(Math.random()*255 + 10);
        let b = Math.floor(Math.random()*255 + 10);

        forme.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

        forme.addEventListener("click", detruit);


        function detruit()
        {
            score++;
            yourScore.innerHTML = "Score : " + score;

            (event.target).remove();

            let nbrBoules = document.querySelectorAll(".forme, .noire");

            function deplacer(e)
            {
                e.style.top = Math.floor(Math.random()*(80)+10) + "%";
                e.style.left = Math.floor(Math.random()*(95)) + "%";
            }

            nbrBoules.forEach(
                function (d)
                {
                    deplacer(d);
                }
            );

                let all = document.querySelectorAll(".forme");
            
                if(all.length == 0){
                            let all = document.querySelectorAll(".forme, .noire");
            
                            if(all.length != 0){
                            all.forEach(
                                function(d)
                                {
                                d.remove();
                                }
                            )
                            }

                    youWin.innerHTML = "You win !!!!";

                    clearInterval(interval);

                    temps.innerHTML="";

                    yourScore.innerHTML="";
                
                    ScoreTotal.innerHTML= "Your total : " + (score + time) + " en " + time + " seconde(s)";
                    
                }

            
                
        }

    }

    interval = setInterval(bip, 1000);

    function finish() {
        clearInterval(interval);

        youLoose.innerHTML ="You loose !!!!" + "</br>" + "Try Again !!!";

        temps.innerHTML="";	

        yourScore.innerHTML="";

        let formes = document.querySelectorAll(".forme, .noire");

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
        noire.style.top = Math.floor(Math.random()*(70)+ 20) + "%";
        noire.style.left = Math.floor(Math.random()*(80)+ 10) + "%";

        noire.style.width = Math.floor(Math.random()*(80)) + "px";
        noire.style.height = noire.style.width;

        noire.addEventListener("click", perdu);

        function perdu()
        {
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
        forme.style.top = Math.floor(Math.random()*(70)+20) + "%";
        forme.style.left = Math.floor(Math.random()*(80)+ 10) + "%";

        forme.style.width = Math.floor(Math.random()*60)+ "px";
        forme.style.height = forme.style.width;

        let r = Math.floor(Math.random()*255 + 10);
        let g = Math.floor(Math.random()*255 + 10);
        let b = Math.floor(Math.random()*255 + 10);

        forme.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

        forme.addEventListener("click", detruit);


        function detruit()
        {
            score++;
            yourScore.innerHTML = "Score : " + score;

            (event.target).remove();

            let nbrBoules = document.querySelectorAll(".forme, .noire");

            function deplacer(e)
            {
                e.style.top = Math.floor(Math.random()*(70)+20) + "%";
                e.style.left = Math.floor(Math.random()*(80) + 10) + "%";
            }

            nbrBoules.forEach(
                function (d)
                {
                    deplacer(d);
                }
            );

                let all = document.querySelectorAll(".forme");
            
                if(all.length == 0){
                            let all = document.querySelectorAll(".forme, .noire");
            
                            if(all.length != 0){
                            all.forEach(
                                function(d)
                                {
                                d.remove();
                                }
                            )
                            }

                    youWin.innerHTML = "You win !!!!";

                    clearInterval(interval);

                    temps.innerHTML="";

                    yourScore.innerHTML="";
                
                    ScoreTotal.innerHTML= "Your total : " + (score + time) + " en " + time + " seconde(s)";
                    
                }

            
                
        }

    }

    interval = setInterval(bip, 1000);

    function finish() {
        clearInterval(interval);

        youLoose.innerHTML ="You loose !!!!" + "</br>" + "Try Again !!!";

        temps.innerHTML="";
        
        yourScore.innerHTML="";

        let formes = document.querySelectorAll(".forme, .noire");

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
    time = 31;

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
        noire.style.top = Math.floor(Math.random()*(70)+ 20) + "%";
        noire.style.left = Math.floor(Math.random()*(80)+ 10) + "%";

        noire.style.width = Math.floor(Math.random()*(60)) + "px";
        noire.style.height = noire.style.width;

        noire.addEventListener("click", perdu);

        function perdu()
        {
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
        forme.style.top = Math.floor(Math.random()*(70)+20) + "%";
        forme.style.left = Math.floor(Math.random()*(80)+ 10) + "%";

        forme.style.width = Math.floor(Math.random()*48)+ "px";
        forme.style.height = forme.style.width;

        let r = Math.floor(Math.random()*255 + 10);
        let g = Math.floor(Math.random()*255 + 10);
        let b = Math.floor(Math.random()*255 + 10);

        forme.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

        forme.addEventListener("click", detruit);


        function detruit()
        {
            score++;
            yourScore.innerHTML = "Score : " + score;

            (event.target).remove();

            let nbrBoules = document.querySelectorAll(".forme, .noire");

            function deplacer(e)
            {
                e.style.top = Math.floor(Math.random()*(70)+20) + "%";
                e.style.left = Math.floor(Math.random()*(80) + 10) + "%";
            }

            nbrBoules.forEach(
                function (d)
                {
                    deplacer(d);
                }
            );

                let all = document.querySelectorAll(".forme");
            
                if(all.length == 0){
                            let all = document.querySelectorAll(".forme, .noire");
            
                            if(all.length != 0){
                            all.forEach(
                                function(d)
                                {
                                d.remove();
                                }
                            )
                            }

                    youWin.innerHTML = "You win !!!!";

                    clearInterval(interval);

                    temps.innerHTML="";

                    yourScore.innerHTML="";
                
                    ScoreTotal.innerHTML= "Your total : " + (score + time) + " en " + time + " seconde(s)";
                    
                }

            
                
        }

    }

    interval = setInterval(bip, 1000);

    function finish() {
        clearInterval(interval);

        youLoose.innerHTML ="You loose !!!!" + "</br>" + "Try Again !!!";

        temps.innerHTML="";
        
        yourScore.innerHTML="";

        let formes = document.querySelectorAll(".forme, .noire");

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