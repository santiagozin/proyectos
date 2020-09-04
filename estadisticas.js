

var senadores = data.results[0].members;

var contD = 0;
var contR = 0;
var contI = 0;
var porcDemocratas = 0;
var porcRepublicanos = 0;
var porcIndependientes = 0;

senadores.forEach(miembros => {

    if (miembros.party == "D") {
        contD++;
        porcDemocratas += miembros.votes_with_party_pct; 
    }
    else if (miembros.party == "R") {
        contR++;
        porcRepublicanos += miembros.votes_with_party_pct;
    }

    else { 
        contI++;
        porcIndependientes += miembros.votes_with_party_pct;
    }

});

var promDemocrat = (porcDemocratas / contD).toFixed(2);
var promRepublican = (porcRepublicanos / contR).toFixed(2);
var promIndependient = (porcIndependientes / contI).toFixed(2);



var stringTabla="";
function tabla(partido,cont,porcentaje) {

return stringTabla = stringTabla + '<tr>' + '<td>'+ partido+'</td>'
+ '<td>' + cont+ '</td>'
+ '<td>' + porcentaje + '</td>'+
'</tr>'
}

document.getElementById("partidos").innerHTML = tabla("Democratas",contD,promDemocrat);
document.getElementById("partidos").innerHTML = tabla("Republicanos",contR,promRepublican);
document.getElementById("partidos").innerHTML = tabla("Independientes",contI,promIndependient);


console.log(contD);
console.log(contR);
console.log(contI);

// ordeno lest de mayor a menor 

var temporal = senadores.slice();

console.log(temporal);

temporal.sort((a, b)=>b.missed_votes_pct - a.missed_votes_pct);
var tenp = (temporal.length * 10)/100;
var estadis = temporal.slice(0, Math.trunc(tenp));

console.log(estadis);

var menoresTabla = "";

function menor(p) {
    p.forEach(valor => {
        var name = valor.last_name + " , " + valor.first_name + " " + valor.middle_name;
        menoresTabla = menoresTabla + '<tr>' + '<td> <a href="' + valor.url + '" target="_blank">' + name + '</a> </td>'
        + '<td>' + valor.missed_votes + '</td>'
        + '<td>' + valor.missed_votes_pct + ' %' + '</td>'
        '</tr>'
        
    });
    console.log(menoresTabla);
    
}

menor(estadis);
document.getElementById("partidosmenores").innerHTML = menoresTabla;


//ordeno most de menor a mayor ------------------------------------------------

temporal.sort((a, b) => a.missed_votes_pct - b.missed_votes_pct);
estadis = temporal.slice(0, Math.trunc(tenp));

console.log (estadis);

var mayoresTabla = "";

function mayor(n) {
    n.forEach(valor => {
        var name = valor.last_name + " , " + valor.first_name + " " + valor.middle_name;
        mayoresTabla = mayoresTabla + '<tr>' + '<td> <a href="' + valor.url + '" target="_blank">' + name + '</a> </td>'
        + '<td>' + valor.missed_votes + '</td>'
        + '<td>' + valor.missed_votes_pct + ' %' + '</td>'
        '</tr>'
        
    });
    console.log(mayoresTabla);

}

    mayor(estadis);
    document.getElementById("partidosmayores").innerHTML = mayoresTabla;
    
    //------------------------------------------------------------------
   
