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
// 
document.getElementById("nav").style.display="none";
document.getElementById("btn")
.addEventListener("click", (event)=>{
    console.log("Hellow Opu");
    const pass=document.getElementById("pass").value;
    console.log(typeof pass);
    const convertedPass=parseInt(pass);
    console.log(convertedPass);
    const inputName=document.getElementById("input-text").value;
      if(convertedPass===123456){
        document.getElementById("nav").style.display="block";
    document.getElementById("nav").style.display="flex";
    // banner
    document.getElementById("banner-container").style.display="none";
    }
    else{
        alert("Current Your Pin Number");
    }

    
})

// log Out
document.getElementById("log-out")
.addEventListener("click", (event)=>{
    console.log("Hellow Adiba");
    document.getElementById("nav").style.display="none";
    document.getElementById("banner-container").style.display="block";
    document.getElementById("banner-container").style.display="flex";
})