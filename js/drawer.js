const svgGraph = document.getElementById("svgGraph");
const newCircle = document.createElementNS("http://www.w3.org/2000/svg", 'use');
const RText = document.getElementsByClassName("RText");
const RHalfText = document.getElementsByClassName("RHalfText");
const MinusRHalfText = document.getElementsByClassName("MinusRHalfText");
const MinusRText = document.getElementsByClassName("MinusRText");

function draw(X, Y, R) {
    let multiplier = 6 / R;
    newCircle.setAttribute("x", (X * multiplier).toString());
    newCircle.setAttribute("y", (Y * -multiplier).toString());
    newCircle.setAttribute("href", "#circle");
    newCircle.setAttribute("class", "usedCircle");

    for (let textElement of RText) {
        textElement.innerHTML = R.toString();
    }
    for (let textElement of RHalfText) {
        textElement.innerHTML = (R/2).toString();
    }
    for (let textElement of MinusRHalfText) {
        textElement.innerHTML = (-R/2).toString();
    }
    for (let textElement of MinusRText) {
        textElement.innerHTML = (-R).toString();
    }

    svgGraph.appendChild(newCircle);
}

export {draw};