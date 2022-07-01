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
    inputField.value = localStorage.getItem(i);
    inputField.setAttribute("spellcheck", "false");
    timeBlock.appendChild(inputField);
    const saveBtn = document.createElement("button");
    saveBtn.addEventListener("click", function () {
      saveTasks(inputField);
    });
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
    if (i < num) {
      inputField.className = "past";
    } else if (i > num) {
      inputField.className = "future";
    }
  }

  function saveTasks(element) {
    localStorage.setItem(element.id, element.value);
    console.log(element.value);
  }
};

loadTimeBlocks();

// on button click

// check text area value
