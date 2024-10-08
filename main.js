function createCard(event) {
    event.preventDefault();
  
    const frag = document.createDocumentFragment();
    const nameTag = frag.appendChild(document.createElement("h3"));
    const titleTag = frag.appendChild(document.createElement("h6"));
    const descTag = frag.appendChild(document.createElement("p"));
    const cardDisplay = document.querySelector(".card-display");
    const cardTile = document.createElement("div");
  
    nameTag.textContent = document.getElementById("name").value;
    titleTag.textContent = document.getElementById("title").value;
    descTag.textContent = document.getElementById("desc").value;
  
    let toAppend = [nameTag, titleTag, descTag];
    for (let i = 0; i < toAppend.length; i++) {
      cardTile.appendChild(toAppend[i]);
    }
  
    cardDisplay.appendChild(cardTile);
    cardTile.style.backgroundColor = "green";
  }
  const cardBtn = document.getElementById("btn");
  
  cardBtn.addEventListener("click", createCard);