'use strict';

const elementToggleFunction = function (element) {element.classList.toggle('active');};

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener('click', function () {elementToggleFunction(sidebar);});