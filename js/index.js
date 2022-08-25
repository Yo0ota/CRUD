
var allProducts;

if (localStorage.getItem("productData") == null) {

    allProducts = [];
    
} else {

    allProducts = JSON.parse(localStorage.getItem("productData"));
    displayProduct();
}

var inputs = document.getElementsByClassName("form-control");
    
function addProduct() {
    var productName = document.getElementById("productNameInp").value;
    var productPrice = document.getElementById('productPriceInp').value;
    var productCategory = document.getElementById('productCategoryInp').value;
    var productDescreption = document.getElementById('productDescreptionInp').value;      
    var dash = productName.search("-");
    var productCompany = productName.slice(0, dash);
    var prductModel = productName.slice(dash + 1, productName.length);

    if (validateForm(productName) == true) {
        var product = {
        name: productName,
        price: productPrice,
        category: productCategory,
        company: productCompany,
        model: prductModel,
        descreption:productDescreption,
    }

        allProducts.push(product); 
        
        localStorage.setItem("productData", JSON.stringify(allProducts));
        displayProduct();
        clearForm();
    } else {
        window.alert("productName is not valid");
    }
   
}

function displayProduct() {
    var temp = "";
    for (var i = 0; i < allProducts.length; i++) {
        temp += `<div class="col-md-3 mb-5">
                    <div class="product mb-3">
                        <img class="img-fluid" src="hd-wallpapers-for-laptop-asiancinema-club-5af563b8cf096.jpg">
                        <h3 class="pt-3">`+ allProducts[i].name + ` 
                        <span class="ml-3 badge badge-info">`+ allProducts[i].category +`</span></h3>
                        <p>`+allProducts[i].descreption+`</p>
                        <div class="price">`+allProducts[i].price+`</div>
                        <span class="company">`+allProducts[i].company+`</span>
                        <span class="model ml-5">Model:`+ allProducts[i].model +` </span>
                        
                    </div>
                    <button onClick="deleteItem(`+i+`)" class="btn btn-outline-danger"> Delete </button>
                    <button onClick="updateItem(`+i+`)" class="btn btn-outline-warning"> Update </button>
                </div>`;
    }

    document.getElementById("productRow").innerHTML = temp;
}

function clearForm() {
    for (var i = 0; i < inputs.length; i++){
        inputs[i].value = "";
    }
}

function productSearch(term) {
    
    temp = ``;
    for (var i = 0; i < allProducts.length; i++){
        if (allProducts[i].name.toLowerCase().includes(term.toLowerCase()))
        {
            temp += `<div class="col-md-3">
            <div class="product mb-5">
                <img class="img-fluid" src="hd-wallpapers-for-laptop-asiancinema-club-5af563b8cf096.jpg">
                <h3 class="pt-3">`+ allProducts[i].name + ` 
                <span class="ml-3 badge badge-info">`+ allProducts[i].category +`</span></h3>
                <p>`+allProducts[i].descreption+`</p>
                <div class="price">`+allProducts[i].price+`</div>
                <span class="company">`+allProducts[i].company+`</span>
                <span class="model ml-5">Model:`+ allProducts[i].model +` </span>
                
                
            </div>
            </div>`;
        }
    }
    document.getElementById("productRow").innerHTML = temp;
}

function deleteItem(indx) {
    var deleted = allProducts.splice(indx, 1);
    localStorage.setItem("productData", JSON.stringify(allProducts));
    displayProduct();
}

function validateForm(productName){
    var productNameRegex = /^[A-Z][a-z]{3,8}/;

    if (productNameRegex.test(productName) == false) {

        document.getElementById("addBtn").disapled = "true";

    } else {

        document.getElementById("addBtn").removeAttribute("disapled");
        
    }
}