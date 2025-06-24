/*
Écrire une fonction syracuse qui prend un nombre en entrée, et qui retourne :
- le triple du nombre + 1 si le nombre est impair
- la moitié du nombre sinon
*/
console.log("=======================\\EXO 1//============================")
function syracuse(n) {
    if(n%2 != 0) {
        return 3*n+1;
    } else {
        return n/2;
    }
}

for(let i = 1 ; i < 20 ; i++) {
    console.log("syracuse(", i, ") retourne", syracuse(i));
}

/*
Écrire une fonction countdown qui reçoit un nombre positif en entrée, et qui affiche dans la console le compte à rebours jusqu'à 0 en partant de ce nombre.
Par exemple, l'appel à `countdown(3)` devra afficher
3
2
1
0
*/
//console.log(3);
//console.log(2);
//console.log(1);
//console.log(0);
//
//let compteur = 30;
//for(let i = 0 ; i < 31 ; i++) {
//    console.log(compteur);
//    compteur = compteur - 1;
//}

// Pour compteur qui va de 11 à 0 (inclus), de -1 en -1

console.log("=======================\\EXO 2//============================")

function countdown(start) {
    for(let compteur = start ; compteur >= 0 ; compteur = compteur - 1) {
        console.log(compteur);
    }
}

countdown(3);
countdown(7);


/*
Écrire une fonction fastCountdown qui reçoit un nombre en entrée et qui affiche un compte à rebours en partant de cette valeur. La valeur sera divisée par 2 à chaque fois, et le compte à rebours s'arrête quand la valeur devient inférieur à 0.1.
Par exemple, l'appel à `fastCountdown(3)` devra afficher
3
1.5
0.75
0.375
0.1875
*/
console.log("=======================\\EXO 3//============================")

function fastCountdown(start) {
    let compteur = start;
    let compteurTours = 0;
    while(compteur >= 0.1) {
        console.log(compteur);
        compteur = compteur/2;
        compteurTours++;
    }
    console.log("L'appel avec", start, "est terminée (", compteurTours, "tours)");
}
fastCountdown(3);
fastCountdown(20);

fastCountdown(1000000);

/*
Écrire une fonction evenNumbers qui reçoit deux nombres en entrées et qui affiche tous les nombres pairs entre ces deux nombres.
Par exemple, l'appel à `evenNumbers(5,14)` devra afficher
6
8
10
12
*/
console.log("=======================\\EXO 4//============================")

function evenNumbers(n1, n2) {
    for(let i = n1 ; i < n2 ; i++) {
        if(i%2 == 0) {
            console.log(i);
        }
    }
}

evenNumbers(5, 14);

console.log("=======================\\EXO 4 BIS//============================")

function evenNumbersBis(n1, n2) {
    if(n1 > n2) {
        evenNumbersBis(n2, n1);
        return;
    }
    let start = n1;
    if(start%2 == 1) {
        start = n1 + 1;
    }

    for(let i = start ; i < n2 ; i += 2) {
        console.log(i);
    }
}
evenNumbersBis(5, 14);
console.log("--------");
evenNumbersBis(14, 5);

/*
Sur la page wikipedia du PGCD (pas besoin de savoir ce que c'est), on peut trouver l'algorithme récursif suivant :

fonction euclide(a, b)
    si b = 0 alors retourner a
    sinon retourner euclide(b, a modulo b)

Écrire cette fonction.
*/
console.log("=======================\\EXO 5//============================")

function euclide(a, b) {
    if(b == 0) {
        return a;
    } else {
        return euclide(b, a%b);
    }
}
/*
À la main, calculer `euclide(6,10)`.
*/
/*
euclide(6, 10) = ?
    -> euclide(10, 6%10) = euclide(10, 6)
    euclide(10, 6) = ?
        -> euclide(6, 10%6) = euclide(6, 4)
        euclide(6, 4) = ?
            -> euclide(4, 6%4) = euclide(4, 2)
            euclide(4, 2) = ?
                ->euclide(2, 4%2) = euclide(2, 0)
                euclide(2, 0) = ?
                    -> 2
                -> 2
            -> 2
        -> 2
    -> 2
*/