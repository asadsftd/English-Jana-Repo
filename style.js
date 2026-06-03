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
// 
    function loadButtons(){
        fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res=>res.json())
        .then(data=>{
            displayButtons(data.data);
        })
    }

    loadButtons();

    const displayButtons=(data)=>{
        console.log(data);
        const dynamicButtonsContainer=document.getElementById("dynamic-buttons");
        for(let btn of data){
            console.log(btn);
            const newElement=document.createElement("div");
            newElement.innerHTML=`
             <button id="btn-${btn.level_no}" onclick="loadCategoryWords(${btn.level_no})" class="btn text-xl hover:bg-[#422AD5] hover:text-white  rounded-md flex items-center">Lesson-${btn.level_no}</button>
            
            `;
            dynamicButtonsContainer.appendChild(newElement);
        }
    }
        // dunamic Words
        function loadWord(){
            fetch("https://openapi.programming-hero.com/api/level/5")
            .then(res=>res.json())
            .then(data=>{
                displayWords(data.data);
            })
        }
        
        const displayWords=(data)=>{
            console.log(data);
            const dynamicWordsContainer = document.getElementById("dynamic-videos-container");
            dynamicWordsContainer.innerHTML="";
            if(data.length==0){
                dynamicWordsContainer.innerHTML=`
                 <div class=" bg-slate-100 col-span-full py-3" id="">
                    <img class="mx-auto" src="assets/alert-error.png" alt="">
                    <p class="text-center">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                    <p class="text-center font-bold text-3xl">নেক্সট Lesson এ যান</p>
                </div>
                `;
                return;
            }
            for(let word of data){
                console.log(word);
                const newElement = document.createElement("div");
                newElement.innerHTML = `
        <div class="card card-border bg-base-100 shadow-lg w-full h-[210px]">
  <div class="card-body">
    <h2 class="text-center text-3xl font-bold">${word.word}</h2>
    <p class="text-2xl font-semibold text-center">Meaning / Pronounciation</p>
    <p class="text-center text-2xl font-semibold">"${word.meaning}"</p>
    <div class="flex items-center justify-between">
    <i onclick="loadCategoryDetails(${word.id})" class="fa-solid fa-circle-info text-xl"></i>
      <i class="fa-solid fa-volume-low text-xl"></i>
    </div>
  </div>
</div>
                
                `;
                dynamicWordsContainer.appendChild(newElement);
            }
        }
        // 
// buttons
// LoadcategoryWords
        function loadCategoryWords(level_no){
            console.log(level_no);
            const url =`https://openapi.programming-hero.com/api/level/${level_no}`;
            console.log(url);
            fetch(url)
            .then(res=>res.json())
            .then(data=>{
                displayWords(data.data);
                removeActive();
                const activeButtons=document.getElementById(`btn-${level_no}`);
                activeButtons.classList.add("active");
                console.log(activeButtons);
            })
        }
        function removeActive(){
            const activeColors=document.getElementsByClassName("active");
            for(let color of activeColors){
                color.classList.remove("active");
            }
        }
            function loadCategoryDetails(id){
                console.log(id);
                const url=`https://openapi.programming-hero.com/api/word/${id}`;
                console.log(id);
                fetch(url)
                .then(res=>res.json())
                .then(data=>{
                    displayCategoryWordDetails(data.data);
                })
            }
            function displayCategoryWordDetails(data){
                console.log(data);
                document.getElementById("wordDetail").showModal();
                const detailsContainer=document.getElementById("detailsContainer");
                detailsContainer.innerHTML=`
                <div class="card card-border bg-base-100 ">
  <div class="card-body">
    <h2 class="text-3xl font-bold">${data.word} ( ${data.pronunciation} )</h2>
    <p class="text-2xl font-semibold">Meaning</p>
    <p class="text-2xl font-semibold">${data.meaning}</p>
    <p class="text-2xl font-semibold">Example</p>
    <p class="text-2xl font-semibold">${data.sentence}</p>
    <p class="text-2xl font-semibold">সমার্থক শব্দ গুলো</p>
    <div>
    <button class="btn btn-md text-2xl font-medium">${data.synonyms[0]}</button>
    <button class="btn btn-md text-2xl font-medium">${data.synonyms[1]}</button>
    <button class="btn btn-md text-2xl font-medium">${data.synonyms[2]}</button>
    
    </div>
    
  </div>
</div>
                `;
            }


            // 

// id
// : 
// 5
// level
// : 
// 1
// meaning
// : 
// "আগ্রহী"
// partsOfSpeech
// : 
// "adjective"
// points
// : 
// 1
// pronunciation
// : 
// "ইগার"
// sentence
// : 
// "The kids were eager to open their gifts."
// synonyms
// : 
// Array(3)
// 0
// : 
// "enthusiastic"
// 1
// : 
// "excited"
// 2
// : 
// "keen"
// length
// : 
// 3
            // 

// 
// id
// : 
// 101
// lessonName
// : 
// "Basic Vocabulary"
// level_no
// : 
// 1


// words


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