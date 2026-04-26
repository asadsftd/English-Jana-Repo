document.getElementById("list-icon-two").style.display="none";



document.getElementById("list-icon-three")
.addEventListener("click", ()=>{
    console.log("Hellow Bangladesh");
    const navTwo = document.getElementById("nav-two");
    navTwo.style.display="block";
    document.getElementById("list-icon-two").style.display="block";
})
document.getElementById("list-icon-two")
.addEventListener("click", ()=>{
    console.log("Asad");
     const navTwo = document.getElementById("nav-two");
    navTwo.style.display="none";
    document.getElementById("list-icon-two").style.display="none";
})