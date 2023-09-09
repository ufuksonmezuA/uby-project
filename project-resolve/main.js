console.log("uyarı");

const addBtnEl = document.getElementById("addProduct");
const addBtnDrawerEl = document.getElementById("addproductDrawer");
const productWraperEl = document.querySelector(".productsWrapper");
const drawerEl = document.querySelector(".drawer");

const closeBtnEl = document.getElementById("closeBtn");
const productName = document.getElementById("prName");
const productDesc = document.getElementById("prDesc");
const productPrice = document.getElementById("prPrice");
closeBtnEl.addEventListener("click", () => {
    drawerEl.classList.toggle("invisible");
})
addBtnEl.addEventListener("click", () => {
    drawerEl.classList.toggle("invisible");
});
const addProduct = () => {

    const product = {
        name: productName.value,
        price: productPrice.value,
        desc: productDesc.value,
    }
    let rowContainer = document.getElementById("productRows");
    const productCard = `
    <div class="w-1/3 p-4">
        <div class="bg-gray-200 flex flex-col items-center justify-center">
            <h2>${product.name}</h2>
            <p>${product.desc}</p>
            <p>${product.price}</p>
        </div>
    </div>
    `
    rowContainer.innerHTML += productCard
    productName.value = "";
    productPrice.value = "";
    productDesc.value = "";    
    drawerEl.classList.toggle(invisible);
}
addBtnDrawerEl.addEventListener("click", addProduct);