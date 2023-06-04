export function contact() {

    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const heading = document.createElement("h1");;
    heading.textContent = "McDonald's";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const phone = document.createElement('img');
    phone.classList.add("image");
    phone.src = "../images/phone.jpg";
    phone.alt = "Image of phone number";
    contentDiv.appendChild(phone);

    const p1 = document.createElement('p');
    p1.classList.add("contact-copy");
    p1.textContent = "adsnbahsdvugavsdtvcausdv";
    contentDiv.appendChild(p1);

    const email = document.createElement('img');
    email.classList.add("image");
    email.src = "../images/email.jpg";
    email.alt = "Image of email address";
    contentDiv.appendChild(email);

    const p2 = document.createElement('p');
    p2.classList.add("contact-copy");
    p2.textContent = "adsnbahsdvugavsdtvcausdv";
    contentDiv.appendChild(p2);

    const address = document.createElement('img');
    address.classList.add("image");
    address.src = "../images/address.jpg";
    address.alt = "Image of email address";
    contentDiv.appendChild(address);

    const p3 = document.createElement('p');
    p3.classList.add("contact-copy");
    p3.textContent = "adsnbahsdvugavsdtvcausdv";
    contentDiv.appendChild(p3);

};