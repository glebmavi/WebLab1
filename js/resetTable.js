document.addEventListener("DOMContentLoaded", function () {
    const resetButton = document.getElementById('resetTable');
    resetButton.addEventListener('click', () => {
        const tableBody = document.querySelector('#resultTable tbody');
        tableBody.innerHTML = '';
        localStorage.setItem('tableData', '');
    });
});