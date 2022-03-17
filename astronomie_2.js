//BattleDev niveau 2 - JUIN 2021

const prompt = require("prompt-sync")();

//Demande du nombre de boutons présents dans le cockpit
let bouton = +prompt("veuillez saisir le nbr de bouton : ");
let tableau  = []

//Boucle demandant la saisie des noms des boutons
for(let i = 0; i <bouton ; i++){
    let nom = tableau.push(prompt("veuillez saisir le nom de bouton : "))
}
tableau.sort()
let table = []

//Boucle qui filtre le nom de bouton n'apparaîssant que 2 fois dans le cokpit
for(let j = 0 ;j<tableau.length; j++){
    if(tableau[j] != tableau[j-1] && tableau[j] == tableau[j+1] && tableau[j] != tableau[j+2]){
        table.push(tableau[j])
    }
}

console.log(table);
