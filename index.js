const person = [
    {
        image:"../image/Lionel-Messi-Argentina-2022-FIFA-World-Cup_(cropped).jpg",
        id : "1",
        name : "messi",
        title : "the best",
        text : "he is the best player in the world"
    },
    {
        image:"../image/142263.jpg",
        id : "2",
        name : "de bruyne",
        title : "city",
        text : "khe uieffinjeqkmmgerkmeolkgholkmolmkhokwthohok5 ethwhr"
    },
    {
        image:"../image/Untitled.jpg",
        id : "3",
        name : "neymar",
        title : "paris",
        text : "fjkqwh   jROJGQEIRGNJEJKBNJKETNBHETKIBJTQKMO  RKHJEKGM"
    },
    {
        image:"../image/16675859315228.jpg",
        id : "4",
        name : "mbappe",
        title : "german",
        text : "tghw itjh tohwk jephbqet[ophtmjqtmj     eprklgjegi ekthj"
    }
]
 let image = document.querySelector(".image");
 let title = document.querySelector(".title");
 let text = document.querySelector("p");

 const rightArrow = document.querySelector(".fa-chevron-right");
const leftArrow = document.querySelector(".fa-chevron-left");
let counter = 0;
window.addEventListener("DOMContentLoaded", function(){
    showCase()
})
function showCase(){
    image.src = person[counter].image;
    title.textContent = person[counter].name;
    text.textContent = person[counter].text;
}
rightArrow.addEventListener("click", function(){
    counter++;
    if(counter > person.length - 1){
        counter = 0;
    }
    showCase()
})
leftArrow.addEventListener("click", function(){
    counter--;
    if(counter < 0){
        counter = person.length - 1;
    }
    showCase()
})