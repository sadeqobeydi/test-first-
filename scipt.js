
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
// let enterLevel = document.querySelector(".enter")
// let outLevel = document.querySelector(".out")

let outPosition = (heightWindow*60)/100
let arivelPosition = (heightWindow*95)/100

// enterLevel.style.top=`${arivelPosition}px`
// outLevel.style.top=`${outPosition}px`

let boxes = document.getElementsByClassName('boxes')

function cheskScrool(){

    for( let i = 0 ; i < boxes.length ; i++ ){

        let position =boxes[i].getBoundingClientRect().top
        if(position <= arivelPosition && position >= outPosition){
            let content = (arivelPosition-outPosition)
            let toper = boxes[i].getBoundingClientRect().top -arivelPosition

           let darsad = Math.abs(((toper*100)+10)/content)

           boxes[i].style.transform = `scale(${darsad}%)`
           boxes[i].style.opacity = `${darsad}%`


        }
        else{
            boxes[i].classList.remove("active")  
        }
    }
}


document.onscroll = (e)=>{
    cheskScrool()
    
    
}
