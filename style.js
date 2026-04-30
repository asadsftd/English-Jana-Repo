// icon One
document.getElementById("list-icon-one")
.addEventListener("click", (event)=>{
   
    // 3 buttons 
    document.getElementById("nav-two").style.display="block";
    document.getElementById("list-icon-one").style.display="none";
    document.getElementById("list-icon-two").style.display="block";
})
// icon two
document.getElementById("list-icon-two")
.addEventListener("click", (event)=>{
    document.getElementById("nav-two").style.display="none"; 
    document.getElementById("list-icon-one").style.display="block";
    document.getElementById("list-icon-two").style.display="none";
})