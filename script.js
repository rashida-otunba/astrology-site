let getContainerDiv=document.getElementById("container");

let headingElement=document.createElement("h1");
headingElement.textContent="There are twelve zodiac signs";
getContainerDiv.appendChild(headingElement);
headingElement.classList.add("header-class");

let ariesElement=document.createElement("h3");
ariesElement.textContent="Aries";
getContainerDiv.appendChild(ariesElement);
ariesElement.classList.add("zodiac-list");

let aries_para=document.createElement("h4");
aries_para.textContent="i am Aries sub content";
ariesElement.appendChild(aries_para);

let taurusElement=document.createElement("h3");
taurusElement.textContent="Taurus";
getContainerDiv.appendChild(taurusElement);
taurusElement.classList.add("zodiac-list");

let taurus_para=document.createElement("h3");




