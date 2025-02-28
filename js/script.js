// BG Color Changing Function
function changeBg(){
    const rgbValue1 = Math.ceil(Math.random()*255);
    const rgbValue2 = Math.ceil(Math.random()*255);
    const rgbValue3 = Math.ceil(Math.random()*255);
    const color = 'rgb'+`(${rgbValue1},${rgbValue2},${rgbValue3})`;
    document.body.style.background = color;
}

//Redirect to blog page
document.getElementById('discover-btn').addEventListener('click',function(){
    window.location.href = 'blog.html';
})


//Show date function
const dateField = document.getElementById('date-field');
dateField.innerHTML =getDayDate();


//Complete button function
const completeButtons = document.querySelectorAll('.complete-btn');
for(const btn of completeButtons){
    btn.addEventListener('click',function(){
        btn.setAttribute('disabled','true');
        alert('Board added Successfully');
        btn.classList.add('opacity-25');
        btn.classList.remove('cursor-pointer');
    })
}



