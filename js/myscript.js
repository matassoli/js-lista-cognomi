 var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"],
   lettere = /^[a-zA-Z]+$/;

 do {
   var cognomeUtente = prompt("Qual è il tuo cognome?");
 }
 while (!cognomeUtente.match(lettere));

 var cognomeCap = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1).toLowerCase();
 cognomi.push(cognomeCap);
 cognomi.sort();

 for (var i = 0; i < cognomi.length; i++) {
   document.getElementById("cognomiNum").innerHTML += "<li>" + cognomi[i] + "</li>";
 }
 var cognomePos = parseInt(cognomi.indexOf(cognomeCap));
 document.getElementById("cognomePos").innerHTML = cognomePos + 1;
