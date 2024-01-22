
let solo=document.getElementById('solo');


addEventListener("scroll",()=>{
    console.log(window.scrollY)
    if(window.scrollY>10){
        solo.style.position='sticky'
        solo.style.background='white'
    }else{
        solo.style.position='relative'
        solo.style.background='transparent'
    }

})
let sidebar=document.getElementById('sidebar');
function Showsdara (){
    if(sidebar.style.transform==='translateY(0%)'){
sidebar.style.transform='translateY(-150%)'

    }else{
sidebar.style.transform='translateY(0%)'

    }
}