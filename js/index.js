const input = document.querySelector(".input");
const searchedUser = {
  itemSearched: " ",
};
input.addEventListener("input", searchedItem);
function searchedItem(event) {
  searchedUser.itemSearched = event.target.value;
  // renderData(fechedData , searchedUser)
  addToDom();
  // console.log(searchedUser)
}
let fechedData = [];
document.addEventListener("DOMContentLoaded", () => {
  //    console.log("esfghewfr")
  axios
    .get("http://localhost:3000/item")
    .then((res) => {
      fechedData = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});
function renderData(products, searchedUser) {
  return (filterdProduct = products.filter((pro) => {
    return pro.title
      .toLowerCase()
      .includes(searchedUser.itemSearched.toLowerCase());
  }));
}

function addToDom() {
  let rennderd = renderData(fechedData, searchedUser);
  let container = document.querySelector(".products__container");
  let newDiv = "";
  rennderd.forEach((item) => {
    console.log(item);
    newDiv += ` <div class="single__pro">
    <img src="${item.image}" class="pro__image"/>
    <span>${item.title}</span>
    <span>${item.price}</span>
  </div>`;
  });

  container.innerHTML = newDiv;
}
let watchBtn = document.querySelector(".watch");
let pantsBtn = document.querySelector(".pants");
let tShirtBtn = document.querySelector(".t_shirt");
watchBtn.addEventListener("click", () => {
    searchedUser.itemSearched = "watch";
    addToDom();
})
pantsBtn.addEventListener("click", () => {
    searchedUser.itemSearched = "pants";
    addToDom();
})
tShirtBtn.addEventListener("click", () => {
    searchedUser.itemSearched = "tshirt";
    addToDom();
})