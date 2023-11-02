/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("button").onclick = generateDomainName;
};

function generateDomainName() {
  let wordFromUser = document.querySelector("#userWord").value;
  const domainNameOptions = [
    "awesome.com",
    "great.com",
    "miAmorConTeQuiero.com",
    "OMG.com"
  ];

  let finalDomainName = domainNameOptions.map(userWord => {
    return `${wordFromUser}${userWord}`;
  });

  let domainNameList = document.querySelector("#DomainNameList");
  domainNameList.innerHTML = finalDomainName.join("<br>");
}
