import { drawPoint, removePoints} from "./drawer.js";

document.addEventListener("DOMContentLoaded", function () {
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
                const response = await fetch("check.php", {
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
                const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};

                const newRow = `
                    <tr>
                        <td>${responseData.X}</td>
                        <td>${responseData.Y}</td>
                        <td>${responseData.R}</td>
                        <td>${responseData.hit}</td>
                        <td>${time.toLocaleString(undefined, options)}</td>
                        <td>${(parseFloat(responseData.executionTime) * 1000).toFixed(2)} ms</td>
                    </tr>
                `;

                tableBody.insertAdjacentHTML("beforeend", newRow);
                localStorage.setItem('tableData', tableBody.innerHTML);
                drawPoint(responseData.X, responseData.Y, responseData.R);
            } catch (error) {
                alert('Error: ' + error.message);
            }
        }
    });
});
