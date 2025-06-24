/*
Écrire une fonction syracuse qui prend un nombre en entrée, et qui retourne :
- le triple du nombre + 1 si le nombre est impair
- la moitié du nombre sinon
*/
console.log("=========================\\exercice 1//============================")
function syracuse(nombre){
    if(nombre %2==0){
        nombre = nombre/2;
        console.log(nombre)
        return nombre
        
    }else{
        let result = nombre*3 + 1;
        console.log(result)
        return result;        
    }
    
}

syracuse(42);


/*
Écrire une fonction countdown qui reçoit un nombre positif en entrée, et qui affiche dans la console le compte à rebours jusqu'à 0 en partant de ce nombre.
Par exemple, l'appel à `countdown(3)` devra afficher
3
2
1
0
*/
console.log("=========================\\exercice 2//============================")

function decompt(nombre){
    if(nombre > 0 ){
        while (nombre > 0) {
        console.log(nombre);
        nombre = nombre -1;    
    }

    }else{
        console.log("votre nombre est négatif ou est égale a 0");
    }
    
}

decompt(8);

/*
Écrire une fonction fastCountdown qui reçoit un nombre en entrée et qui affiche un compte à rebours en partant de cette valeur. La valeur sera divisée par 2 à chaque fois, et le compte à rebours s'arrête quand la valeur devient inférieur à 0.1.
Par exemple, l'appel à `fastCountdown(3)` devra afficher
3
1.5
0.75
0.375
0.1875
*/
console.log("=========================\\exercice 3//============================")

function fastCountdown(nombre){
    if(nombre >= 0.1){
        while (nombre >= 0.1) {
        console.log(nombre);
        nombre = nombre /2 ;
        }
    }else{
        console.log("le nombre que vous avez choisis est négatif")
    }
    
    }


fastCountdown(6);

console.log("=========================\\exercice 3 bis//============================")

function fastCountdown_(start) {
    let compteur = start;
    let compteurTours = 0;
    while(compteur >= 0.1) {
        console.log(compteur);
        compteur = compteur/2;
        compteurTours++;
    }
    console.log("L'appel avec", start, "est terminée (", compteurTours, "tours)");
}
fastCountdown_(3);
fastCountdown_(20);

fastCountdown_(1000000);

/*
Écrire une fonction evenNumbers qui reçoit deux nombres en entrées et qui affiche tous les nombres pairs entre ces deux nombres.
Par exemple, l'appel à `evenNumbers(5,14)` devra afficher
6
8
10
12
*/

/*
Écrire une fonction evenNumbers qui reçoit deux nombres en entrées et qui affiche tous les nombres pairs entre ces deux nombres.
Par exemple, l'appel à `evenNumbers(5,14)` devra afficher
6
8
10
12
*/
function evenNumbers(n1, n2) {
    for(let i = n1 ; i < n2 ; i++) {
        if(i%2 == 0) {
            console.log(i);
        }
    }
}

evenNumbers(5, 14);

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
```
fonction euclide(a, b)
    si b = 0 alors retourner a
    sinon retourner euclide(b, a modulo b)
```
Écrire cette fonction.
*/

/*
Écrire une fonction evenNumbers qui reçoit deux nombres en entrées et qui affiche tous les nombres pairs entre ces deux nombres.
Par exemple, l'appel à `evenNumbers(5,14)` devra afficher
6
8
10
12
*/
function evenNumbers(n1, n2) {
    for(let i = n1 ; i < n2 ; i++) {
        if(i%2 == 0) {
            console.log(i);
        }
    }
}

evenNumbers(5, 14);

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
