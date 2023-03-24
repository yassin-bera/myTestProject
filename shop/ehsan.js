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
