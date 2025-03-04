const headingText=document.getElementById("mainHeading");
const redButton=document.getElementById("redButton");
const greenButton=document.getElementById("greenButton");
const blueButton=document.getElementById("blueButton");
const purpleButton=document.getElementById("purpleButton");
const resetButton=document.getElementById("resetButton");


redButton.addEventListener('click' , ()=>{
    headingText.style.color = "red";
})
greenButton.addEventListener('click' , ()=>{
    headingText.style.color = "green";
})
blueButton.addEventListener('click' , ()=>{
    headingText.style.color = "blue";
})
purpleButton.addEventListener('click' , ()=>{
    headingText.style.color = "purple";
})
resetButton.addEventListener('click', ()=>{
    headingText.style.color="#34495e";
})
