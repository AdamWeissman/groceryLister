const inputSelect = document.querySelector("input[name='newItem']")
const mainList = document.querySelector("ul");
const allListItems = document.querySelectorAll('li');
const sorterButton = document.getElementById('sorterButton')

for (let x = 0; x < allListItems.length; x++) {
  allListItems[x].addEventListener("click", myList);
}

// for (let x = 0; x < allListItems; x++) {
//   console.log(allListItems[x].innerText)
// }

sorterButton.addEventListener('click', sortList)

function sortList(){
  allListItems.forEach((x) => {
    console.log(x.innerText)
  })
}



function myList(){
  var temp = this.classList.toggle('red');
  if (temp) {
    let span = document.createElement('span');
    span.textContent = ' X ';
    span.addEventListener("click", function() {
      this.parentElement.remove()
    })
    this.appendChild(span);
  }
  else {
    this.getElementsByTagName('span')[0].remove()
  }
}

inputSelect.addEventListener('keypress', function(event){
  if (event.keyCode === 13){ 
    console.log(event.keyCode);
    makeNew();
  } 
})

function makeNew(){
  let li = document.createElement('li');
  li.addEventListener('click', myList);
  let textValue = inputSelect.value;
  inputSelect.value = '';
  let tempNode = document.createTextNode(textValue);
  li.appendChild(tempNode);
  mainList.appendChild(li);
}

