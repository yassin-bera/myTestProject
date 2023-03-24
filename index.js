const plus = document.querySelector(".fa-plus")
const bottomBox = document.querySelector(".bottom__box")
plus.addEventListener("click", function() {
    if(bottomBox.classList.contains("showBox")) {
        bottomBox.classList.remove("showBox")
        plus.classList.remove("fa-minus")
        plus.classList.add("fa-plus")
    }else{
        bottomBox.classList.add("showBox")
        plus.classList.remove("fa-plus")
        plus.classList.add("fa-minus")
    }
    
})