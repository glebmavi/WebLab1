function loadData() {
    const xValuesString = localStorage.getItem('X');
    const xValues = xValuesString ? xValuesString.split(',') : [];
    const yValue = localStorage.getItem('Y');
    const rValue = localStorage.getItem('R');
    const tableData = localStorage.getItem('tableData');
    return {xValues, yValue, rValue, tableData};

}

function loadInputs(xValues, yValue, rValue, tableData) {

    xValues.forEach(function (xValue) {
        const xCheckbox = document.querySelector(`.Xselection[value="${xValue}"]`);
        if (xCheckbox) {
            xCheckbox.checked = false;
            xCheckbox.click();
        }
    });

    const yInput = document.getElementById('YText');
    yInput.value = yValue;
    yInput.dispatchEvent(new Event('input', { bubbles: true }));

    const rRadios = document.querySelector(`.Rselection[value="${rValue}"]`);
    if (rRadios) {
        rRadios.click();
    }

    const tableBody = $('#resultTable tbody');
    tableBody.html(tableData);

}

export {loadData, loadInputs};
