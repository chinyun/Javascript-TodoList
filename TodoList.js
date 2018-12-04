var button1 = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

ul.onclick = function() {
	var target = event.target;
	target.classList.toggle("done");
}

function inputLength() {
	return input.value.length;
}

function removeParent() {
	event.target.parentNode.remove();
}

function createListElement() {
	var li = document.createElement("li");
	li.classList.toggle("list")
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
	btn.classList.toggle("btn");
	btn.appendChild(document.createTextNode("delete"));
	li.appendChild(btn);
	btn.onclick = removeParent;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress() {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button1.addEventListener("mouseleave", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

