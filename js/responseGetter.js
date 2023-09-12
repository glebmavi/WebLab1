import {drawPoint} from "./drawer.js";

$(document).ready(function () {
    const tableBody = $('#resultTable tbody');
    $('#form').on("submit",function (event) {
        event.preventDefault();

        const formData = $("#form").serializeArray();
        const filteredFormData = formData.filter(item => item.name !== "X");
        const xValues = formData.filter(item => item.name === "X").map(item => item.value);

        xValues.forEach(function (xValue) {
            $.ajax({
                url: 'check.php',
                method: 'POST',
                dataType: 'json',
                data: $.param(filteredFormData) + '&X=' + xValue,
            })
                .done(function (response) {
                    const newRow = '<tr>' +
                        '<td>' + response.X + '</td>' +
                        '<td>' + response.Y + '</td>' +
                        '<td>' + response.R + '</td>' +
                        '<td>' + response.hit + '</td>' +
                        '<td>' + response.currentTime + '</td>' +
                        '<td>' + (parseFloat(response.executionTime) * 1000).toFixed(2) + 'ms' + '</td>' +
                        '</tr>';

                    tableBody.append(newRow);
                    localStorage.setItem('tableData', tableBody.html());
                    drawPoint(response.X, response.Y, response.R);
                })
                .fail(function (xhr, status, error) {
                    alert('Status: ' + status + '\nError: ' + error);
                });
        });
    });
});

