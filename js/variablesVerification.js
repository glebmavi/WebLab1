import {drawR, removePoints} from "./drawer.js";
import {loadData, writeInputs} from "./loadData.js";

function formListener() {
    const RText = document.getElementsByClassName("RText");
    const RHalfText = document.getElementsByClassName("RHalfText");
    const MinusRHalfText = document.getElementsByClassName("MinusRHalfText");
    const MinusRText = document.getElementsByClassName("MinusRText");
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
                xSet = true;
            } else {
                const index = selectedXValues.indexOf(checkbox.value);
                if (index !== -1) {
                    selectedXValues.splice(index, 1);
                }
                if (selectedXValues.length === 0) {
                    xSet = false;
                }
            }
            xValue.innerText = 'X= ' + selectedXValues;
            checkVariablesSet();
            localStorage.setItem('X', selectedXValues.toString());
        });
    });

    const inputElement = document.getElementById('YText');
    const validationMessageElement = document.getElementById("YMessage");
    const yValue = document.getElementById('yValue');

    inputElement.addEventListener("input", function () {
        const inputValue = inputElement.value;

        if (!(inputValue.search(/[^0-9.-]/) !== -1) && (inputValue.length < 18) && (!isNaN(parseFloat(inputValue))) && parseFloat(inputValue) >= -5 && parseFloat(inputValue) <= 3) {
            validationMessageElement.textContent = "Верный ввод";
            validationMessageElement.style.color = "#22AA22";
            yValue.innerText = 'Y= ' + parseFloat(inputValue);
            ySet = true;
            checkVariablesSet();
        } else if (inputValue.length >= 18) {
            validationMessageElement.textContent = "Ошибка. Слишком длинное число";
            validationMessageElement.style.color = "#AA2222";
            ySet = false;
            checkVariablesSet();
        }
        else {
            validationMessageElement.textContent = "Ошибка. Введите число от -5 до 3";
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
                rValue.innerText = 'R= ' + radio.value;
                rSet = true;
                checkVariablesSet();
                drawR(radio.value, RText, RHalfText, MinusRHalfText, MinusRText);
                removePoints();
                localStorage.setItem('R', radio.value);
            }
        });
    });

    writeInputs(loadedData.xValues, loadedData.yValue, loadedData.rValue, loadedData.tableData);

    function checkVariablesSet() {
        submitElement.disabled = !(xSet && ySet && rSet);
    }

}

export {formListener};
