//=======================================================\\EXO 1 A-1//=============================================================
//posittion de la tortue au millieux de la page
//setPos(300,300);

//avancer a droite de 200px
//forward(200);

//orienter a droite
//faceRight();

//avancer de 100px
//forward(100);

//=======================================================\\EXO 2 A-2//=============================================================

// //posittion de la tortue au millieux de la page
// setPos(300,300);

// // choix de la couleur
// changeColor(color.yellow);

// //épaisseur du trait
// setLineWidth(10)

// //orienter a gauche
// faceLeft();

// //avancer de 100px
// forward(100);

// //orienter en bas
// faceDown();

// //avancer de 100px
// forward(100);

// //orienter a droite
// faceRight();

// //avancer de 200px
// forward(200);

// //orienter en haut
// faceUp();
// forward(200);

//=======================================================\\EXO 3 B-1//=============================================================

// //posittion de la tortue au millieux de la page
// setPos(100,100);

// // choix de la couleur
// changeColor(color.red);

// //épaisseur du trait
// setLineWidth(10);

// // Création de la boucle FOR
// for (let i = 0 ; i<4 ; i++){
//     //direction gauche 
//     faceRight();

//     //avancer de 100px
//     forward(100);

//     // direction en bas
//     faceDown();

//     //avancer de 100px
//     forward(100);
// }

//=======================================================\\EXO 5 B-8//=============================================================

// //posittion de la tortue au millieux de la page
// setPos(350,350);

// // choix de la couleur
// changeColor(color.red);

// //épaisseur du trait
// setLineWidth(10);

// // Création de la boucle FOR
// for (let i = 0 ; i<8 ; i++){
//     //direction gauche 
//     right(180-45);;

//     //avancer de 100px
//     forward(200);
// }*

//=======================================================\\EXO 6 B-24//=============================================================

// //posittion de la tortue au millieux de la page
// setPos(320,100);

// // choix de la couleur
// changeColor(color.red);

// //épaisseur du trait
// setLineWidth(10);

// //direction droite
// faceRight();

// // Création de la boucle FOR
// for (let i = 0 ; i<8 ; i++){

//     //avancer de 100px
//     forward(100);

//     //direction gauche 
//     left(180-45);
// }

// //avancer de 50px
// forward(50);

// // choix de la couleur
// changeColor(color.green);

// // Création de la boucle FOR
// for (let i = 0 ; i<3 ; i++){

//     //direction gauche 
//     right(180-45);

//     //avancer de 200px
//     forward(100);

//     //direction gauche 
//     left(180-45);

//     //avancer de 100px
//     forward(50);
// }

// //avancer de 50px
// forward(50);

// //direction gauche 
// right(90);

// // Création de la boucle FOR
// for (let i = 0 ; i<2 ; i++){

//     //avancer de 25px
//     forward(25);

//     //direction gauche 
//     left(90);
// }

// //avancer de 50px
// forward(25);

// //direction gauche 
// right(90);

// //avancer de 100px
// forward(50);

// // Création de la boucle FOR
// for (let i = 0 ; i<3 ; i++){

//     //avancer de 100px
//     forward(50);

//     //direction gauche 
//     left(180-45);

//     //avancer de 200px
//     forward(100);

//     //direction droite 
//     right(180-45);
// }

//=======================================================\\EXO 6 B-24//=============================================================

// //posittion de la tortue au millieux de la page
// setPos(320,100);

// //épaisseur du trait
// setLineWidth(1);

// faceRight();

// // version normal
// function dragon0(){
//     forward(50);
// }

// // version miroire
// function dragonInverse0(){
//     forward(50)
// }

// function dragon1(){
//     right(45);
//     dragon0();
//     left(90);
//     dragonInverse0();
//     right(45);
// }

// function dragonInverse1(){
//     left(45);
//     dragon0();
//     right(90);
//     dragonInverse0();
//     left(45);
// }

// function dragon2(){
//     right(45);
//     dragon1();
//     left(90);
//     dragonInverse1();
//     right(45);
// }

// function dragonInverse2(){
//     left(45);
//     dragon1();
//     right(90);
//     dragonInverse1();
//     left(45);
// }

// function dragon3(){
//     right(45);
//     dragon2();
//     left(90);
//     dragonInverse2();
//     right(45);
// }

// function dragonInverse3(){
//     left(45);
//     dragon2();
//     right(90);
//     dragonInverse2();
//     left(45);
// }

// function dragon4(){
//     right(45);
//     dragon3();
//     left(90);
//     dragonInverse3();
//     right(45);
// }

// function dragonInverse4(){
//     left(45);
//     dragon3();
//     right(90);
//     dragonInverse3();
//     left(45);
// }

// function dragon5(){
//     right(45);
//     dragon4();
//     left(90);
//     dragonInverse4();
//     right(45);
// }

// function dragonInverse5(){
//     left(45);
//     dragon4();
//     right(90);
//     dragonInverse4();
//     left(45);
// }

// dragon5();


//====================================================\\dragon optimiser//=====================================================

setPos(300,300);
faceRight();
setLineWidth(1);


function dragon(n, size){
    shiftColor(0.001)
    if (n ==0) {
        forward(size);
    }else{
        right(45);
        dragon(n-1, size);
        left(90);
        dragonInverse(n-1, size);
        right(45);
    }
}
function dragonInverse(n, size){
    shiftColor(0.001)
    if(n==0) {
        forward(size);
    } else {
        left(45);
        dragon(n-1, size);
        right(90);
        dragonInverse(n-1, size);
        left(45);
    }
}

dragon(15,3);