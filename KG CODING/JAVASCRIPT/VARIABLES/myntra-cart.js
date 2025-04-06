let quantity = 0;
document.querySelector('#addtobagheading').innerText = `Your Bag Has ${quantity} Items`;

function addToBag() {
  quantity += 1;
  document.querySelector('#addtobagheading').innerText = `Your Bag Has ${quantity} Items`;
}
function addwishlist(){
  if(quantity>0){
    quantity-=1;
    document.querySelector('#addtobagheading').innerText = `Your Bag Has ${quantity} Items`;
  }
}
function addsaleitem(){
  quantity +=2;
  document.querySelector('#addtobagheading').innerText = `Your Bag Has ${quantity} Items`;
}