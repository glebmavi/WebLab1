import {drawR, removePoints} from "./drawer.js";

document.addEventListener('DOMContentLoaded', function () {

    let Xset, Yset, Rset = false;
    const submitElement = document.getElementById('submitButton');
    submitElement.disabled = true;

    const Xcheckboxes = document.querySelectorAll('.Xselection');
    const xValue = document.getElementById('xValue');

    const selectedXValues = [];

    Xcheckboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            if (checkbox.checked) {
                selectedXValues.push(checkbox.value);
                xValue.innerText = 'X= ' + selectedXValues;
                Xset = true;
                checkVariablesSet();
            } else {
                const index = selectedXValues.indexOf(checkbox.value);
                if (index !== -1) {
                    selectedXValues.splice(index, 1);
                    xValue.innerText = 'X= ' + selectedXValues;
                }
                if (selectedXValues.length === 0) {
                    Xset = false;
                    checkVariablesSet();
                }
            }
        });
    });

    const inputElement = document.getElementById('YText');
    const validationMessageElement = document.getElementById("YMessage");
    const yValue = document.getElementById('yValue');


    inputElement.addEventListener("input", function () {
        const inputValue = inputElement.value;

        if (!(inputValue.search(/[^0-9.-]/) !== -1) && (!isNaN(parseFloat(inputValue))) && parseFloat(inputValue) >= -5 && parseFloat(inputValue) <= 3) {
            validationMessageElement.textContent = "Верный ввод";
            validationMessageElement.style.color = "#22AA22";
            yValue.innerText = 'Y= ' + parseInt(inputValue);
            Yset = true;
            checkVariablesSet();
        } else {
            validationMessageElement.textContent = "Ошибка. Введите целое число от -5 до 3";
            validationMessageElement.style.color = "#AA2222";
            submitElement.disabled = true;
        }
    });

    const Rradios = document.querySelectorAll('.Rselection');
    const rValue = document.getElementById('rValue');

    Rradios.forEach(radio => {
        radio.addEventListener('click', () => {
            if (radio.checked) {
                Rradios.forEach(otherRadio => {
                    if (otherRadio !== radio) {
                        otherRadio.checked = false;
                    }
                });
                rValue.innerText = 'R= ' + radio.value;
                Rset = true;
                checkVariablesSet();
                drawR(radio.value);
                removePoints();
            }
        });
    });

    function checkVariablesSet() {
        if (Xset && Yset && Rset) {
            submitElement.disabled = false;
        }
    }

});
