var slider=document.querySelector(".slider ul")
var prev=document.getElementById("prev")
var next=document.getElementById("next")
var tural=0
prev.onclick=function(){
    tural--;
    if(tural==-1){
        tural=slider.querySelectorAll("li").length-1
       }
    slider.style.left=(-800*tural)+"px"
}
next.onclick=function(){
    tural++;
if(tural==slider.querySelectorAll("li").length){
 tural=0;
}
slider.style.left=(-800*tural)+"px"

}

var acc=document.getElementsByClassName("accordion");
var i;

for(i=0; i<acc.length;i++) {
    acc[i].onclick=function() {
        this.classList.toggle("active");

        var panel=this.nextElementSibling;  

        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }

        else{
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}
