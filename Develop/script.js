const n = moment().format("dddd MMMM Do YYYY");
const currentDay = document.getElementById("currentDay");
const scheduleContainer = document.getElementById("schedule-container");
currentDay.innerHTML = n;

const loadTimeBlocks = function () {
  let num = 13;
  const timeLabels = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
  ];
  let currentHour = moment().format("LT");
  let hour = currentHour.split(":");

  for (let i = 0; i < timeLabels.length; i++) {
    const timeBlock = document.createElement("div");
    timeBlock.className = "row time-block ";
    scheduleContainer.appendChild(timeBlock);
    const time = document.createElement("p");
    time.textContent = timeLabels[i];
    time.className = "hour ";
    timeBlock.appendChild(time);
    const inputField = document.createElement("textarea");
    inputField.id = i;
    timeBlock.appendChild(inputField);
    const saveBtn = document.createElement("button");
    saveBtn.className = "saveBtn";
    const saveIcon = document.createElement("span");
    saveIcon.textContent = "save";
    saveIcon.className = "material-symbols-outlined";
    saveBtn.appendChild(saveIcon);
    timeBlock.appendChild(saveBtn);

    let timeCheck = timeLabels[i].split(" ");

    if (timeCheck[0] == hour[0]) {
      inputField.className = "present";
      num = i;
    }
  }

  for (let i = 0; i < timeLabels.length; i++) {
    const inputField = document.getElementById(i);
    if (i < num) {
      inputField.className = "past";
    } else if (i > num) {
      inputField.className = "future";
    }
  }
};

loadTimeBlocks();
