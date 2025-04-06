let currentDisplayValue = '';
document.querySelector('#display').value = currentDisplayValue;
function c(){
  currentDisplayValue = '';
  document.querySelector('#display').value = currentDisplayValue;
}
function one(){
  currentDisplayValue += 1;
  document.querySelector('#display').value = currentDisplayValue;
}
function two(){
  currentDisplayValue += 2;
  document.querySelector('#display').value = currentDisplayValue;
}
function three(){
  currentDisplayValue += 3;
  document.querySelector('#display').value = currentDisplayValue;
}
function four(){
  currentDisplayValue += 4;
  document.querySelector('#display').value = currentDisplayValue;
}
function five(){
  currentDisplayValue += 5;
  document.querySelector('#display').value = currentDisplayValue;
}
function six(){
  currentDisplayValue += 6;
  document.querySelector('#display').value = currentDisplayValue;
}
function seven(){
  currentDisplayValue += 7;
  document.querySelector('#display').value = currentDisplayValue;
}
function eight(){
  currentDisplayValue += 8;
  document.querySelector('#display').value = currentDisplayValue;
}
function nine(){
  currentDisplayValue += 9;
  document.querySelector('#display').value = currentDisplayValue;
}
function zero(){
  currentDisplayValue += 0;
  document.querySelector('#display').value = currentDisplayValue;
}
function plus(){
  currentDisplayValue += '+';
  document.querySelector('#display').value = currentDisplayValue;
}
function minus(){
  currentDisplayValue += '-';
  document.querySelector('#display').value = currentDisplayValue;
}
function cross(){
  currentDisplayValue += '*';
  document.querySelector('#display').value = currentDisplayValue;
}
function devide(){
  currentDisplayValue += '/';
  document.querySelector('#display').value = currentDisplayValue;
}
function equal(){
  let result = eval(currentDisplayValue);
  currentDisplayValue = result;
  document.querySelector('#display').value = currentDisplayValue;
}
