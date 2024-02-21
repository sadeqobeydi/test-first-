
function cheskScrool(){
    let boxes = document.getElementsByClassName('boxes')
    
    for( let i = 0 ; i < boxes.length ; i++ ){
        if(boxes[i].getBoundingClientRect().top < 400){
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
