var senadores = data.results[0].members;
console.log(senadores);
let aux = "";
function createTabla(d) {
  senadores.forEach(senador => {
    aux +=
      "<tr><td>" +
      "<a href=" +
      senador.url +
      ">" +
      senador.first_name +
      (senador.middle_name || "") +
      senador.last_name +
      "</a>" +
      "</td>" +
      "<td>" +
      senador.party +
      "</td>" +
      "<td>" +
      senador.state +
      "</td>" +
      "<td>" +
      senador.seniority +
      "</td>" +
      "<td>" +
      senador.votes_with_party_pct +
      "%" +
      "</td></tr>";
  });
}
console.log(createTabla(senadores));
document.getElementById("senate_data").innerHTML = aux;

createTabla(senadores);
