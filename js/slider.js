'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
var showToolbar;
var toolbar;
var backward;
var play;
var next;
var aleatoire;
var picture;
var imageLegend;
var start;
var imagePosition=0;
var pos=0;
var btnPlay;
var slides =
[
    { image: 'images/1.jpg', legend: 'Street Art'          },
    { image: 'images/2.jpg', legend: 'Fast Lane'           },
    { image: 'images/3.jpg', legend: 'Colorful Building'   },
    { image: 'images/4.jpg', legend: 'Skyscrapers'         },
    { image: 'images/5.jpg', legend: 'City by night'       },
    { image: 'images/6.jpg', legend: 'Tour Eiffel la nuit' }
];

showToolbar=document.getElementById('toolbar-toggle');
toolbar= document.querySelector(".toolbar");
backward=document.getElementById('slider-previous');
play=document.getElementById('slider-toggle');
next=document.getElementById('slider-next');
aleatoire=document.getElementById('slider-random');
picture= document.getElementById('image');
imageLegend=document.getElementsByTagName('figcaption');
btnPlay=document.querySelector('#slider-toggle i');

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
// afficher l'interface de navigation

function show(){
	toolbar.classList.toggle('display');
}

// 
function round(){
	imagePosition++;
  	picture.src=slides[imagePosition].image;
  	imageLegend=slides[imagePosition].legend;
  	if(imagePosition===5){
  		imagePosition=-1;
  	}
  	
}
 
 //demarrer carrousel		
function playing(){	
	start=setInterval(round,2500);
	pos=1;
}

// arrêter Carrousel

function stop(){
	clearInterval(start);
	pos=0;
}
 // reculer 		
function previous(){
	stop();
  	imagePosition=imagePosition-1;
  	if(imagePosition<0){
  		imagePosition=5;
  	}
  	picture.src=slides[imagePosition].image;
  	imageLegend=slides[imagePosition].legend;
}

// avancer

  function nextPhoto(){
  	stop();
  	imagePosition=imagePosition+1;
  	if(imagePosition>5){
  		imagePosition=0;
  	}
  	picture.src=slides[imagePosition].image;
  	imageLegend=slides[imagePosition].legend;
  }

// choix aléatoire d'une photo
  function randomFunction(){
  	stop();
    	var newStart;
  	do{
  		newStart=Math.floor(Math.random() * 6);
  	}while(newStart===imagePosition)

  	imagePosition=newStart;
  	
  	picture.src=slides[imagePosition].image;
  	imageLegend=slides[image].legend;		
  }



/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
showToolbar.addEventListener('click', show);
play.addEventListener('click', function(){
		if(pos===1){
			stop();
			btnPlay.classList.add('fa-play');
			btnPlay.classList.remove('fa-pause');
		}else{
			playing();
			btnPlay.classList.remove('fa-play');
			btnPlay.classList.add('fa-pause');
		};
});
backward.addEventListener('click', previous)
next.addEventListener('click',nextPhoto);
aleatoire.addEventListener('click',randomFunction);




