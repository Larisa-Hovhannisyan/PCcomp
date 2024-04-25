let price = document.querySelectorAll('.gallery-item > h3');
let quantity = document.querySelectorAll('.quantity');
let money = document.querySelectorAll('.money');
let addCart = document.querySelectorAll('.add-cart');
let productName = document.querySelectorAll('.gallery-item > span');
let cartContent = document.querySelector('.cart-content'); 
let total = document.querySelector('.total');
var counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 3000)

const cartIcon = document.getElementById('cartIcon');
const cartToggle = document.getElementById('cart-toggle');
cartIcon.addEventListener('onclick', function() {
  cartToggle.onclick = true;
});
cartIcon.addEventListener('onclick', function() {
  cartToggle.onclick = false;
});

let grandTotal = 0;
let deleteButton;
let CartMoney;
quantity.forEach((item, index) => {
    item.oninput = () => item.value < 0 ? item.value = 0 : money[index].value = price[index].getAttribute('data') * item.value;
    item.onkeydown = (e) => {
        if(e.which >= 97 && e.which <= 105 || e.key == 'Backspace') {
            return true;
        }
        else {
            return false;
        }
    }
    addCart[index].onclick = () => {
            if(item.value !== '') {
        cartContent.innerHTML += `<div class="cart-item">
               <h2 class="cart-quantity">${item.value}pcs</h2>
               <h2 class="cart-quantity">${productName[index].innerText}</h2>
               <h2 class="cart-money" data="${money[index].value}">${money[index].value}$</h2>
               <button class="deleteButton">X</button>
           </div>`;
                alert("Item(s) will be added! You can check your shopping cart after confirmation!");
                deleteButton = document.querySelectorAll('.deleteButton');
                CartMoney = document.querySelectorAll('.cart-money');
                grandTotal += +money[index].value;
                total.innerText = grandTotal + '$';
                deleteButton.forEach(($,_) => {
                    $.onclick = () => {
                        $.parentElement.remove();
                        grandTotal -= CartMoney[_].getAttribute('data');
                        total.innerText = grandTotal + '$';
                    }
                });
        }
    }
});

