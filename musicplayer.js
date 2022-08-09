// Variables starts here *********************************************

let audio = document.getElementById("audio")
let pausebutton = document.getElementById("pause")
let icon = document.getElementById("playbtn")
let playbutton = document.getElementById("play")
let ispause = false;
let nextbtn = document.getElementById("next")
let previousbtn = document.getElementById("previous")
let musicname = document.getElementById("musicname")
let musiclist = document.querySelector(".musiclist")
let listbutton = document.querySelector(".fa-bars")
let progressbar = document.getElementById("progressbar")
let musicno = 0 ;
let sufflebtn = document.querySelector(".fa-shuffle")
let sufflebtnred = "fa-solid fa-shuffle fa-solid-list fa-suffle fa-shuffle-red"
let suffleblack = "fa-solid fa-shuffle fa-solid-list fa-suffle"
let addbutton = document.querySelector(".fa-circle-plus")
let addSection = document.querySelector(".add_section")
let addsectionnode = "add_section"
let visiblesectionnode = "add_section add_visible"
let addsecbutton = document.getElementById("add_music")
// Variable ends here *********************************************


//Funtion 1.function for play and pause *********************************************
playbutton.addEventListener("click",()=>{
    if(ispause == false){
        audio.play()
        ispause = true
    icon.classList.replace("fa-play","fa-pause")
    }else{
         audio.pause()
         ispause = false;
         icon.classList.replace("fa-pause","fa-play")
    }
})

// Storing songs in a arre *********************************************

let musics = ["songs/Bin Bala Re(Nagin Tapoori Dance Mix) DJs RS!Hit Odia New Dj song,Odia Latest Dj Song (192  kbps).mp3",
    "_GURI_(Official_Song)_Satti_Dhillon__GK.DIGITAL__Latest_Songs__Geet_MP3(128k).m4a","_Jass_Manak_Ft._Emiway_Bantai_(Full_Video)_Satti_Dhillon__Deep_Jandu__GK__Geet_MP3(128k).m4a","_Karan_Randhawa_(Official_Video)_Shipra_Goyal,_Anjali_Arora__New_Punjabi_Songs__Geet_MP3(128k).m4a","Akhi_Akhire_Kichi_Kahilu_(Melodic_Remix)Dj_Liku_Official(OdiaRemix.Com).mp3(128k).m4a","Tribal_chief_💙💙💙💙.mp3","y2mate.com - RasabatiGulua Dialogue X Dance MixDj YAS Bbsr ft Dj Rahul CreativeDownload link in description .mp3"
    ,"songs/_Dj..song_ll💥💥💥Miku_dj_song(128k).m4a"
]

musicname.innerHTML = `${musics[musicno]}`
audio.src = `${musics[musicno]}`
//Function 2. Progressbar reset functioe *********************************************
window.addEventListener("load",()=>{
    progressbar.value = 0;
})

//Function 3. Suffle function starts here *********************************************
let suffle = ()=>{
    sufflebtn.classList.toggle("fa-shuffle-red")
}
sufflebtn.addEventListener("click", suffle)

//Function 4. Next function starts here *********************************************
function next() {
    let nodeValue = sufflebtn.getAttributeNode("class").nodeValue
    if(nodeValue == sufflebtnred){
        musicno =parseInt(Math.random()*musics.length)
    }
    if(musicno == musics.length - 1){
        musicno = 0;
        musicno++
        audio.src = `${musics[musicno]}`
        musicname.innerHTML = `${musics[musicno]}`
        icon.classList.replace("fa-play","fa-pause")
        audio.play()
    }else{
    musicno++
    audio.src = `${musics[musicno]}`
    musicname.innerHTML = `${musics[musicno]}`
    icon.classList.replace("fa-play","fa-pause")
    audio.play()
}
}
nextbtn.addEventListener("click",next)


//Function 5. Previous function starts here *********************************************

function previous() {
    let nodeValue = sufflebtn.getAttributeNode("class").nodeValue
    if(nodeValue == sufflebtnred){
        musicno =parseInt(Math.random()*musics.length)
    }
    if(musicno == 0){
        musicno= musics.length - 1;
        audio.src = `${musics[musicno]}`
        musicname.innerHTML = `${musics[musicno]}`
        icon.classList.replace("fa-play","fa-pause")
        audio.play()
    }else{
    musicno--
    audio.src = `${musics[musicno]}`
    musicname.innerHTML = `${musics[musicno]}`
    icon.classList.replace("fa-play","fa-pause")
    audio.play()
}
}
previousbtn.addEventListener("click",previous)


//function 6. Open list funtion starts here *********************************************

listbutton.addEventListener("click",()=>{
    console.log(listbutton)
    musiclist.style.transform = `translateY(${-160}px)`
    let musiclistitem = document.querySelectorAll(".music_item")
})


//Function 7. Progressbar move function starts here *********************************************


audio.addEventListener("timeupdate",()=>{
    let currentime = (parseInt((audio.currentTime))/60).toFixed(2)
    let duration = (parseInt((audio.duration))/60).toFixed(2)
    if(currentime == duration){
        if(musicno == musics.length - 1){
            musicno = 0;
            musicno++
            audio.src = `${musics[musicno]}`
            musicname.innerHTML = `${musics[musicno]}`
            icon.classList.replace("fa-play","fa-pause")
            audio.play()
        }else{
        musicno++
        audio.src = `${musics[musicno]}`
        musicname.innerHTML = `${musics[musicno]}`
        icon.classList.replace("fa-play","fa-pause")
        audio.play()
    }
    }
    progressbar.value = `${((Number(currentime/duration))*100)}`
})
//Function 8. ADD music function *************************************************************
addbutton.addEventListener("click",()=>{
    // window.open("Index of file:///C:/Users/User/Desktop/music player/")
    let add_sectionnode = addSection.getAttributeNode("class").nodeValue
    console.log(add_sectionnode)
    addSection.classList.toggle("add_visible")
    if(add_sectionnode == visiblesectionnode){
        audio.play()
    }else if(add_sectionnode = addsectionnode){
        audio.pause()
    }
    console.log(musics)
})
console.log(musics)

// Function 9. add music path
addsecbutton.addEventListener("click",()=>{
    let musicpath = document.getElementById("inputadd").value 
    if(musicpath == ""){
        audio.play()
        addSection.classList.remove("add_visible")
    }else{
    musics.push(musicpath)
    audio.play()
    addSection.classList.remove("add_visible")
}
})


// progressbar.addEventListener("change",()=>{
//     let newcurrentime = audio.currentTime/100
//     progressbar.value = newcurrentime
//     audio.play(newcurrentime)

// })



