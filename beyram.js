const alert = document.querySelector('.alert__container');
const input = document.querySelector('.input')
const button = document.querySelector('.submit__btn')
const itemsParent = document.querySelector('.items')
const clear = document.querySelector('.clear')
const alertItem = document.querySelector('.alert__container')
const alertText = document.querySelector('.alert__text')
// button.addEventListener('click', addItem)
button.addEventListener('click', manageButton)
editFlag = false

const manageButton = ()=>{

    if(editFlag){
        editItem(id)
    }else{
        addItem()
    }

}


const manageIcon = (e)=>{
    const groceryList = document.querySelector('.items')
    groceryList.addEventListener('click',(e)=>{
        if(e.target.classList.contains('fa-trash')){
            trashItem(e.target)
        }else if(e.target.classList.contains('fa-pen-to-square')){
            editFlag = true
            editItem(e.target)
        }
    })    


}


editItem = (id)=>{  
    const element = document.querySelector(`[data-id="${id}"]`)
    const edited = element.querySelector('.items__text')
    const id = element.dataset.id
    input.value = edited.innerHTML;
    edited.innerHTML = input.value;
    editFromLocalStorage(edited.innerHTML,id)
    editFlag = false
}
















editFlag = false
function addItem(){
    console.log(editFlag)
    if(!editFlag){
        let generateId = Date.now().toString()
        let dataId = document.createAttribute('data-id')
        dataId.value = generateId
        const value = document.querySelector('.input').value;
        let newDiv = document.createElement('div');
        newDiv.setAttributeNode(dataId)
        newDiv.innerHTML = `<span class="items__text">${value}</span>
        <div class="icon__container">
            <i class="fa-regular fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
        </div>`
        newDiv.classList.add('single__item');
        itemsParent.appendChild(newDiv);
        input.value = '';
        // const trash = document.querySelector('.fa-trash')
        // trash.addEventListener('click', trashItem)

        // addToLocalStorage()
        showAlertSuccess()
        addToLocalStorage(generateId , value)
        // const edit = itemsParent.querySelector('.fa-pen-to-square');
        itemsParent.addEventListener('click', function(e){
              console.log(e.target)
            if(e.target.classList.contains('fa-pen-to-square')){
                editFlag = true
                editItem(e.target)
                // editFlag=false

            }
        } )
       

    }
     
   
}
function editFromLocalStorage(id,value){
    let items = getDataFromLocal()
    items = items.map(function(item){
        if(item.id === id){
            item.value = value
        }
        return item
    })
    localStorage.setItem('list',JSON.stringify(items))
}
function removefromLocalStorage(id){
    let items = getDataFromLocal()
    items = items.filter(function(item){
        if(item.id !== id){
            return item
        }
    })
    localStorage.setItem('list',JSON.stringify(items))
}
function getDataFromLocal(){
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []
}
function addToLocalStorage(id,value){
    const todo = {id,value}
    let items = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []
    console.log(items)
    items.push(todo)
    localStorage.setItem('list',JSON.stringify(items))
    
}
// function editItem(itemsParent){
//       if(itemsParent.classList.contains('fa-pen-to-square')){
//             const element = itemsParent.parentElement.parentElement;
//             // console.log(element)
//             const edited = itemsParent.parentElement.previousElementSibling;
//             const id = element.dataset.id
//             input.value = edited.innerHTML;
//             edited.innerHTML = input.value;
//             editFromLocalStorage(edited.innerHTML,id)
//             // editFlag = false
//       }
// }

function trashItem(e){
    const trash = itemsParent.querySelectorAll('.fa-trash');
    trash.forEach(item => {
        // console.log(item)
        item.addEventListener('click', function(e){
            const element = e.currentTarget.parentElement.parentElement;
            itemsParent.removeChild(element)  
            showAlertErorr()
            if(itemsParent.children.length > 0){
                clear.classList.add('displayBlock')
            }else{
                clear.classList.remove('displayBlock')
                clear.classList.add('displayNone')
            }
            let id  = item.parentElement.parentElement.dataset.id
            removefromLocalStorage(id)
        })
    })

    // let element = e.currentTarget.parentElement.parentElement;
    // let id = element.dataset.id
    // itemsParent.removeChild(element)
    // showAlertErorr()
    // if(itemsParent.children.length === 0){
    //     clear.classList.remove('displayNone')
    // }
    
}
function showAlertErorr(){
    alertItem.classList.add('show')
    alertText.textContent = 'please try again'
    setTimeout(function(){
        alertItem.classList.remove('show')
    },2000)
}
function showAlertSuccess(){
    alertItem.classList.remove('alert__container')
    alertItem.classList.add('successAlert')
    alertText.classList.add('successText')
    setTimeout(() => {
        alertItem.classList.remove('successAlert')
        alertItem.classList.add('alert__container')
    }, 2000);
}
clear.addEventListener('click', clearItem)
function clearItem(){
    const items = document.querySelectorAll('.single__item');
    if(items.length > 0){  
        items.forEach(item => {
             itemsParent.removeChild(item)
        })
    }
  clear.classList.add('displayNone')
  localStorage.removeItem('list')
}


