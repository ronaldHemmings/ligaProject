console.log(data)

function resultados () {

    // Seleccionar elemento tabla
    let tableInjection = document.getElementById("spanishLeague");

    // For que recorre API para sacar equipos.
    for (i=0; i<data.matches.length; i++){
       
        let crearFilas = document.createElement("tr");
        let equipoLocal = document.createElement("td");
        equipoLocal.innerHTML=`${data.matches[i].homeTeam.name}`;
        
        let gameScore = document.createElement("td");
        if(matches[i].status === "FINISHED"){
           gameScore.innerHTML = `${matches[i].score.fulltime.homeTeam} - ${matches[i].score.fulltime.awayTeam}`;
            }
        else {
            gameScore.innerHTML = "- -";
        }
           
        let equipoVisitante = document.createElement("td");
            equipoVisitante.innerHTML=`${data.matches[i].awayTeam.name}`;
      
        let statusPartido = `${data.matches[i].status}`;
        let status = document.createElement("td");
            status.innerHTML = statusPartido;
    
        let jornada = `${data.matches[i].matchday}`;
        let numJornada = document.createElement("td");
                numJornada.innerHTML = jornada;

    tableInjection.append(crearFilas,equipoLocal,score,equipoVisitante,status, numJornada);
        // La variable que contiene todo (tableInjectio) .append para meter en el orden del paréntesis los datos en la tabla.
}
}

resultados();
