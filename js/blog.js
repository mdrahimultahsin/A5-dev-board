
document.getElementById('back-to-desk-btn').addEventListener('click',function(){
    window.location.href = 'index.html'
  })

//Code Display
document.getElementById("code-display").innerText = `
<!--HTML CODE->:
<p>First paragraph</p><br>
<p>Second paragraph</p><br>
<p>Third paragraph</p>
<!--Js Code-->
 <script>
const paragraphs = document.getElementsByTagName("p");
 console.log(paragraphs[0].innerText);         // Output: "First paragraph"
console.log(paragraphs[1].innerText);         // Output: "Second paragraph"
<\/script>
`;
 document.getElementById("code-display2").innerText = `
<!--HTML CODE->
<p class="info">Paragraph 1</p>
<p class="info">Paragraph 2</p>
<script>
const paragraphs = document.getElementsByClassName("info");
console.log(paragraphs[0].innerText); // Output: "Paragraph 1"
<\/script>
`;
document.getElementById("code-display3").innerText = `
<!--HTML CODE->
<h1 id="main-title">Hello, World!</h1>
<script>
const title = document.getElementById("main-title");
console.log(title.innerText); // Output: "Hello, World!"
<\/script>
`;
document.getElementById("code-display4").innerText = `
<!--HTML CODE->
<p class="message">Hello</p>
<p class="message">World</p>
<script>
const firstMessage = document.querySelector(".message");
console.log(firstMessage.innerText); // Output: "Hello"
<\/script>
`;
document.getElementById("code-display5").innerText = `
<!--HTML CODE->
<p class="message">Hello</p>
<p class="message">World</p>
<script>
const messages = document.querySelectorAll(".message");
for(const msg of messages){
console.log(msg)  //OUTPUT: // "Hello" // "World"                        
}
<\/script>
`;
document.getElementById("innerT").innerText = `
<div id="example">
    Hello
   <span style="display: none;">World</span>!  
   <p><b>Bold Text</b></p>
 </div>
 
 <!--Js Code-->
 <script>

 //get html content of an element using innerHTML
 console.log(document.getElementById("example")
 .innerHTML);

 //Output:Hello <span style="display: none;">World</span>!<p><b>Bold Text</b></p>
 
 
 //get text content of an element ignoring hidden element 
 console.log(document.getElementById("example")
 .innerText);

//Output:
// Hello !
//Bold Text
 
 //get all text content of an element including hidden text
 console.log(document.getElementById("example")
 .textContent);

 //Output:
 //Hello World!
 //Bold Text 
 </script>
`;
document.getElementById("eventDelegate").innerText = `
<div id="button-container">
  <button class="btn">Button 1</button>
  <button class="btn">Button 2</button>
  <button class="btn">Button 3</button>
</div>

<script>
  document.getElementById("button-container").addEventListener("click", function (event) {
    const btns = document.querySelectorALl('.btn');
    for(const singleBtn of btns){
    console.log('Clicked Btn');
    }
  });
</script>
`;


