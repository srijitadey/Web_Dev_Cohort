const btn = document.getElementById("toggleButton");
const bulb=document.getElementById("bulb");
const statusBtn=document.getElementById("status");
let isOn=false;
btn.addEventListener('click',()=>{
    isOn=!isOn
    if(isOn){
    bulb.style.backgroundColor="#f1c40f";
    bulb.style.boxShadow="0 0 50px rgba(241, 196, 15, 0.5);";
    statusBtn.innerHTML="Status: On";
    btn.innerHTML="Turn Off";
    document.body.style.backgroundColor="white";
        document.body.style.color="#333";
    }
    else{
        bulb.style.backgroundColor="#95a5a6";
        statusBtn.innerHTML="Status: Off";
        btn.innerHTML="Turn On";
        document.body.style.backgroundColor="#333";
        document.body.style.color="white";
    }
})
