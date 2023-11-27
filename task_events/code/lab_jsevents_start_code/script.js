
const form = document.querySelector("#todo-form");
const list = document.querySelector("#list"); // Change variable name to "list"
const input = document.querySelector("#new-todo");
const submission = document.querySelector("#submit");
const remove = document.querySelector("#deleteItem");

// input.addEventListener("input", (event) => {
//     // input.innerText = event.target.value;
//     console.log("new item written");
// });


// // function submitForm() {
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const list1 = document.createElement("li");
//     // list.innerText = inputValue;
//     // const list1 = input.value;
//     list1.innerText = event.target.value;
//     list.appendChild(list1);
//     console.log("1 item added")
// });
// // form.submit();

// // };




input.addEventListener("input", (event) => {
    input.innerText = event.target.value;
    console.log("new item written");
});
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const listItem = document.createElement("li"); // Change variable name to "listItem"
    listItem.innerText = input.value;
    list.appendChild(listItem); // Use the correct variable name "list"
    console.log("1 item added");
    const deleteButton = document.createElement("deleteItem");
    // list.listItem = remove.value;
    // listItem.removeChild(deleteButton);
    // deleteButton.list = list.remove(listItem)
});

// form.addEventListener("list", (event) => {
//     list.removeAttribute("button");
// const deleteButton = document.createElement("button");
// deleteButton.innerText = input.remove(listItem);
// });


//to add delete button

