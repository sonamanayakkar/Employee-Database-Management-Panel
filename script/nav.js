

$(document).ready(function () {




    $(".fa-bars").on('click', () => {
        $(".menu").slideToggle()

    })

    $("#mode").on('click', () => {


        $("body").toggleClass("darkcolor")

        let a = $("body").attr("class")


        if (a != "") {
            $(".sun").show()
            $(".moon").hide()
            Toastify({
                text: "Dark mode Activated! ",
                duration: 2000,

                gravity: "top", // "top" or "bottom"
                position: "center", // "left", "center" or "right"

                close: true,

                style: {
                    background: "linear-gradient(to right, #ffffff, #ffffff, #ffffff)",
                    color: "black",
                },

            }).showToast();
            localStorage.setItem("themecolors", "darkcolor")
        } else {
            $(".sun").hide()
            $(".moon").show()
            Toastify({
               text: "Light mode Activated! ",
                duration: 2000,

                gravity: "top", // "top" or "bottom"
                position: "center", // "left", "center" or "right"

                close: true,

                style: {
                    background: "linear-gradient(to right, #5e5e5e, #202020, #000000)",

                },

            }).showToast();
            localStorage.setItem("themecolors", "lightcolor")
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