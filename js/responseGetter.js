import {drawPoint, removePoints} from "./drawer.js";
import {loadTableData, writeTable} from "./loadData.js";

function responseGetter() {
    const svgGraph = document.getElementById("svgGraph");
    const tableBody = document.querySelector('#resultTable tbody');
    const form = document.getElementById('form');

    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        removePoints();

        const formData = new FormData(form);
        const xValues = formData.getAll("X");
        formData.delete("X");

        for (const xValue of xValues) {
            try {
                formData.append("X", xValue);
                const response = await fetch("./src/check.php", {
                    method: "POST",
                    dataType: "json",
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const responseData = await response.json();
                let time = new Date(responseData.currentTime);
                time = new Date(time.getTime() - (time.getTimezoneOffset() * 60 * 1000));
                const options = {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric'
                };

                const jsonData = {
                    X: responseData.X,
                    Y: responseData.Y,
                    R: responseData.R,
                    hit: responseData.hit,
                    currentTime: time.toLocaleString(undefined, options),
                    executionTime: (parseFloat(responseData.executionTime) * 1000).toFixed(2) + "ms"
                }

                // const newRow = `
                //     <tr>
                //         <td>${jsonData.X}</td>
                //         <td>${jsonData.Y}</td>
                //         <td>${jsonData.R}</td>
                //         <td>${jsonData.hit}</td>
                //         <td>${jsonData.currentTime}</td>
                //         <td>${jsonData.executionTime}</td>
                //     </tr>
                // `;
                //
                // tableBody.insertAdjacentHTML("beforeend", newRow);
                appendTableDataLocalStorage(JSON.stringify(jsonData));
                writeTable(loadTableData(), tableBody);
                drawPoint(responseData.X, responseData.Y, responseData.R, svgGraph);
            } catch (error) {
                alert('Error: ' + error.message);
            }
        }
    });
}

function appendTableDataLocalStorage(data) {
    const dataArray = loadTableData();

    dataArray.push(data);
    const updatedData = JSON.stringify(dataArray);
    localStorage.setItem('tableData', updatedData);
}

export {responseGetter};
