/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formListener: () => (/* binding */ formListener)
/* harmony export */ });
/* harmony import */ var _drawer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _loadData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


function formListener() {
  var RText = document.getElementsByClassName("RText");
  var RHalfText = document.getElementsByClassName("RHalfText");
  var MinusRHalfText = document.getElementsByClassName("MinusRHalfText");
  var MinusRText = document.getElementsByClassName("MinusRText");
  var loadedData = (0,_loadData_js__WEBPACK_IMPORTED_MODULE_1__.loadData)();
  var xSet,
    ySet,
    rSet = false;
  var submitElement = document.getElementById('submitButton');
  checkVariablesSet();
  var xCheckboxes = document.querySelectorAll('.Xselection');
  var xValue = document.getElementById('xValue');
  var selectedXValues = [];
  xCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {
      if (checkbox.checked) {
        selectedXValues.push(checkbox.value);
        xValue.innerText = 'X= ' + selectedXValues;
        xSet = true;
        checkVariablesSet();
      } else {
        var index = selectedXValues.indexOf(checkbox.value);
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
  var inputElement = document.getElementById('YText');
  var validationMessageElement = document.getElementById("YMessage");
  var yValue = document.getElementById('yValue');
  inputElement.addEventListener("input", function () {
    var inputValue = inputElement.value;
    if (!(inputValue.search(/[^0-9.-]/) !== -1) && inputValue.length < 18 && !isNaN(parseFloat(inputValue)) && parseFloat(inputValue) >= -5 && parseFloat(inputValue) <= 3) {
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
    } else {
      validationMessageElement.textContent = "Ошибка. Введите число от -5 до 3";
      validationMessageElement.style.color = "#AA2222";
      ySet = false;
      checkVariablesSet();
    }
    localStorage.setItem('Y', inputValue);
  });
  var rRadios = document.querySelectorAll('.Rselection');
  var rValue = document.getElementById('rValue');
  rRadios.forEach(function (radio) {
    radio.addEventListener('click', function () {
      if (radio.checked) {
        rValue.innerText = 'R= ' + radio.value;
        rSet = true;
        checkVariablesSet();
        (0,_drawer_js__WEBPACK_IMPORTED_MODULE_0__.drawR)(radio.value, RText, RHalfText, MinusRHalfText, MinusRText);
        (0,_drawer_js__WEBPACK_IMPORTED_MODULE_0__.removePoints)();
        localStorage.setItem('R', radio.value);
      }
    });
  });
  (0,_loadData_js__WEBPACK_IMPORTED_MODULE_1__.loadInputs)(loadedData.xValues, loadedData.yValue, loadedData.rValue, loadedData.tableData);
  function checkVariablesSet() {
    submitElement.disabled = !(xSet && ySet && rSet);
  }
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawPoint: () => (/* binding */ drawPoint),
/* harmony export */   drawR: () => (/* binding */ drawR),
/* harmony export */   removePoints: () => (/* binding */ removePoints)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function drawR(R, RText, RHalfText, MinusRHalfText, MinusRText) {
  var _iterator = _createForOfIteratorHelper(RText),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var textElement = _step.value;
      textElement.innerHTML = R.toString();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(RHalfText),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _textElement = _step2.value;
      _textElement.innerHTML = (R / 2).toString();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var _iterator3 = _createForOfIteratorHelper(MinusRHalfText),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _textElement2 = _step3.value;
      _textElement2.innerHTML = (-R / 2).toString();
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  var _iterator4 = _createForOfIteratorHelper(MinusRText),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _textElement3 = _step4.value;
      _textElement3.innerHTML = (-R).toString();
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
}
function drawPoint(X, Y, R, svgGraph) {
  var multiplier = 6 / R;
  var newPoint = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  newPoint.setAttribute("x", (X * multiplier).toString());
  newPoint.setAttribute("y", (Y * -multiplier).toString());
  newPoint.setAttribute("href", "#circle");
  newPoint.setAttribute("class", "usedCircle");
  svgGraph.append(newPoint);
}
function removePoints() {
  var useElements = document.querySelectorAll("svg use.usedCircle");
  useElements.forEach(function (useElement) {
    useElement.remove();
  });
}


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadData: () => (/* binding */ loadData),
/* harmony export */   loadInputs: () => (/* binding */ loadInputs)
/* harmony export */ });
function loadData() {
  var xValuesString = localStorage.getItem('X');
  var xValues = xValuesString ? xValuesString.split(',') : [];
  var yValue = localStorage.getItem('Y');
  var rValue = localStorage.getItem('R');
  var tableData = localStorage.getItem('tableData');
  return {
    xValues: xValues,
    yValue: yValue,
    rValue: rValue,
    tableData: tableData
  };
}
function loadInputs(xValues, yValue, rValue, tableData) {
  xValues.forEach(function (xValue) {
    var xCheckbox = document.querySelector(".Xselection[value=\"".concat(xValue, "\"]"));
    if (xCheckbox) {
      xCheckbox.checked = false;
      xCheckbox.click();
    }
  });
  var yInput = document.getElementById('YText');
  if (yValue !== null) {
    yInput.value = yValue;
    yInput.dispatchEvent(new Event('input', {
      bubbles: true
    }));
  }
  var rRadios = document.querySelector(".Rselection[value=\"".concat(rValue, "\"]"));
  if (rRadios) {
    rRadios.click();
  }
  var tableBody = document.querySelector('#resultTable tbody');
  tableBody.innerHTML = tableData;
}


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   responseGetter: () => (/* binding */ responseGetter)
/* harmony export */ });
/* harmony import */ var _drawer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function responseGetter() {
  var svgGraph = document.getElementById("svgGraph");
  var tableBody = document.querySelector('#resultTable tbody');
  var form = document.getElementById('form');
  form.addEventListener("submit", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var formData, xValues, _iterator, _step, xValue, response, responseData, time, options, newRow;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            (0,_drawer_js__WEBPACK_IMPORTED_MODULE_0__.removePoints)();
            formData = new FormData(form);
            xValues = formData.getAll("X");
            formData["delete"]("X");
            _iterator = _createForOfIteratorHelper(xValues);
            _context.prev = 6;
            _iterator.s();
          case 8:
            if ((_step = _iterator.n()).done) {
              _context.next = 34;
              break;
            }
            xValue = _step.value;
            _context.prev = 10;
            formData.append("X", xValue);
            _context.next = 14;
            return fetch("./src/check.php", {
              method: "POST",
              dataType: "json",
              body: formData
            });
          case 14:
            response = _context.sent;
            if (response.ok) {
              _context.next = 17;
              break;
            }
            throw new Error("HTTP error! Status: ".concat(response.status));
          case 17:
            _context.next = 19;
            return response.json();
          case 19:
            responseData = _context.sent;
            time = new Date(responseData.currentTime);
            time = new Date(time.getTime() - time.getTimezoneOffset() * 60 * 1000);
            options = {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric'
            };
            newRow = "\n                    <tr>\n                        <td>".concat(responseData.X, "</td>\n                        <td>").concat(responseData.Y, "</td>\n                        <td>").concat(responseData.R, "</td>\n                        <td>").concat(responseData.hit, "</td>\n                        <td>").concat(time.toLocaleString(undefined, options), "</td>\n                        <td>").concat((parseFloat(responseData.executionTime) * 1000).toFixed(2), " ms</td>\n                    </tr>\n                ");
            tableBody.insertAdjacentHTML("beforeend", newRow);
            localStorage.setItem('tableData', tableBody.innerHTML);
            (0,_drawer_js__WEBPACK_IMPORTED_MODULE_0__.drawPoint)(responseData.X, responseData.Y, responseData.R, svgGraph);
            _context.next = 32;
            break;
          case 29:
            _context.prev = 29;
            _context.t0 = _context["catch"](10);
            alert('Error: ' + _context.t0.message);
          case 32:
            _context.next = 8;
            break;
          case 34:
            _context.next = 39;
            break;
          case 36:
            _context.prev = 36;
            _context.t1 = _context["catch"](6);
            _iterator.e(_context.t1);
          case 39:
            _context.prev = 39;
            _iterator.f();
            return _context.finish(39);
          case 42:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[6, 36, 39, 42], [10, 29]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resetTable: () => (/* binding */ resetTable)
/* harmony export */ });
function resetTable() {
  var resetButton = document.getElementById('resetTable');
  resetButton.addEventListener('click', function () {
    var tableBody = document.querySelector('#resultTable tbody');
    tableBody.innerHTML = '';
    localStorage.setItem('tableData', '');
  });
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_variablesVerification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _js_responseGetter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _js_resetTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);



document.addEventListener('DOMContentLoaded', function () {
  (0,_js_variablesVerification__WEBPACK_IMPORTED_MODULE_0__.formListener)();
  (0,_js_responseGetter__WEBPACK_IMPORTED_MODULE_1__.responseGetter)();
  (0,_js_resetTable__WEBPACK_IMPORTED_MODULE_2__.resetTable)();
});
})();

/******/ })()
;