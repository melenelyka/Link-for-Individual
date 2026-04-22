let total = 0;

function addItem() {
    let item = document.getElementById("item").value;
    let cost = document.getElementById("cost").value;

    if (item === "" || cost === "") {
        alert("Please fill in all fields!");
        return;
    }

    cost = parseFloat(cost);

    let list = document.getElementById("expenses");
    let li = document.createElement("li");

    li.textContent = item + " - ₱" + cost;
    list.appendChild(li);

    total += cost;
    document.getElementById("total").textContent = total;

    document.getElementById("item").value = "";
    document.getElementById("cost").value = "";
}