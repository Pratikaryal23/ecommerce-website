
let solo=document.getElementById('solo');


addEventListener("scroll",()=>{
    console.log(window.scrollY)
    if(window.scrollY>10){
        solo.style.position='sticky'
        solo.style.background='gray'
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





let club=document.getElementById("shine");
// data.filter(x=>x.roll==='striker').map((val,i)=>{
//     club.innerHTML+=`<div><h1>${val.club}</h1><h2>${new Date().toLocaleString('default',{
//         year:"2-digit",month:"short",day:'numeric'
//     })}</h2><h2>${val.roll}</h2></div>`
// })
let count=0;
let data=[{
    id:"2",
    "pname":"Pratik ARyal",
    "roll":"Marketing Head",
  
    
},
{
    id:"3",
    "pname":"amit",
    "roll":"Project Head",
},

{
    id:"4",
    
    "pname":"karun",
    "roll":"Project Manager"
}]
let start=0;
let end=2;

let datatwo="";
function Dtata(){
    data.map((val,i)=>{
        if(i>=start && i<=end){
            // console.log('dsdsdsds')
          datatwo+=`  <div class="overalll">
          <div class="bio">
              <i class="fa fa-quote-left" aria-hidden="true"></i>
          </div>
          <p class="thee">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
              there live the blind texts.</p>
          <img src="../images/person_3.jpg.webp"></img>
          <div class="name">
              <p id="o">${val.pname}</p>
              <p class="p">${val.roll}</p>
          </div>
         
      </div> `
        }
      })

      console.log(datatwo)

      club.innerHTML=datatwo
      datatwo=''

}
Dtata()

setInterval(() => {
   
    if(start===data.length-1){
        start=0;
        end=2;
    }else{
        start++;
        end++;
    }
    Dtata()
    console.log(start,end)
}, 800);


// let RadioButton=document.querySelectorAll('#hold');
// function myfuncion(){
//     alert('gogo')
// }
// myfuncion();