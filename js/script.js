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
  window.location.href = "blog.html";
});

//Show date function
const dateField = document.getElementById("date-field");
dateField.innerHTML = getDayDate();

//Complete button function
const completeButtons = document.querySelectorAll(".complete-btn");
const taskAssigned = getInnerTextById("task-assigned-number");
let taskSum = 6;
for (const btn of completeButtons) {
  btn.addEventListener("click", function () {
    btn.setAttribute("disabled", "true");
    alert("Board added Successfully");
    btn.classList.add("opacity-25");
    btn.classList.remove("cursor-pointer");
    taskSum -= 1;
    document.getElementById("task-assigned-number").innerText = "0" + taskSum;

    //Add History
    const HistoryContainer = document.querySelector('#history-container');
    const div = document.createElement("div");
    div.setAttribute('class',"history p-3 bg-primary-bg rounded-lg text-black")
    div.innerHTML = `
         <p>You have Complete The Task Add Dark Mod at 12:48:15 PM</p>
        `;
        
        HistoryContainer.appendChild(div);
  });
    document.getElementById('clear-history-btn').addEventListener('click',function(){
            const histories =document.querySelectorAll('.history');
            for(const singleHistory of histories){
                singleHistory.classList.add('hidden');
            }
        })
  
}
