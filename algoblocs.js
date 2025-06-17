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

//posittion de la tortue au millieux de la page
setPos(100,100);

// choix de la couleur
changeColor(color.red);

//épaisseur du trait
setLineWidth(10);

// Création de la boucle FOR
for (let i = 0 ; i<4 ; i++){
    //direction gauche 
    faceRight();

    //avancer de 100px
    forward(100);

    // direction en bas
    faceDown();

    //avancer de 100px
    forward(100);
}

