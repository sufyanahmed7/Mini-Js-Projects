//EXAMINE THE DOCUMENT OBJECT IN OUR CODE//
//console.dir(document);
//**console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
///document.all[6].textContent = "My Page";
//console.log(document.forms);

//GET ELEMENT BY ID//

// header = document.getElementById("header-title");
//var mainheader = document.getElementById("main-header");

//console.log(header);
//header.innerText = "Hello World";
//header.innerHTML = " <h3>'Hello'</h3>";
//mainheader.style.borderBottom = "solid 15px yellow";

//GET ELEMENTS BY CLASS NAME//
//var items = document.getElementsByClassName("list-group-item");
//console.log(items);
//console.log(items[1]);
//items[1].style.backgroundColor = "yellow";
//for (let i = 0; i < items.length; i++) {
//items[i].style.backgroundColor = "yellow";
//}

//GET ELEMENTS BY TAG NAME//

//var li = document.getElementsByTagName("li");
//console.log(li);
//for (let i = 0; i < li.length; i++) {
//li[i].style.backgroundColor = "yellow";
//}

//QUERY SELECTOR//

//var header = document.querySelector("#main-header");
//header.style.borderBottom = "solid 15px yellow";

//var input = document.querySelector("input");
//console.log(input);
//input.value = "hello";

//var submit = document.querySelector('input[type="submit"]');
//submit.value = "SEND";

//var item = document.querySelector(".list-group-item");
//item.style.color = "red";

//var lastitem = document.querySelector(".list-group-item:last-child");
//lastitem.style.color = "blue";

//var Seconditem = document.querySelector(".list-group-item:nth-child(2)");
//Seconditem.style.color = "green";

//QUERY SELECTOR ALL//

//var titles = document.querySelectorAll(".title");
//console.log(titles);
//titles[0].textContent = "Hello";
//var odd = document.querySelectorAll("li:nth-child(odd)");
//for (let i = 0; i < odd.length; i++) {
//odd[i].style.backgroundColor = "yellow";
//}
//var even = document.querySelectorAll("li:nth-child(even)");
//for (let i = 0; i < even.length; i++) {
//even[i].style.backgroundColor = "green";
//}

//TRAVERSING THE DOM//

//var item = document.querySelectorAll("#items");
//console.log(item.parentNodes);

//PARENT ELEMENT//

//var item = document.querySelectorAll(".title");
//console.log(item.parentElement);

//CHILD NODES//

//console.log(items.childNodes);

//NEXT SIBLING//
//console.log(item.nextsibling);

//CREATE DOM ELEMENTS//

//create a div//

// var newDiv = document.createElement("div");

// //ADD CLASS NAME//

// newDiv.className = "Hello";

// //ADD ID TO THE DIV WE CREATED//

// newDiv.id = "idOfDiv";

// //ADD ATTRIBUTE//

// newDiv.setAttribute("title", "Hello Div");

// //CREATE TEXT NODE TO WRITE IN A DIV WE CREATED//

// var newDivText = document.createTextNode("Hello World");

// //ADD TEXT TO DIV//

// newDiv.appendChild(newDivText);

// //INSERTING THIS DIV TO CODE HTML//

// var container = document.querySelector("header.container");
// var h1 = document.querySelector("header h1");
// container.insertBefore(newDiv, h1);
// console.log(newDiv);

//EVENTS

// var button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);

// function buttonClick(e) {
// var items = document.getElementsByClassName("list-group-item");
// items[1].style.backgroundColor = "yellow";
// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "yellow";
// }
// console.log(e);
// console.log(e.target.id);
// console.log(e.type);
//Mouse location from browser
// console.log(e.clientX);
// console.log(e.clientY);
//Mouse location within that element(like in this case button)
// console.log(e.offsetX);
// console.log(e.offsetY);
//Check whether we are holding that specific button while clicking or not return true or fals
// console.log(e.shiftKey);
// }
//button.addEventListener("dblclick", newEvent);
// button.addEventListener("mousedown", newEvent);
// button.addEventListener("mouseup", newEvent);

// var box = document.getElementById("box");
// box.addEventListener("mouseenter", newEvent);

// box.addEventListener("mouseover", newEvent);

// box.addEventListener("mousemove", newEvent);

// var inputForm = document.getElementById("item");
// var form = document.querySelector("form");

//KEYS

// inputForm.addEventListener("keydown", newEvent);
// inputForm.addEventListener("keyPress", newEvent);
// inputForm.addEventListener("focus", newEvent);//Just press on search button now its on focus type

//Cut paste

// inputForm.addEventListener("cut", newEvent);
// inputForm.addEventListener("paste", newEvent);

// form.addEventListener("submit", newEvent);

// function newEvent(e) {
//   console.log("Event type is =" + e.type);
//   // console.log(e.target.value);
//   // document.getElementById("output").innerHTML =
//   //   "<h3>" + e.target.value + "</h3>";
//   // output.innerHTML =
//   //   "<h3>Mouse x:" + e.offsetX + "</h3> <h3>Mouse Y:" + e.offsetY + "</h3>";
//   // document.body.style.backgroundColor =
//   //   "rgb(" + e.offsetX + "," + e.offsetX + ",90)";
// }
