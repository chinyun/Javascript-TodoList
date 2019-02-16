let enterButton = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function removeParent() {
	event.target.parentNode.parentNode.remove();
}

function beDone() {
	event.target.parentNode.parentNode.classList.toggle("done");
	event.target.classList.toggle("done");
}

function createListElement() {
	let li = document.createElement("li");
	li.classList.toggle("list")
	let text = document.createElement("span");
	text.appendChild(document.createTextNode(input.value));
	li.appendChild(text);
	ul.appendChild(li);
	input.value = "";

	let btnGroup = document.createElement("div");
	btnGroup.classList.toggle("btnGroup");
	li.appendChild(btnGroup);

	let doneBtn = document.createElement("button");
	doneBtn.classList.toggle("doneBtn");
	doneBtn.appendChild(document.createTextNode("Done"));
	btnGroup.appendChild(doneBtn);
	
	doneBtn.onclick = beDone;

	let deleteBtn = document.createElement("button");
	deleteBtn.classList.toggle("deleteBtn");
	deleteBtn.appendChild(document.createTextNode("Delete"));
	btnGroup.appendChild(deleteBtn);
	deleteBtn.onclick = removeParent;
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

enterButton.addEventListener("mouseleave", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

