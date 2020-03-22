
    let todoLists = 0;

    document.addEventListener("DOMContentLoaded", (event) => {
  document.addEventListener("submit", (event) => {
  event.preventDefault(); //prevents default action of "submit" event

    let listInput = document.querySelector("input[id='list-input']");
    let listValue = listInput.value;

    if (listValue.length !== 0) { //test to be sure that user entered a value
      todoLists ++;
      createList(listValue);
      listInput.value = ''; //erases entered values
    }

    function createList(listValue) {

      let newTodoList = document.createElement('div');
      newTodoList.setAttribute('id', 'new-todo')
      document.body.appendChild(newTodoList);

      let newTitle = document.createElement('h2')
      newTitle.setAttribute('id', 'list-name')
      newTitle.innerHTML = listValue;
      newTodoList.appendChild(newTitle);

      let newListDiv = document.createElement('div')
      newListDiv.setAttribute('id', 'new-list-container')
      newTodoList.appendChild(newListDiv);

      let newList = document.createElement('ul')
      newList.setAttribute('id', 'todo-list' + todoLists)
      newListDiv.appendChild(newList);

      let newForm = document.createElement('form')
      newTodoList.appendChild(newForm);

      let itemInput = document.createElement('input');
      itemInput.setAttribute('id', 'item-input' + todoLists)
      itemInput.setAttribute('type', 'text')
      itemInput.setAttribute('name', 'item-input')
      itemInput.setAttribute('placeholder', 'add list item')
      newForm.appendChild(itemInput);

      document.addEventListener("submit", (event) => {
        event.preventDefault();
        let item = document.querySelector('#item-input' +todoLists);
        let itemValue = item.value;

        if (itemValue.length !== 0) {
          createListItem(itemValue);
          //clear the user input
          item.value = '';
        }
      });
    }

    function createListItem(itemValue) {

      //create new item 
      let newItemEl = document.createElement('li');
      let newCheckBox = document.createElement('input');
      newCheckBox.setAttribute("type", "checkbox");
      newItemEl.appendChild(newCheckBox); //
      let newLabel = document.createElement('label');
      newLabel.innerHTML = itemValue;
      newItemEl.appendChild(newLabel);
      //get a reference to list and append list item
      let list = document.querySelector('#todo-list' +todoLists);
      list.appendChild(newItemEl);

      //event listener that changes color of list items when checked
        newCheckBox.addEventListener("click", function (event) {
          if (this.nextSibling.style.color == "rgb(175, 175, 175)") {
            this.nextSibling.style.color = "";
          } else {
            this.nextSibling.style.color = "rgb(175, 175, 175)";
          }
        });
      
    }
    console.log(todoLists);

  }) // form submit
}) // document ready