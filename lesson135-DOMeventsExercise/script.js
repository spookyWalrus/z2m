var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");	
	li.addEventListener("click",togg); // when clicked, togg function executes
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var button = makeButts(); // make new button, function defined below
	li.appendChild(button); // append new button to new list item
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// 1. If you click on the list item, it toggles the .done  class on and off.

// define toggle class function
function togg(event){ 
	var targ = event.target;  // this identifies which item was clicked, see below
		targ.classList.toggle("done"); // assign toggle class to item that was clicked
}
// add event listener to each existing list item:
for (var i=0;i<listItem.length;i++){
	listItem[i].addEventListener("click",togg); // when clicked, togg function executes
}

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

// define delete  function
function delButts(event){
	var erases = event.target.parentElement; // this affects 'li', the parent element of the button
	erases.remove();
}

// this is to assign delete button for existing list items...
for (var i=0;i<listItem.length;i++){
	var nu = listItem[i];
	var button = makeButts(); // create a delete button
	nu.appendChild(button); // append button to list item
}


// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)
// define make a delete button	
function makeButts(){
	var butts = document.createElement("button")
	butts.innerHTML = "Delete Item";
	butts.addEventListener("click",delButts); // assign delete function to button
	return butts;
}


//NOTE:  use  event.target to identify what element was clicked.
// Needs to be within a function, and that function is assigned by an event listener



