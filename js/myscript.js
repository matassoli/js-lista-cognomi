 var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

 var cognomeUtente = prompt("Qual è il tuo cognome?");
 var cognomeCap = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);
 cognomi.push(cognomeCap);
 cognomi.sort();
 for (var i = 0; i < cognomi.length; i++) {
   document.getElementById("cognomiNum").innerHTML += "<li>" + cognomi[i] + "</li>";
 }
 var cognomePos = parseInt(cognomi.indexOf(cognomeCap));
 document.getElementById("cognomePos").innerHTML = cognomePos + 1;
