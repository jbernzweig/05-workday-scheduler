// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.
// $(function () {

// })

// // Need to take values from time & value divs and save them to local storage.
// var task = document.getElementById("task");
// var saveButton = document.getElementById("save");

// saveButton.addEventListener("click", function(event) {
//   event.preventDefault();

// var morningCoffee = {
//   task: task.value,
// }

// localStorage.setItem("morningCoffee", JSON.stringify(morningCoffee));
// renderMessage();

// });

// localStorage.setItem("morningCoffee", JSON.stringify(morningCoffee));
//   if (localStorage.getItem("morningCoffee")) {
//     document.querySelector("#task").value = localStorage.getItem("morningCoffee");
//   }

// digital clock begin
  $(document).ready(function() {
    clockUpdate();
    setInterval(clockUpdate, 1000);
  })
  
  function clockUpdate() {
    var date = new Date();
    // $('.digital-clock').css({'color': '#fff', 'text-shadow': '0 0 6px #ff0'});
    function addZero(x) {
      if (x < 10) {
        return x = '0' + x;
      } else {
        return x;
      }
    }
  
    function twelveHour(x) {
      if (x > 12) {
        return x = x - 12;
      } else if (x == 0) {
        return x = 12;
      } else {
        return x;
      }
    }
  
    var h = addZero(twelveHour(date.getHours()));
    var m = addZero(date.getMinutes());
    var s = addZero(date.getSeconds());
  
    $('.digital-clock').text(h + ':' + m + ':' + s)
  }
// digital clock end







// // TODO: Add a listener for click events on the save button. This code should
// // use the id in the containing time-block as a key to save the user input in
// // local storage. HINT: What does `this` reference in the click listener
// // function? How can DOM traversal be used to get the "hour-x" id of the
// // time-block containing the button that was clicked? How might the id be
// // useful when saving the description in local storage?
// //



//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //





//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
// });



//         // function updateClock() {
//         //   var now = newDate();
//         //   var dname = now.getDay(),
//         //       mo = now.getMonth(),
//         //       dnum = now.getDate(),
//         //       yr = now.getFullYear(),
//         //       hou = now.getHours(),
//         //       min = now.getMinutes(),
//         //       sec = now.getSeconds(),
//         //       pe = "AM";

//         //       var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//         //       var week = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
//         //       var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
//         //       var values = [week[dname], mo, dnum, yr, hou, min, sec, pe];
//         //       for (var i = 0; i < ids.length; i++)
//         //       document.getElementById(ids[i]).firstChild.nodeValue = values[i];
//         // }

//         // function initClock() {
//         //   updateClock();
//         //   window.setInterval("updateClock()", 1000);
//         // }

// console.log(dayjs())