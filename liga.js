console.log(data)

let body = document.getElementById("spanishLeague");
// Seleccionar elemento tabla
body.innerHTML ="";

function resultados () {

    for (let i=0; i < matches.length; i++) {
        let row = document.createElement ("tr");
        let tdLocal = document.createElement ("td");
        let localShield = document.createElement("img");
        localShield.setAttribute("src", `https://crests.football-data.org/${matches[i].homeTeam.id}.svg`);
        // Definimos el atributo de la variable localShield y le añadimos la ruta https con extensión a nuestra API.
        let tdScore = document.createElement("td");
        let tdAway = document.createElement ("td");
        let awayShield = document.createElement("img");
        awayShield.setAttribute("src", `https://crests.football-data.org/${matches[i].homeTeam.id}.svg`);
        
        tdLocal.append (matches[i].homeTeam.name, localShield);

        if(matches[i].status === "FINISHED") {
            tdScore.innerHTML = `${matches[i].score.fulltime.homeTeam} - ${matches[i].score.fulltime.awayTeam}`;
        }
        else {
            tdScore.innerHTML = "- -";
        }
        tdAway.append (awayShield, matches[i].awayTeam.name);

        row.append (tdLocal, tdScore, tdAway);
    }
}

resultados();