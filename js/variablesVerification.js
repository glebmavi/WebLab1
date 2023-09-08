document.addEventListener('DOMContentLoaded', function () {

    let Xset, Yset, Rset = false;
    const submitElement = document.getElementById('submitButton');
    submitElement.disabled = true;

    const Xcheckboxes = document.querySelectorAll('.Xselection');
    const xValue = document.getElementById('xValue');

    Xcheckboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            if (checkbox.checked) {
                Xcheckboxes.forEach(otherCheckbox => {
                    if (otherCheckbox !== checkbox) {
                        otherCheckbox.checked = false;
                    }
                });
                xValue.innerText = 'X= ' + checkbox.value;
                Xset = true;
                checkVariablesSet();
            }
        });
    });

    const inputElement = document.getElementById('YText');
    const validationMessageElement = document.getElementById("YMessage");
    const yValue = document.getElementById('yValue');


    inputElement.addEventListener("input", function () {
        const inputValue = inputElement.value;

        if (!(inputValue.search(/[^0-9-]/) !== -1) && Number.isInteger(parseInt(inputValue)) && parseInt(inputValue) >= -5 && parseInt(inputValue) <= 3) {
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
            }
        });
    });

    function checkVariablesSet() {
        if (Xset && Yset && Rset) {
            submitElement.disabled = false;
        }
    }

});
