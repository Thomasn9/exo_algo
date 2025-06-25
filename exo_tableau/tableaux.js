// 1) Créer un tableau tab1 de 6 cases, qui contient les nombres 144, 202, 216, 216, 222 et 64.
let tab1 = [144,202,216,216,222,64];
console.log("=====================\\voici le tab1 a son initilisation//=====================");
console.log(tab1);

// 2) Ajouter le nombre 0 à la fin du tableau tab1.
tab1.push(0);
console.log("=====================\\ajout de 0 dans le tableau//=====================");
console.log(tab1);

// 3) Afficher *un par un* tous les éléments du tableau tab1.

console.log("=====================\\Affichage des éléments 1 par 1//=====================");
for(let i = 0; i<tab1.length; i++){
    console.log(i);
}


// 4) Retirer le dernier élément du tableau tab1.
console.log("=====================\\Retirer le dernier élément du tableau//=====================");
tab1.pop();
console.log(tab1);

// 5) Créer un tableau tab2 qui contient les nombres 238, 222, 228, 216, 200.
console.log("=====================\\Création du tab2//=====================");
let tab2 = [238,222,228,216,200];
console.log(tab2);


// 6) Ajouter le nombre 58 à la fin de tab2.
console.log("=====================\\ajout de 58 au tab//=====================");
tab2.push(58);
console.log(tab2);


// 7) Ajouter *un par un* tous les éléments du tableau tab2 à la fin du tableau tab1.
console.log("=====================\\ajouter les élément de tab2 a tab1//=====================");
for (let i = 0; i<tab2.length; i++){
    tab1.push(tab2[i]);
}
console.log(tab1);

// 8) Afficher *un par un* tous les éléments du tableau tab1.

// 9) Retirer et stocker dans la variable maVariable le dernier élément du tableau tab1.

// 10) Afficher la taille du tableau tab1.

// 11) Ajouter le nombre 66 à la fin du tableau tab1.

// 12) Diviser par 2 toutes les variables contenues dans le tableau tab1.

// 13) Pour vérifier si vous êtes correctement arrivé(e) jusqu'ici, essayez les deux lignes de code suivantes :
// console.log(tab1.reduce((acc,cur)=> acc+String.fromCharCode(cur),""));
// console.log(String.fromCharCode(maVariable)+String.fromCharCode(maVariable-17));
// (On ne cherchera pas à comprendre ça)