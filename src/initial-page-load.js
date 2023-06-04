export function initialPageLoad () {

    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const heading = document.createElement("h1");;
    heading.textContent = "McDonald's";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const topImage = document.createElement('img');
    topImage.classList.add("top-image");
    topImage.src = "../images/restaurant.jpg";
    topImage.alt = "Image of restaurant";
    contentDiv.appendChild(topImage);
    
    const para1 = document.createElement('p');
    para1.classList.add("landing-page-copy");
    para1.textContent = "adsnbahsdvugavsdtvcausdv";
    contentDiv.appendChild(para1);

    const para2 = document.createElement('p');
    para2.classList.add("landing-page-copy");
    para2.textContent = "dfmgokdnmgfhojpkfnghopkjfnghjon";
    contentDiv.appendChild(para2);
    
    const para3 = document.createElement('p');
    para3.classList.add("landing-page-copy");
    para3.textContent = "THanks asdbvuyavsduyavdsyu";
    contentDiv.appendChild(para3);
     
 }
 