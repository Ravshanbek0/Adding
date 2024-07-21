const form = document.querySelector(".modal")
const xBtn = document.querySelector("#xBtn")
const btnAddForm = document.querySelector(".btn")
const addForm = document.querySelector(".addTag")
const cards = document.querySelector(".cards")

const url = document.querySelector(".url")
const size = document.querySelector(".size")
const name = document.querySelector(".name")
const code = document.querySelector(".code")
const brend = document.querySelector(".brend")
const popular = document.querySelector(".popular")
const prise = document.querySelector(".prise")


var cardsEl = JSON.parse(localStorage.getItem("array")) ? JSON.parse(localStorage.getItem("array")) : []


WirteData(cardsEl)


btnAddForm.addEventListener("click", () => {
    form.style.display = "block"

})



xBtn.addEventListener("click", () => {
    form.style.display = "none";
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (url.value != "" && size.value != "" && name.value != "" && code.value != ""  && brend.value != ""  && prise.value != "" ) {
        var obj = {
            url: url.value,
            size: size.value,
            name: name.value,
            code: code.value,
            brend: brend.value,
            prise: prise.value,
            popular:popular.checked,
        }
        cardsEl.push(obj)
    }else{
        alert("To'liq kiriting")
    }
 
    WirteData(cardsEl)
    localStorage.setItem("array",JSON.stringify(cardsEl))
    form.style.display = "none";



})
// console.log(cardsEl.length);
function WirteData(id) {

    console.log(id.length);
    if (id.length < 1) {
        cards.innerHTML = `<h1>Ma'lumot yo'q</h1>`
    } else {
  
        cards.innerHTML = ""


        id.forEach((item) => {
            cards.innerHTML += `
            <div class="card">
                ${item.popular ? '<span class="popular">ПОПУЛЯРНОЕ</span>' : ""}
        
                <div class="img">
                    <img src="${item.url}" alt="" />
                </div>
                <div class="size">
                    <img src="./imgs/volume.png" alt="" />
                    <h4>${item.size} мл</h4>
                </div>
                <div class="info">
                    <h5>${item.name}</h5>
                </div>
                <div class="box">
                    <h5>Штрихкод: <span>${item.code}</span></h5>
                    <h5>Производитель: <span>${item.name}</span></h5>
                    <h5>Бренд: <span>${item.brend}</span></h5>
                </div>
                <div class="prise">
                    <span>${item.prise}</span>
                <button>
                    В КОРЗИНУ <i class="fa-solid fa-cart-shopping"></i>
                </button>
                </div>
          </div>
            `
        })
        url.value = ""
        size.value = ""
        name.value = ""
        code.value = ""
        brend.value = ""
        prise.value = ""
    }

}
// localStorage.clear()