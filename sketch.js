function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("rgb(255,255,251)");  
  fill("rgb(136,7,236)")
  circle(200,200,300); //corpo
  fill("white");
  circle(150,150,60); //olho esquerdo
  circle(250,150,60); //olho direito
  fill("rgb(253,228,127)")
//  circle(260,150,30,150); //pupila direita
//  circle(160,150,30,150); //pupila esquerda
  line(62,250,260);
  line(124,100,170,110); //sobrancelha esquerda
  line(224,120,271,110); //sobrancelha direita
  fill("black")
  triangle(200,178,180,220,217,220); //nariz
  fill("rgb(136,7,236)")
  circle (374,248,15); //bolhinha da mão direita
  circle(60,330,15); //bolinha da mão esquerda 
  line(153,343,129,372); //primeira perna esquerda
  line(129,370,130,400); //segunda perna esquerda
  line(246,344,264,372,); //primeira perna direita
  line(264,370,264,400); //segunda perna direita
  line(336,265,365,250); //braço direito
  line(95,308,66,327); //braço esquerdo
  line(130,260,270,260); //boca
  line(270,260,277,250); //canto da boca direito
  line(130,260,120,250) //canto da boca esquerdo
  fill("white")
  quad(180,260,198,260,200,275,183,275); //dente
  fill("rgb(136,7,236)")
 triangle(125,60,120,32,150,55) //chifre esquerdo
  triangle(280,60,270,32,250,55) //chifre direito
  fill("rgb(253,228,127)")
  if(mouseIsPressed);{
  
    olhoX = map(mouseX,0,400,125,150);
    olhoY = map(mouseY, 0,400,125,150);
    fill("black")
    circle(olhoX, olhoY,25); //bola do olho esquerdo
    circle(olhoX+100,olhoY,25); //bola do olho direito
    console.log(mouseX,mouseY);
  } 
   
}