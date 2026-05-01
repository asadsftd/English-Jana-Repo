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
document.getElementById("dynamic-button").style.display="none";
document.getElementById("dynamic-videos").style.display="none";
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
    document.getElementById("dynamic-button").style.display="block";
    document.getElementById("dynamic-videos").style.display="block";
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
    document.getElementById("dynamic-button").style.display="none";
    document.getElementById("banner-container").style.display="flex";
    document.getElementById("dynamic-videos").style.display="none";
})

// dynamic buttons in api with function
function buttons(){
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res=>res.json())
    .then(data=>{
        dynamicButtons(data.data)
    })
}
const dynamicButtons=(buttons)=>{
    const dynamicContainer=document.getElementById("dynamic-buttons");
    for(btn of buttons){
        console.log(btn);
        const div=document.createElement("div");
        div.innerHTML=`
        <button class="btn border-2 border-[#422AD5] text-2xl rounded-lg"><img src="assets/fa-book-open.png" alt="">Lesson-${btn.level_no}</button>
        
        
        `;
        dynamicContainer.appendChild(div);
        

    }
}
// dynamic videos 
function videos(){
    fetch("https://openapi.programming-hero.com/api/level/5")
    .then(res=>res.json())
    .then(data=>{
        dynamicvideos(data.data)
    })
}
const dynamicvideos =(videos)=>{
    const dynamicVideosContainer= document.getElementById("dynamic-videos-container");
    for(video of videos){
        console.log(video);
        const div = document.createElement("div");
        div.innerHTML= `
        <div class=" shadow-sm">
  
  <div class="card-body flex flex-col items-center justify-center">
  <h2 class="card-title">${video.word}</h2>
  <h2 class="card-title">Meaning /Pronounciation</h2>
  <h2 class="card-title">${video.meaning}</h2>  
  </div>

</div>
        
        
        
        `;
        dynamicVideosContainer.appendChild(div);
    }
}
buttons();
videos();



// id
// : 
// 4
// level
// : 
// 5
// meaning
// : 
// "পরিশ্রমী"
// pronunciation
// : 
// "ডিলিজেন্ট"
// word
// : 
// "Diligent"


// id
// : 
// 102
// lessonName
// : 
// "Everyday Words"
// level_no
// : 
// 2