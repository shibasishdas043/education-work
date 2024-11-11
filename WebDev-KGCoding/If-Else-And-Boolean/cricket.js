var comp;

function batt(){
  let randomNumber = Math.random();
  if(randomNumber > 0 && randomNumber <= 0.5){
    comp = 'Bat';
  }
  else if(randomNumber > 0.5 && randomNumber <= 0.9){
    comp = 'Ball';
  }
  else{
    comp = 'Stump';
  }

  let resulMessege;

  if(comp === 'Ball'){
    resulMessege = 'User Won';
  }
  else if(comp === 'Bat'){
    resulMessege = 'Thats A Tie';
  }
  else if(comp === 'Stump'){
    resulMessege = 'Computer Won';
  }
  alert(`you have Chosen Bat . Computer Choice Is ${comp} And ${resulMessege}`);
}

function bal(){
  let randomNumber = Math.random();
  if(randomNumber > 0 && randomNumber <= 0.5){
    comp = 'Bat';
  }
  else if(randomNumber > 0.5 && randomNumber <= 0.9){
    comp = 'Ball';
  }
  else{
    comp = 'Stump';
  }

  let resulMessege;

  if(comp === 'Ball'){
    resulMessege = 'User Won';
  }
  else if(comp === 'Bat'){
    resulMessege = 'Thats A Tie';
  }
  else if(comp === 'Stump'){
    resulMessege = 'Computer Won';
  }
  alert(`you have Chosen Ball . Computer Choice Is ${comp} And ${resulMessege}`);
}

function stum(){
  let randomNumber = Math.random();
  if(randomNumber > 0 && randomNumber <= 0.5){
    comp = 'Bat';
  }
  else if(randomNumber > 0.5 && randomNumber <= 0.9){
    comp = 'Ball';
  }
  else{
    comp = 'Stump';
  }

  let resulMessege;

  if(comp === 'Ball'){
    resulMessege = 'User Won';
  }
  else if(comp === 'Bat'){
    resulMessege = 'Thats A Tie';
  }
  else if(comp === 'Stump'){
    resulMessege = 'Computer Won';
  }
  alert(`you have Chosen Stump . Computer Choice Is ${comp} And ${resulMessege}`);
}