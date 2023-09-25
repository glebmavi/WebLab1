import {formListener} from "../js/variablesVerification";
import {responseGetter} from "../js/responseGetter";
import {resetTable} from "../js/resetTable";

document.addEventListener('DOMContentLoaded', function () {
    formListener();
    responseGetter();
    resetTable();
});