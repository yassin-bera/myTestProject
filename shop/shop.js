import { products } from "./productInfo.js";

let cartIcon = document.querySelector(".fa-cart-plus")
let popup = document.querySelector(".pop__up")
let popupFather = document.querySelector(".popup__page")
console.log(popup , cartIcon)
cartIcon.addEventListener("click" ,popupOpen)
function popupOpen(){
    popupFather.style.display = "flex"
}
document.addEventListener("click" , remove)

function remove(event){
    if (event.target == popupFather){
        popupFather.style.display = "none"
    }else if(event.target == popup){
        display = "flex"
    }

}

let main = document.querySelector("main")
function displayProducts(main, products){
    products.forEach((item) => {
        let newDiv = `<div class="product__container">
        <img class="product__img" src="${item.imgUrl}" />
        <div class="product__name">
            <span class="price">${item.price}$</span>
            <span class="name">${item.Name}</span> 
        </div>
        <div class="product__btn">
          <button class="add__button" id="${item.id}">add to cart</button>
        </div>
   </div>`
       main.innerHTML += newDiv
   });
}

displayProducts(main, products)

let memory = []
function addToLocalStorage(){
    let allAddbtn = document.querySelectorAll(".add__button")
    allAddbtn.forEach((item) => {
        item.addEventListener("click" , clickOnAdd)  
        function clickOnAdd(){
            let check = products.find((product) => product.id == item.id)
            if(check){
                item.innerHTML = "added"
                memory.push(check)
            } 
            window.localStorage.setItem('products', JSON.stringify(memory));
            JSON.parse(window.localStorage.getItem('products'));
            addtoCard()
        }
    })
    
}

let popupSection = document.querySelector(".popup__section")
function addtoCard(){
    let storedItem = JSON.parse(localStorage.getItem("products"))
    console.log(storedItem);
    let newDiv = ''
    storedItem.forEach((item) => {
        newDiv = `<div class="popup__content">
        <img class="popup__img" src="${item.imgUrl}"/>
        <div class="container__price">
            <span>${item.Name}</span>
            <span>${item.price}$</span>
        </div>
        <div class="container__number">
            <i class="fa-solid fa-angle-up"></i>
            <span class="numberOfStuff">1</span>
            <i class="fa-solid fa-angle-down"></i>
        </div>
        <i class="fa-solid fa-trash" data-id="${item.id}"></i>`
        
    })
    let popupDiv = document.createElement("div")
        popupDiv.classList.add("popup__content")
        popupDiv.innerHTML = newDiv
        popupSection.appendChild(popupDiv)
        
}
addToLocalStorage()
function deletFromCard(){
    let trash = document.querySelectorAll(".fa-trash")
    trash.forEach((item) => {
        item.addEventListener("click" , remove)
        function remove(){
            let id = item.getAttribute("data-id")
            let storedItem = JSON.parse(localStorage.getItem("products"))
            let filtered = storedItem.filter((product) => product.id != id)
            localStorage.setItem('products', JSON.stringify(filtered));
            item.parentElement.remove()
        }
    })
}
deletFromCard()
function increaseAndDecrease(){
    let mainPopUpSection = document.querySelector(".popup__section")
    mainPopUpSection.addEventListener("click" , (event)=>{
        if(event.target.classList.contains("fa-angle-up")){
            let numberOfStuff = event.target.nextElementSibling
            let number = parseInt(numberOfStuff.innerHTML)
            ++number
            numberOfStuff.innerHTML = number
        }else if(event.target.classList.contains("fa-angle-down")){
            let numberOfStuff = event.target.previousElementSibling
            let number = parseInt(numberOfStuff.innerHTML)
            --number
            numberOfStuff.innerHTML = number
        }else if(event.target.classList.contains("fa-trash")){
            let id = event.target.getAttribute("data-id")
            let storedItem = JSON.parse(localStorage.getItem("products"))
            let filtered = storedItem.filter((product) => product.id != id)
            localStorage.setItem('products', JSON.stringify(filtered));
            event.target.parentElement.remove()
        }
    })
}
increaseAndDecrease()