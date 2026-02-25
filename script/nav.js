

$(document).ready(function () {


    $(".fa-bars").on('click', () => {
        $(".menu").slideToggle()

    })

    $("#darkmode").on('click', () => {

        $("body").css({
            "background-color": "black"
        })

    })
    $("#lightmode").on('click', () => {

        $("body").css({
            "background-color": "white"
        })

    })












})