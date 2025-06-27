//add event on button to add tasks
let btn = document.querySelector("button").addEventListener("click", () => {
  let text = document.querySelector("#textfield").value;

  if (document.querySelector("#textfield").value === "") {
    alert("Error: please enter some task!!");
  } else {
    //creating li to show tasks

    let li = document.createElement("li");
    li.setAttribute("class", "vertual-task-li");
    let ul = document.querySelector("#Add");
    ul.appendChild(li);
    li.innerText = text; 
    // li.style.position = "relative";
    // li.style.top = "14px";
    document.querySelector("#textfield").value = "";

    // create a delete button

    let deletebtn = document.createElement("button");
    deletebtn.setAttribute("class", "delete-button");
    deletebtn.innerText = "Delete";

    deletebtn.style.backgroundColor = "red";

    // deletebtn.style.position = "relative";
    // deletebtn.style.left = "240px";
    // time
    let curr = new Date();
    let date = document.createElement("div");
     date.setAttribute('class','date')
    date.innerHTML=`${curr.getHours()}:${curr.getMinutes()}:${curr.getSeconds()}`;

    li.append(date);
    li.appendChild(deletebtn);
    // working of delete button
    deletebtn.addEventListener("click", () => {
      li.innerText = "";

      editBtn.remove();
      
      deletebtn.remove();
    });
    // create edit button
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.setAttribute("class", "edit-button");
    li.appendChild(editBtn);
    // working of edit button
    editBtn.addEventListener("click", () => {
      if (editBtn.innerText === "Edit") {
        let currentVal = li.firstChild.textContent;

        let inputVal = document.createElement("input");
        inputVal.type = "text";
        inputVal.value = currentVal;
        inputVal.setAttribute("id", "vertualText");

        li.innerText = "";
        li.appendChild(inputVal);
        li.append(date);
        li.appendChild(editBtn);
        li.appendChild(deletebtn);

        editBtn.innerText = "Save";
        // editBtn.style.position = "relative";
        // editBtn.style.left = "230px";
      } else {
        let UpdatedTask = li.querySelector("input").value;
        li.innerText = UpdatedTask;
        li.appendChild(editBtn);
        editBtn.innerText = "Edit";
        li.appendChild(deletebtn);
        li.append(date);
        // editBtn.style.position = "relative";
        // editBtn.style.left = "230px";
      }
    });
  }
});
