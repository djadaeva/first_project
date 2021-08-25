"use strict";
let cols = document.getElementsByClassName("columns_items");

for (let i = 0; i < cols.length; i++) {
  let difHeight = Math.trunc(Math.random() * 100) + 1;
  cols[i].style.height = `${difHeight}` + "px";
}
let mode = "light";
document.querySelector(".dark-mode").addEventListener("click", function () {
  if (mode === "light") {
    document.querySelector("body").style.backgroundColor = "#312B4F";
    document.querySelector("body").style.color = "#DCD8EE";
    let elements = document.getElementsByClassName("col");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#27223F";
      elements[i].style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    }
    let headingElements = document.getElementsByClassName("heading");
    for (let i = 0; i < headingElements.length; i++) {
      headingElements[i].style.color = "#DDC7FF";
    }
    let tableElements = document.getElementsByClassName("table_bookname");
    for (let i = 0; i < tableElements.length; i++) {
      tableElements[i].style.color = "#DDC7FF";
    }
    document.getElementById("book_name").style.color = "#DDC7FF";
    let listElements = document.getElementsByClassName("list_text");
    for (let i = 0; i < listElements.length; i++) {
      listElements[i].style.color = "#DCD8EE";
    }
    mode = "dark";
  } else {
    document.querySelector("body").style.backgroundColor = "#EDEAF4";
    document.querySelector("body").style.color = "#656A7C";
    let elements = document.getElementsByClassName("col");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#FFFFFF";
      elements[i].style.boxShadow = "00px 4px 4px rgba(192, 185, 207, 1)";
    }
    let headingElements = document.getElementsByClassName("heading");
    for (let i = 0; i < headingElements.length; i++) {
      headingElements[i].style.color = "#202948";
    }
    let tableElements = document.getElementsByClassName("table_bookname");
    for (let i = 0; i < tableElements.length; i++) {
      tableElements[i].style.color = "#202948";
    }
    document.getElementById("book_name").style.color = "#202948";
    let listElements = document.getElementsByClassName("list_text");
    for (let i = 0; i < listElements.length; i++) {
      listElements[i].style.color = "#656A7C";
    }
    mode = "light";
  }
});
