const inputSelect = document.querySelector("input[name='newItem']")
const mainList = document.querySelector('ul');
inputSelect.addEventListener('keypress', function(event){
  if (event.keyCode === 13){ //13 is enter
    console.log(event.keyCode);
    makeNew();
  } 

})

const allListItems = document.querySelectorAll('li');
for (let x = 0; x < allListItems; x++) {
  allListItems[x].addEventListener('click', myList);
}

function makeNew(){
  let li = document.createElement('li');
  li.addEventListener('click', myList);
  let textValue = inputSelect.value;
  inputSelect.value = '';
  let tempNode = document.createTextNode(textValue);
  li.appendChild(tempNode);
  mainList.appendChild(li);
}

function myList(){
  var temp = this.classList.toggle('red')
}