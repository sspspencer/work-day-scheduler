const n = moment().format("dddd MMMM Do YYYY");
const currentDay = document.getElementById("currentDay");
const scheduleContainer = document.getElementById("schedule-container");
currentDay.innerHTML = n;

const loadTimeBlocks = function () {
  for (let i = 0; i < 9; i++) {
    const timeBlock = document.createElement("div");
    timeBlock.className = "row time-block";
    scheduleContainer.appendChild(timeBlock);
    const time = document.createElement("p");
    time.textContent = i;
    time.className = "hour";
    timeBlock.appendChild(time);
    const inputField = document.createElement("textarea");
    timeBlock.appendChild(inputField);
    const saveBtn = document.createElement("button");
    saveBtn.className = "saveBtn";
    saveBtn.textContent = "save";
    timeBlock.appendChild(saveBtn);
  }
};

loadTimeBlocks();
let hour = moment().format("LT");
console.log(hour);
let newHours = hour.split(":");
console.log(newHours[0]);
