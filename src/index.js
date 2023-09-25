import {formListener} from "../js/variablesVerification";
import {responseGetter} from "../js/responseGetter";
import {resetTable} from "../js/resetTable";

document.addEventListener('DOMContentLoaded', function () {
    const svgGraph = document.getElementById("svgGraph");
    const RText = document.getElementsByClassName("RText");
    const RHalfText = document.getElementsByClassName("RHalfText");
    const MinusRHalfText = document.getElementsByClassName("MinusRHalfText");
    const MinusRText = document.getElementsByClassName("MinusRText");
    formListener();
    responseGetter();
    resetTable();
});