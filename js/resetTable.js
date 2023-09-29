function resetTable() {
    const resetButton = document.getElementById('resetTable');
    resetButton.addEventListener('click', () => {
        document.querySelector('#resultTable tbody').innerHTML = '';
        localStorage.setItem('tableData', '');
    });
}

export {resetTable};