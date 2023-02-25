// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

var textarea = document.querySelector('#textarea');
var saveBtn = document.querySelector('#save');

var textarea = localStorage.getItem("textarea");

textarea.textContent = coffee;

saveBtn.addEventListener("click", function() {
  if (count < 24) {
    count++;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});


















        // function updateClock() {
        //   var now = newDate();
        //   var dname = now.getDay(),
        //       mo = now.getMonth(),
        //       dnum = now.getDate(),
        //       yr = now.getFullYear(),
        //       hou = now.getHours(),
        //       min = now.getMinutes(),
        //       sec = now.getSeconds(),
        //       pe = "AM";

        //       var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        //       var week = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
        //       var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
        //       var values = [week[dname], mo, dnum, yr, hou, min, sec, pe];
        //       for (var i = 0; i < ids.length; i++)
        //       document.getElementById(ids[i]).firstChild.nodeValue = values[i];
        // }

        // function initClock() {
        //   updateClock();
        //   window.setInterval("updateClock()", 1000);
        // }