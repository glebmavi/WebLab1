import {drawR, removePoints} from "./drawer.js";
import {loadData, loadInputs} from "./loadData.js";

document.addEventListener('DOMContentLoaded', function () {

    const loadedData = loadData();
    let xSet, ySet, rSet = false;
    const submitElement = document.getElementById('submitButton');
    checkVariablesSet();

    const xCheckboxes = document.querySelectorAll('.Xselection');
    const xValue = document.getElementById('xValue');
    const selectedXValues = [];

    xCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            if (checkbox.checked) {
                selectedXValues.push(checkbox.value);
                xValue.innerText = 'X= ' + selectedXValues;
                xSet = true;
                checkVariablesSet();
            } else {
                const index = selectedXValues.indexOf(checkbox.value);
                if (index !== -1) {
                    selectedXValues.splice(index, 1);
                    xValue.innerText = 'X= ' + selectedXValues;
                }
                if (selectedXValues.length === 0) {
                    xSet = false;
                    checkVariablesSet();
                }
            }
            localStorage.setItem('X', selectedXValues.toString());
        });
    });


    const inputElement = document.getElementById('YText');
    const validationMessageElement = document.getElementById("YMessage");
    const yValue = document.getElementById('yValue');

    inputElement.addEventListener("input", function () {
        const inputValue = inputElement.value;

        if (!(inputValue.search(/[^0-9.-]/) !== -1) && (inputValue.length < 10) && (!isNaN(parseFloat(inputValue))) && parseFloat(inputValue) >= -5 && parseFloat(inputValue) <= 3) {
            validationMessageElement.textContent = "Верный ввод";
            validationMessageElement.style.color = "#22AA22";
            yValue.innerText = 'Y= ' + parseFloat(inputValue);
            ySet = true;
            checkVariablesSet();
        } else {
            validationMessageElement.textContent = "Ошибка. Введите целое число от -5 до 3";
            validationMessageElement.style.color = "#AA2222";
            ySet = false;
            checkVariablesSet();
        }
        localStorage.setItem('Y', inputValue);
    });

    const rRadios = document.querySelectorAll('.Rselection');
    const rValue = document.getElementById('rValue');

    rRadios.forEach(radio => {
        radio.addEventListener('click', () => {
            if (radio.checked) {
                rRadios.forEach(otherRadio => {
                    if (otherRadio !== radio) {
                        otherRadio.checked = false;
                    }
                });
                rValue.innerText = 'R= ' + radio.value;
                rSet = true;
                checkVariablesSet();
                drawR(radio.value);
                removePoints();
                localStorage.setItem('R', radio.value);
            }
        });
    });

    loadInputs(loadedData.xValues, loadedData.yValue, loadedData.rValue, loadedData.tableData);

    function checkVariablesSet() {
        submitElement.disabled = !(xSet && ySet && rSet);
    }

});
