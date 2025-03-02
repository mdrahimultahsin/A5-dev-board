// BG Color Changing Function
function changeBg() {
  const rgbValue1 = Math.ceil(Math.random() * 255);
  const rgbValue2 = Math.ceil(Math.random() * 255);
  const rgbValue3 = Math.ceil(Math.random() * 255);
  const color = "rgb" + `(${rgbValue1},${rgbValue2},${rgbValue3})`;
  document.body.style.background = color;
}

//Redirect to blog page
document.getElementById("discover-btn").addEventListener("click", function () {
  window.location.href = "../blog.html";
});

//Show date function
const dateField = document.getElementById("date-field");
dateField.innerHTML = getDayDate();

//Complete button function
const completeButtons = document.querySelectorAll(".complete-btn");
let taskSum = getInnerTextById("task-assigned-number");
let completeTaskSum = getInnerTextById("completed-task");

for (const btn of completeButtons) {
  btn.addEventListener("click", function (event) {
    const getParent = event.target.parentElement.parentElement.parentElement;
    const cardTitle = getParent.querySelector("#card-title").innerText;
    btn.setAttribute("disabled", "true");
    alert("Board Updated Successfully");
    btn.classList.add("opacity-25");
    btn.classList.remove("cursor-pointer");

    //Task Assigned Decremnet
    taskSum -= 1;
    setInnerTextById("task-assigned-number", "0" + taskSum);

    //All Task Completed Alert Message
    if (taskSum === 0) {
      alert("congrates!!! You have completed all the current task");
    }

    //Task Completed Incremnet
    completeTaskSum += 1;
    setInnerTextById("completed-task", completeTaskSum);

    //Add History
    const HistoryContainer = document.querySelector("#history-container");
    const div = document.createElement("div");
    div.setAttribute(
      "class",
      "history p-3 bg-primary-bg rounded-lg text-black"
    );
    div.innerHTML = `
         <p>You have Complete The Task ${cardTitle} at ${getTime()}</p>
        `;

    HistoryContainer.appendChild(div);
  });
  document
    .getElementById("clear-history-btn")
    .addEventListener("click", function () {
      const histories = document.querySelectorAll(".history");
      for (const singleHistory of histories) {
        singleHistory.classList.add("hidden");
      }
    });
  
};


