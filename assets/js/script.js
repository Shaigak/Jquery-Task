$(document).ready(function () {

    // let elem=document.querySelector("h1")
    // console.log(elem)

    let elem = $("h1")
    // console.log(elem.html())




    // $(".check").click(function(){
    //     $(this).css("background-color","red")
    // })

    // $(".add").click(function(){
    //     $(this).css("background-color","green")
    //     $(this).next().css("background-color","green")
    // })
    // $(".hide").click(function(){
    //     $(".content").slideUp(2000);
    // })

    // $(".show").click(function(){
    //     $(".content").show(2000,function(){
    //         $(this).css("background-color","green")
    //     })
    // })


    // $(".toogle").click(function(){
    //     $(".content").toggle("2000s")
    // })



    // $(".show").click(function(){
    //     $(".content").slideDown(2000,function(){
    //         // $(this).css("background-color","green")
    //     })
    // })

    // $(".toogle").click(function(){
    //     $(".content").slideToggle(500)
    // })

    $(".icon").click(function () {

        $(".sidebar").removeClass("hide-sidebar")
        $(this).addClass("d-none")
        $(".icon2").removeClass("d-none")
    })

    $(".icon2").on("click",function(){
        $(".sidebar").addClass("hide-sidebar")
        $(".icon").removeClass("d-none");
        $(this).addClass("d-none");
    })
})
