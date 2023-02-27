// let headers = document.querySelectorAll(".tab-menu .header .item")

// let contents = document.querySelectorAll(".tab-menu .content .item")

// headers.forEach(element => {

//     element.addEventListener("click", function () {

//         document.querySelector(".active").classList.remove("active")
//         this.classList.add("active")

//         contents.forEach(content => {

//             if (content.getAttribute("data-id") == this.getAttribute("data-id")) {
//                 content.classList.remove("d-none")
//             } else {
//                 content.classList.add("d-none")
//             }

//         });
//     })

// });

$(document).ready(function(){

  
let header=$(".item")

let contents=$(".items")

header.click(function(e){
    $(this).css("background-color","red")
    
    e.preventDefault();
    
    var ind=$(this).index()   // indexi verir bize 


     contents.hide();
     contents.eq(ind).show();    //eq - indexe gore gosderir  // show () gosdermek 

   
   if($(this).hasClass(".active")){
    $(this).removeClass("active")
   }else{
    $(this).addClass("active")
   }
    

})
    


})