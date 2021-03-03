 var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

 var cognomeUtente = prompt("Qual è il tuo cognome?");
 cognomi.push(cognomeUtente);
 cognomi.sort();



 for (var i = 0; i < cognomi.length; i++) {
   document.getElementById("cognomiNum").innerHTML += "<li>" + cognomi[i] + "</li>";
 }
var cognomePos = parseInt(cognomi.indexOf(cognomeUtente));
 document.getElementById("cognomePos").innerHTML = cognomePos + 1;
