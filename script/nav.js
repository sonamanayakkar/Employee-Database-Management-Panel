

$(document).ready(function () {




    $(".fa-bars").on('click', () => {
        $(".menu").slideToggle()

    })

    $("#darkmode").on('click', () => {

        localStorage.setItem("themecolors", "darkcolor")
        let getdatafromDb = localStorage.getItem("themecolors")
        if (getdatafromDb == "darkcolor") {
            $("body").addClass("darkcolor")
        }

    })
    $("#lightmode").on('click', () => {


        localStorage.setItem("themecolors", "lightcolor")
        let getdatafromDb = localStorage.getItem("themecolors")

        if (getdatafromDb == "lightcolor") {
            $("body").removeClass("darkcolor")
        }

    })


    let getdatafromDb = localStorage.getItem("themecolors")
  
    if (getdatafromDb == "darkcolor") {
        $("body").addClass("darkcolor")
    }
    else {
        $("body").removeClass("darkcolor")
    }





})