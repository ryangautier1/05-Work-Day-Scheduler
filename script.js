// Display date
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// get current time
var currentTime = moment().format('ha');;
var times = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
var future = false;

// set class of time blocks based on  current time
for (var i = 0; i < times.length; i++){
    var currentId = "#" + times[i];
    // check if its before 8AM
    if (currentTime[1] === "a" && currentTime[0] < 8){
            $(currentId).addClass("future");
    }
    // check if times[i] is right now
    else if (times[i] == currentTime){
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
