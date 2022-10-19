/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ (() => {

eval("//**App Name: Advanced Note */\r\n//**Author Name: Rohul Amin */\r\n//**Version : 1.1 */\r\n\r\nconst form = document.forms[0]\r\nconst inpValue = form.elements[0]\r\nconst displayResult = document.querySelector(\".display-container\")\r\nlet count = 0;\r\nlet inpElement = null\r\n\r\nform.addEventListener(\"submit\", function (e) {\r\n    e.preventDefault()\r\n    let value = inpValue.value.trim()\r\n    if (value) {\r\n\r\n        const liElement = createLiElement(inpValue.value)\r\n\r\n        const span = SpanElement()\r\n        liElement.appendChild(span)\r\n\r\n\r\n        displayResult.appendChild(liElement).nextElementSibling\r\n        inpValue.value = \"\"\r\n\r\n        const [edit, favorite, remove] = liElement.children[1].children\r\n        // Edit Your Item \r\n\r\n        edit.addEventListener(\"click\", function (e) {\r\n            let text = e.target.parentElement.parentElement.children[0].innerHTML\r\n            console.log(text);\r\n            inpValue.value = \"\"\r\n\r\n            if (inpElement != null) {\r\n                inpElement.remove()\r\n            }\r\n            inpElement = createInputElement(text)\r\n            e.target.parentElement.previousElementSibling.parentElement.appendChild(inpElement)\r\n\r\n            // displayResult.appendChild(inpElement)\r\n            // this.parentElement.parentElement.insertAdjacentElement(\"beforeend\",inpElement)\r\n\r\n\r\n\r\n\r\n            // Modify the Input Box \r\n            inpElement.addEventListener(\"keypress\", function (e) {\r\n                const inputText = e.target.value;\r\n                if (e.key === 'Enter') {\r\n                    e.target.previousElementSibling.previousElementSibling.innerHTML = inputText\r\n                    // e.target.previousElementSibling.children[0].innerHTML = inputText\r\n                    e.target.remove()\r\n                }\r\n            })\r\n        })\r\n\r\n        // Set your item in favorite section \r\n        favorite.addEventListener(\"click\", function () {\r\n\r\n\r\n        })\r\n\r\n        // Remove your item from this list \r\n        remove.addEventListener(\"click\", function (e) {\r\n\r\n            e.target.parentElement.parentElement.remove()\r\n\r\n        })\r\n    }\r\n})\r\n\r\n// Create Li Tag Function\r\nfunction createLiElement(value) {\r\n    count++;\r\n    const li = document.createElement(\"li\")\r\n    li.className = \"text-white bg-secondary py-2 px-1 h6 \"\r\n    const div = document.createElement('div')\r\n    div.innerHTML = `${count}. ${value}`\r\n    div.className = \"main-text overflow-hidden\"\r\n    li.appendChild(div)\r\n    return li\r\n\r\n}\r\n\r\n// Create span Element \r\nfunction SpanElement() {\r\n    const spanElement = document.createElement(\"span\")\r\n    spanElement.className = \"btn-group d-flex justify-content-end align-items-center\"\r\n\r\n    for (let i = 0; i <= 2; i++) {\r\n        const btnName = ['Edit', 'Fevorite', 'Remove']\r\n        const span = document.createElement(\"span\")\r\n        span.innerHTML = btnName[i]\r\n        span.className = \"badge bg-dark\";\r\n        if (i === 1) span.className += \" mx-1\"\r\n        spanElement.appendChild(span)\r\n    }\r\n    return spanElement\r\n}\r\n\r\n// Create Input Tag Function\r\nfunction createInputElement(value) {\r\n    const input = document.createElement(\"input\")\r\n    input.className = \"form-control my-1\"\r\n    input.value = value\r\n    return input\r\n\r\n}\r\n\r\n// ==========================================================================\r\n\r\n\n\n//# sourceURL=webpack://project1/./src/scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/index.js"]();
/******/ 	
/******/ })()
;