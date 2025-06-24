// Création d'un tableau (et rangement dans une variable)
let t = [1,4,7,8,55,5,4,1,0,0,1,-1];
console.log(t);
// Les cases sont numérotées / indexées.
// La première case a le numéro 0.
// La deuxième case a la numéro 1.
// ...

// Accès à une case en particulier
// t[numéro]
t[0] // (Tout seul, ne fait rien)

// On peut lui affecter une nouvelle valeur
t[0] = 77;
// On peut aussi lire le contenu de la case :
console.log("La deuxième case contient", t[1]);

// On peut ajouter une nouvelle case à la fin du tableau t :
t.push(147);
console.log(t);

// On peut supprimer la dernière case du tableau
t.pop(); // Le 147 a disparu
console.log(t);
// La fonction .pop retourne une valeur : celle qui était dans la case qui a été supprimée.
console.log("La dernière case, RIP, elle contenait :", t.pop());
console.log(t);

// Pour connaître la taille du tableau (le nombre de cases) :
t.length // GTH

console.log("Il y a", t.length, "cases dans le tableau.");