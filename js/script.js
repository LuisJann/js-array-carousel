/***Consegna:**
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
**MILESTONE 1**
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo 
così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
**MILESTONE 2**
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e 
un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
**MILESTONE 3**
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
**BONUS 1:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, 
dovrà comparire l’ultima immagine dell’array e viceversa.
**BONUS 2:**
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno 
un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
**Prima di partire a scrivere codice:**
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. 
Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. 
Non dedichiamo però al ripasso più di una **mezz'ora**, così da non perdere di vista il focus dell'esercizio.
**Consigli del giorno:**
1. Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo 
(oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?" */



const corouselImg = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
];


const imgContainer = document.querySelector(".img-container");

for(let i = 0; i < corouselImg.length; i++){
    const thisImg = corouselImg[i];
    const element = `
                <div class="item-img">
                    <img src="${thisImg}" alt="">
                </div>`;
    imgContainer.innerHTML += element;
}

const imgItems = document.getElementsByClassName("item-img");
let imgPosition = 0;
imgItems[0].classList.add("active");

const upBtn = document.querySelector(".arrow-up");
upBtn.addEventListener("click", function(){

    if(imgPosition < corouselImg.length-1){
        imgItems[imgPosition].classList.remove("active");
    
        imgPosition++;
    
        imgItems[imgPosition].classList.add("active");
    } else if (imgPosition = corouselImg.length-1){
        imgItems[imgPosition].classList.remove("active");
    
        imgPosition = 0;
    
        imgItems[imgPosition].classList.add("active");
    }
});

const downBtn = document.querySelector(".arrow-down");
downBtn.addEventListener("click", function(){
    
    if(imgPosition > 0){
        imgItems[imgPosition].classList.remove("active");
    
        imgPosition--;
    
        imgItems[imgPosition].classList.add("active");
    } else if (imgPosition <= 0){
        imgItems[imgPosition].classList.remove("active");
    
        imgPosition = imgItems.length-1;
    
        imgItems[imgPosition].classList.add("active");
    }
});


