let addProductButton = document.querySelector("#addProductButton");
let addProductPopupWrapper = document.querySelector("#addProductPopupWrapper");
let addProductPopupWrapperClose = document.querySelector("#addProductPopupWrapperClose");
function addProductWrapperOPen (){
    addProductPopupWrapper.classList.replace("hidden", "block");
}
function addProductWrapperClose (){
    addProductPopupWrapper.classList.replace("block", "hidden");
}
addProductButton.addEventListener("click", addProductWrapperOPen);
addProductPopupWrapperClose.addEventListener("click", addProductWrapperClose);

/*////////////////////////////////////////////////////////////////////////////*/ 

let product = [];

let newProduct = [
    {
        nameProduct: "Volkswagen",
        priceProduct: 10,
        descProduct: "Polo (2023)",
    },
    {
        nameProduct: "Renault",
        priceProduct: 20,
        descProduct: "Megane (2023)",
    },
    /*{
        nameProduct: "Toyota",
        priceProduct: 30,
        descProduct: "Corolla (2023)",
    },
    {
        nameProduct: "Dacia",
        priceProduct: 40,
        descProduct: "Duster (2023)",
    },
    {
        nameProduct: "Honda",
        priceProduct: 50,
        descProduct: "Civic (2023)",
    }*/
]
let countProduct = Object.values(newProduct).length;
document.getElementById("productCount").innerHTML = countProduct;

document.getElementById("nameProduct").innerHTML = newProduct[0].nameProduct;
document.getElementById("priceProduct").innerHTML = `₺` + "" + newProduct[0].priceProduct;
document.getElementById("descProduct").innerHTML = newProduct[0].descProduct;


/*
function printProducts(newProduct){

}
*/



document.querySelector("#formProduct").addEventListener("submit", function(e){
    let nameProductInput = document.querySelector("#nameProductInput").value;
    let priceProductInput = document.querySelector("#priceProductInput").value;
    let descProductInput = document.querySelector("#descProductInput").value;

    let myProduct = new products(nameProductInput, priceProductInput,descProductInput);
    const ui = new UI ();

    ui.addProduct(myProduct);

    ui.clearForm();
});

function products (nameProductInput, priceProductInput, descProductInput) {
    this.nameProductInput = nameProductInput;
    this.priceProductInput = priceProductInput;
    this.descProductInput = descProductInput;
}

function UI () {};

UI.prototype.addProduct = function(myProduct){
    const list = document.querySelector(".listProduct");

    let x = document.createElement("ul");
    x.innerHTML = `<li ><b>${myProduct.nameProductInput}</b></li> 
                    <li>${myProduct.descProductInput}</li>
                    <li>₺ ${myProduct.priceProductInput}</li>
                    <li class="rounded-lg w-40 px-3 py-3 mt-5 adu ajr arf arv awa awg bah bbn bis boy boz bpb bpk uppercase text-white bg-sky-800 ">ürünü düzenle</li>`;
    list.appendChild(x)
    newProduct.push(myProduct);
    
    let countProduct = Object.values(newProduct).length;
    document.getElementById("productCount").innerHTML = countProduct;
}



UI.prototype.clearForm = function (){
    document.querySelector("#nameProductInput").value = "";
    document.querySelector("#priceProductInput").value = "";
    document.querySelector("#descProductInput").value = "";
}



