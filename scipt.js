
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
let taraz = document.querySelector(".taraz")

let darsad = (heightWindow*20)/100
taraz.style.top=`${darsad}px`

function cheskScrool(){

    
    let boxes = document.getElementsByClassName('boxes')
    for( let i = 0 ; i < boxes.length ; i++ ){

        

        if(boxes[i].getBoundingClientRect().top < darsad){
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
