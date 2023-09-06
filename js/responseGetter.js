import {draw} from "./drawer.js";

$(document).ready(function () {
    $('#form').on("submit",function (event) {
        event.preventDefault()

        $.ajax({
            url: 'check.php',
            method: 'POST',
            dataType: 'json',
            data: $("#form").serialize()
        })
            .done(function (response) {
                const newRow = '<tr>' +
                    '<td>' + response.X + '</td>' +
                    '<td>' + response.Y + '</td>' +
                    '<td>' + response.R + '</td>' +
                    '<td>' + response.hit + '</td>' +
                    '<td>' + response.currentTime + '</td>' +
                    '<td>' + response.executionTime + '</td>' +
                    '</tr>';

                $('#resultTable tbody').append(newRow);
                draw(response.X, response.Y, response.R);
            })
            .fail(function (xhr, status, error) {
                alert('Status: ' + status + '\nError: ' + error);
            });
    });
});

