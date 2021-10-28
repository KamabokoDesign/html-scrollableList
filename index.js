const data = ["Item 1", "Item 2", "Item 3"];

function buildList() {
  data.map((x) => {
    const ulParent = document.getElementById("listbox");
    let option = document.createElement("option");
    option.setAttribute("value", x.toLowerCase());

    let span = document.createElement("span");
    let imageDemo = document.createElement("div");
    imageDemo.className = "imageDemo";
    span.textContent = x;

    option.appendChild(imageDemo);
    option.appendChild(span);
    ulParent.appendChild(option);
  })
}

buildList();