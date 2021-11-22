var btn1=document.getElementById("button-1n");
var btn2=document.getElementById("button-2n");
 
btn1.addEventListener("click",function(){
    btn1.style.display="none";
    btn2.style.display="block";
    this.style.transition="1s";
});

btn2.addEventListener("click",function(){
    btn2.style.display="none";
    btn1.style.display="block";
    this.style.transition="1s";
});