let cart = [];

function addtocart(){
   let productName = document.querySelector('card-title').textContent;
   let productPrice = document.querySelector('card-price').textContent;

   let item = {
       name: productName,
       price: productPrice
}