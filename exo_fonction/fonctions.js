// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.

function f1(){
    console.log(17);
}

// Utiliser la fonction f1 pour afficher 17 dans la console.

f1();

// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.
function f2(){
    return 17;
}

// Utiliser la fonction f2 pour afficher 17 dans la console.
console.log(f2());

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?
// BAS DANS LA F2 NOUS SOMMES OBLIGR DE FAIRE UN CONSOLE.LOG ALROS QUELLE OPURRAIS LE FAIRE DIRECTEMENT

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.

function f3(nombre){
    let result = nombre*2;
    console.log(result);
}

// Utiliser la fonction f3 pour écrire dans la console le double de 99.
f3(99);

// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(nombre){
    let result = nombre*2;
    return result;
}

// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f4(99));

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a = f4(99);

//================ Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.

function f5(nombre1,nombre2){
    let result = nombre1+nombre2;
    console.log(result);
}

//================= Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.

f5(42,77);

//================ Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.

function f6(nombre1,nombre2){
    let result = nombre1+nombre2;
    return result;
}

//=================== Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.

f6(42,77);

//================ Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.

a += f6(42,77);
console.log(a)

//=========== Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(nombre1,nombre2){
    if(nombre1>nombre2){  
        console.log(nombre1);
        return nombre1;
    }

    else{
        console.log(nombre2);
        return nombre2;
    }

    
}

f7(149,600)

// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).

function f8(nombre1,nombre2,nombre3){
    if(nombre1<nombre2){

        if(nombre2<nombre3){
            console.log(nombre3);
        }else{
            console.log(nombre2);
        }           
    }else{
        if(nombre1<nombre3){
            console.log(nombre3)
        }else{
            console.log(nombre1)
        }
    }   
}

f8(1,2,3)

// =========================================

function f8_(nombre1,nombre2,nombre3){
    let result = f7(nombre1,nombre2)
    if(result<nombre3){
        console.log(nombre3);
    }
    return result
}

f8_(120,20036,5678);


//=================Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.

function f9(n, w) {
    for(let i = 0 ; i < n ; i++) {
        console.log(w);
    }
}

f9(50, "Bonjour");
f9(10, "Maison");