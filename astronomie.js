//BattleDev niveau 1 - JUIN 2021
const prompt = require("prompt-sync")();

 //Demande de la masse d'ergol nécessaire et la distance totale du voyage
const masse_necessaire = +prompt("Veuillez saisir la masse d'ergol nécesaire au décollage : ");
const distance = +prompt("veuillez saisir la distance totale du voyage :  ");

//Calcul de la masse totale d'ergol nécessaire à la mission 
let masse_totale = masse_necessaire + (distance*5);

console.log("La masse totale nécessaire au voyage est de : " + masse_totale);