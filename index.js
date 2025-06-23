let btn = document.querySelector("button").addEventListener("click", () => {
  let text = document.querySelector("#textfield").value;

  if (document.querySelector("#textfield").value === "") {
    alert("Error: please enter some task!!");
  } else {
    let li = document.createElement("li");

    let ul = document.querySelector("#Add");

    ul.appendChild(li);

    li.innerText = text;

    li.style.position = "relative";

    li.style.top = "14px";

    document.querySelector("#textfield").value = "";

    let deletebtn = document.createElement("button");

    deletebtn.innerText = "Delete";

    deletebtn.style.backgroundColor = "red";

    deletebtn.style.position = "relative";

    deletebtn.style.left = "240px";
    let curr = new Date();
    let date = curr.toLocaleString();
    li.appendChild(deletebtn);
    li.append(date);

    deletebtn.addEventListener("click", () => {
      li.innerText = "";

      deletebtn.remove();

      editBtn.remove();
    });
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    li.appendChild(editBtn);

    editBtn.addEventListener("click", () => {
      if (editBtn.innerText === "Edit") {
        let currentVal = li.firstChild.textContent;

        let inputVal = document.createElement("input");
        inputVal.type = "text";
        inputVal.value = currentVal;
        inputVal.setAttribute("id", "vertualText");

        li.innerText = "";
        li.appendChild(inputVal);
        li.appendChild(editBtn);
        li.appendChild(deletebtn);
        li.append(date);
        editBtn.innerText = "Save";
        editBtn.style.position = "relative";
        editBtn.style.left = "230px";
      } else {
        let UpdatedTask = li.querySelector("input").value;
        li.innerText = UpdatedTask;
        li.appendChild(editBtn);
        editBtn.innerText = "Edit";
        li.appendChild(deletebtn);
        li.append(date);
        editBtn.style.position = "relative";
        editBtn.style.left = "230px";
      }
    });
  }
});
