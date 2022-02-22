document.getElementById("add-border").addEventListener("click", function () {
    const contain = document.getElementById("friend-container");
    contain.style.border = "3px solid yellow";
});

function addBgColor() {
    const friends = document.getElementsByClassName("friend");
    for (const friend of friends) {
        friend.style.backgroundColor = "lightBlue"
    };
}
;

document.getElementById("add-friend").addEventListener("click", function () {
    const container = document.getElementById("friend-container");
    const friendDiv = document.createElement("div");
    friendDiv.classList.add("friend");
    friendDiv.innerHTML = `
          <h3 class="friend-name">friend-4</h3>
          <p>Alias, Bamboo.</p>`
    container.appendChild(friendDiv)
});