// =======================================================\\EXO 1//===========================================================
function setup(){
  createCanvas(400, 400);
}

// function draw(){
//   background(255);
//   fill(0);

//   let x = 100;

//   for(let i=0;i<5;i++){
//     square(x,100,45);
//     x +=50;
//   }
// }


// =======================================================\\EXO 2//===========================================================

function draw(){
  background(255);
  fill(0);

  for (let  y = 100 ; y<300; y +=50){
    for(let x = 100; x<350; x += 50){
      square(x, y, 45);
    }
  }
}



// ======================================================\\BONUS//==============================================================
// function setup(){
//   createCanvas(600,600);
//   background(40)
  
// }
// let t=0;
// let a=0;
// let x=100;
// let direction= 9;
// let liste = [];

// function draw(){
//   t=t+1
//   background(40)
//   liste.push(x)
//   if(liste.length >20){
//     liste.shift()
//    // console.log(liste)
//   }
//   let y=500;
  
//   for(let i=0; i< liste.length ; i++){
   
//     drawSquare(liste[i],y,  (1-i /liste.length)*250,50*(1+cos((t+i)/3))+(1-i/liste.length)*50,50*(1+cos((t+i)/3))+(1-i/liste.length)*50 )
    
    
//   }
  
//    circle(x+50*cos(frameCount/13), 100+50*cos(frameCount/17), 55+45*cos(frameCount/10));
  

  
//     x=x+direction
//   if(x> width-100){
//     direction=-direction
//   }
//   if(x<100){
//     direction=-direction
//   }

  
// }

// function drawWhiteSquare(a){
//   noStroke()
//   fill(250)
//   square(a,0,100)
  
// }
// function drawSquare(x,y,couleur,taille,angle){
  
//   noStroke()
//   fill(couleur,50,100,)
//   square(x-taille/2,y-taille/2,taille,angle)
//   //console.log(couleur)
  
// }