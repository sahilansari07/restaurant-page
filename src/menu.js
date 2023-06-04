export function menu() {

    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const heading = document.createElement("h1");;
    heading.textContent = "McDonald's";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const pizza1 = document.createElement('img');
    pizza1.classList.add("image");
    pizza1.src = "../images/pizza.jpg";
    pizza1.alt = "Image of pizza";
    contentDiv.appendChild(pizza1);

    const p1 = document.createElement('p');
    p1.classList.add("menu-copy");
    p1.textContent = "adsnbahsdvugavsdtvcausdv";
    contentDiv.appendChild(p1);

    const pasta1 = document.createElement('img');
    pasta1.classList.add("image");
    pasta1.src = "../images/pasta.jpg";
    pasta1.alt = "Image of pasta";
    contentDiv.appendChild(pasta1);

    const p2 = document.createElement('p');
    p2.classList.add("menu-copy");
    p2.textContent = "adsnbahsdvugavsdtvcausdv";
    contentDiv.appendChild(p2);

}