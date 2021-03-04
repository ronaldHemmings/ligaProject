console.log(data)

function resultados () {

    // Seleccionar elemento tabla
    let tableInjection = document.getElementById("spanishLeague");

    // For que recorre API para sacar equipos.
    for (i=0; i<data.matches.length; i++){
        // Guardo valor goles local en una variable.
        let golesEquipoLocal = `${data.matches[i].score.fullTime.homeTeam}`;
         // Guardo valor goles visitante en una variable.
        let golesEquipoVisitante = `${data.matches[i].score.fullTime.awayTeam}`;
        // Me genero la primera fila.
        let crearFilas = document.createElement("tr");
        // Me genero la primera columna.
        let equipoLocal = document.createElement("td");
        // Añado nombre de equipo local en la primera columna.
            equipoLocal.innerHTML=`${data.matches[i].homeTeam.name}`;
        // Me genero la segunda columna.
        let golesLocal = document.createElement("td");
        // Compruebo si el partido se ha jugado.
        if(golesEquipoLocal != "null"){
        // Si se ha jugado inyecto el valor en la columna.
            golesLocal.innerHTML = golesEquipoLocal;
            }
        // Si no se ha jugado, inyecto un -.
        else {
            golesLocal.innerHTML = "-";
        }
           
        let equipoVisitante = document.createElement("td");
            equipoVisitante.innerHTML=`${data.matches[i].awayTeam.name}`;
        let golesVisitante = document.createElement("td");
            golesVisitante.innerHTML= golesEquipoVisitante;
        
        if(golesEquipoVisitante != "null"){
        // Si se ha jugado inyecto el valor en la columna.
            golesVisitante.innerHTML = golesEquipoVisitante;
                    }
        // Si no se ha jugado, inyecto un -.
            else {
                    golesVisitante.innerHTML = "-";
                }
        let statusPartido = `${data.matches[i].status}`;
        let status = document.createElement("td");
            status.innerHTML = statusPartido;
    
        let jornada = `${data.matches[i].matchday}`;
        let numJornada = document.createElement("td");
                numJornada.innerHTML = jornada;

    tableInjection.append(crearFilas,equipoLocal,golesLocal,equipoVisitante,golesVisitante,status, numJornada);
        // Lo pondrá en el orden que metas el append, no importa el orden de las
        //variables.
}
}

resultados();
