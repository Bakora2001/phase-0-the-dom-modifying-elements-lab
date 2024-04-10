// Create a new div element programmatically
const element = document.createElement("div");

// Append the new div element to the body
document.body.append(element);

// Create an unordered list (ul) and populate it with three list items (li)
const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

// Append the ul to the div element
element.append(ul);

// Change the style properties of the main element
const main = document.createElement("main");
main.id = "main";
main.style.height = "300px";
main.style.backgroundColor = "#27647B";
main.textContent = "You've changed what's on the screen!";
document.body.append(main);

// Add a class to the main element using the className property
main.className = "pet-listing dog";

// Remove the second list item (li) from the unordered list (ul)
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);

// Remove the unordered list (ul) from the div element
element.removeChild(ul);

// Create a new h1 element for the victory message
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion";
main.append(newHeader);
