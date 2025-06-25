// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
console.log("===================\\EXO 1//=====================")
let tab1 = [12,14,74,9];
function lecture(tab){
    console.log(tab[tab.length - 1]);
}
lecture(tab1);
// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
console.log("===================\\EXO 2//=====================")
let tab2 = [12,65,9,76];
function lecture2(tab){
    return tab[tab.length -1];
}
lecture2(tab2)

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
console.log("===================\\EXO 3//=====================")
let tab3 =[12,7,5,100,1,2]
function min(tab){
    let nombre = tab[0]
    for (let i = 0; i<tab.length; i++){
        if(tab[i]<nombre){
            nombre = tab[i];
        }
    }
    return nombre;
}

console.log(min(tab3));
// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
console.log("===================\\EXO 4//=====================")
let tab4 =[12,7,533,100,1,2]
function max(tab){
    let nombre = tab[0]
    for (let i = 0; i<tab.length; i++){
        if(tab[i]>nombre){
            nombre = tab[i];
        }
    }
    return nombre;
}

console.log(max(tab4));

// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].

// Créer un tableau qui contient [10,20,30,...,77770].

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]