
/* function cheskScrool(){

    let boxes = document.getElementsByClassName('boxes')
    for( let i = 0 ; i < boxes.length ; i++ ){
        if(boxes[i].getBoundingClientRect().top < 350){
            boxes[i].classList.add("active")
        }
        else{
            boxes[i].classList.remove("active")  
        }
    }
} */

let heightWindow = window.innerHeight
let enterLevel = document.querySelector(".enter")
let outLevel = document.querySelector(".out")

let arivelPosition = (heightWindow*70)/100
let outPosition = (heightWindow*15)/100

enterLevel.style.top=`${arivelPosition}px`
outLevel.style.top=`${outPosition}px`


function cheskScrool(){
    let boxes = document.getElementsByClassName('boxes')
    for( let i = 0 ; i < boxes.length ; i++ ){

        

        if(boxes[i].getBoundingClientRect().top < arivelPosition){
            boxes[i].classList.add("active")
        }
        else{
            boxes[i].classList.remove("active")  
        }
    }
}


document.onscroll = (e)=>{
    cheskScrool()
    
    
}
