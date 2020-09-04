var congres = data.results[0].members;
console.log(congres);
let aux = "";
function createTabla(o) {
  congres.forEach(representantes => {
    aux +=
      "<tr><td>" +
      "<a href=" +
      representantes.url +
      ">" +
      representantes.first_name +
      (representantes.middle_name || "") +
      representantes.last_name +
      "</a>" +
      "</td>" +
      "<td>" +
      representantes.party +
      "</td>" +
      "<td>" +
      representantes.state +
      "</td>" +
      "<td>" +
      representantes.seniority +
      "</td>" +
      "<td>" +
      representantes.votes_with_party_pct +
      "%" +
      "</td></tr>";
  });
}
console.log(createTabla(congres));
document.getElementById("house_data").innerHTML = aux;

createTabla(congres);
