// BG Color Changing Function
function changeBg(){
    const rgbValue1 = Math.ceil(Math.random()*255);
    const rgbValue2 = Math.ceil(Math.random()*255);
    const rgbValue3 = Math.ceil(Math.random()*255);
    const color = 'rgb'+`(${rgbValue1},${rgbValue2},${rgbValue3})`;
    document.body.style.background = color;
}