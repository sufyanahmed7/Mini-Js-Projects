var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var span = document.getElementById("spn");

//Form Submit event

form.addEventListener("submit", addItem);

//Dlete Event

itemList.addEventListener("click", removeItem);

//Remove item

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
//Add items
function addItem(e) {
  e.preventDefault();

  //Get input value
  var newItem = document.getElementById("item").value;

  //Create Element

  var li = document.createElement("li");
  var head = document.createElement("h2");

  //Give class name
  li.className = "list-group-item";
  //Add text to input value
  li.appendChild(document.createTextNode(newItem));

  //Create delete Button

  var deleteBtn = document.createElement("button");

  //Add classes to btn

  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  //wHAT TO WRITR IN BUTTON BCZ WE MADE IT HERE
  deleteBtn.appendChild(document.createTextNode("X"));

  //APPEND BUTTON TOLIST
  li.appendChild(deleteBtn);
  if ((newItem = newItem)) {
    itemList.appendChild(li);
  }
  if (document.getElementById("item").value.length == 0) {
    document.getElementById("spn").style.color = "red";
    const error = (document.getElementById("spn").innerText =
      "Please put item");
  }

  setTimeout(() => {
    if (newItem) {
      span.removeChild;
    }
  }, 1000);
}
