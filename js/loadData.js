// Load "tableData" from local storage and returns it as an array of Json objects
function loadTableData() {
    const storedData = localStorage.getItem('tableData');

    let dataArray = [];
    if (storedData) {
        try {
            dataArray = JSON.parse(storedData);
        } catch (error) {
            console.error('Error parsing stored data:', error);
        }
    }
    return dataArray;
}
function loadData() {
    const xValuesString = localStorage.getItem('X');
    const xValues = xValuesString ? xValuesString.split(',') : [];
    const yValue = localStorage.getItem('Y');
    const rValue = localStorage.getItem('R');
    const tableData = loadTableData();
    return {xValues, yValue, rValue, tableData};

}

/* Write {@link tableData} to the table
* @param tableData - array of Json objects
* @param tableBody - table body element
* */
function writeTable(tableData, tableBody) {
    tableBody.innerHTML = '';
    for (const row in tableData) {
        const item = JSON.parse(tableData[row]);
        const newRow = `
            <tr>
                <td>${item.X}</td>
                <td>${item.Y}</td>
                <td>${item.R}</td>
                <td>${item.hit}</td>
                <td>${item.currentTime}</td>
                <td>${item.executionTime}</td>
            </tr>
        `;

        tableBody.innerHTML += newRow;
    }
}

/* Write {@link xValues}, {@link yValue}, {@link rValue} and {@link tableData} to the page
* @param xValues - array of x values
* @param yValue - y value
* @param rValue - r value
* @param tableData - array of Json objects
 */
function writeInputs(xValues, yValue, rValue, tableData) {

    xValues.forEach(function (xValue) {
        const xCheckbox = document.querySelector(`.Xselection[value="${xValue}"]`);
        if (xCheckbox) {
            xCheckbox.checked = false;
            xCheckbox.click();
        }
    });

    const yInput = document.getElementById('YText');
    if (yValue !== null) {
        yInput.value = yValue;
        yInput.dispatchEvent(new Event('input', { bubbles: true }));
    }

    const rRadios = document.querySelector(`.Rselection[value="${rValue}"]`);
    if (rRadios) {
        rRadios.click();
    }

    const tableBody = document.querySelector('#resultTable tbody');
    writeTable(tableData, tableBody);

    localStorage.setItem('tableData', JSON.stringify(tableData));

}

export {loadTableData, loadData, writeInputs, writeTable};
