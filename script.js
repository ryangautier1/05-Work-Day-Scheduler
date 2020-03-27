// Display date
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// get current time
var currentTime = moment().format('ha');;
var times = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6"];
var future = false;

// Print locally stored values in time blocks
setStoredInputs();


// set class of time blocks based on  current time
for (var i = 0; i < times.length; i++) {
    var currentId = "#" + times[i];
    // check if its before 8AM
    if (currentTime[1] === "a" && currentTime[0] < 8) {
        $(currentId).addClass("future");
    }
    // check if times[i] is right now
    else if (times[i] == moment().format('h')) {
        $(currentId).addClass("present");
        // further iterations should set future class
        future = true;
    }
    else if (future) {
        $(currentId).addClass("future");
    }
    else {
        $(currentId).addClass("past");
    }
}

// look for save clicks
var saveBtns = $(".saveBtn");
saveBtns.on("click", function () {
    // store the corresponding time for the save button clicked
    var btnClicked = $(this).attr("data-save-time");

    // store the input of the corresponding time block
    var input = $("#" + btnClicked).val();
    localStorage.setItem(btnClicked, input);
});

// set text of time blocks from local storage
function setStoredInputs() {
    for (var i = 0; i < times.length; i++) {
        $("#" + times[i]).attr("Value", localStorage.getItem(times[i]));
    }
}
