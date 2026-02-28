

$(document).ready(function () {

    let employeename = $("#name")
    let phone_number = $("#phnumber")
    let department = $("#department")
    let Salary = $("#Salary")
    let errors = $(".error")
    let [error1, error2, error3, error4] = errors

    Salary.on("input", () => {
        if (Salary.val() != "") {
            if (Salary.val().length > 8) {
                let sliced = (Salary.val()).slice(0, 8)
                Salary.val(sliced)
            }
        }
    })


    let array = new Array()

    let datafromDB = getitem("employee_details") || []

    if (datafromDB.length > 0) {
        datafromDB.forEach(element => {
            array.push(element)
        });

        setitem("employee_details", array)
    }



    $("form").on('submit', (e) => {
        e.preventDefault()

        let conformation1 = false
        let conformation2 = false
        let conformation3 = false
        let conformation4 = false
        debugger
        if (employeename.val() != "") {
            if (employeename.val().length >= 3) {
                conformation1 = true
                employeename.css({
                    "border": ""
                })
                error1.innerText = ""
            }
            else {
                error1.innerText = "Name must contain atleast 3 charecters"
                conformation1 = false
                employeename.css({
                    "border": "2px solid red"
                })
            }
        }
        else {
            error1.innerText = "please enter employee name"
            conformation1 = false

            employeename.css({
                "border": "2px solid red"
            })


        }


        if (department.val() != "") {

            conformation3 = true
            department.css({
                "border": ""
            })
            error3.innerText = ""

        }
        else {
            error3.innerText = "please choose designation"
            conformation3 = false

            department.css({
                "border": "2px solid red"
            })


        }



        if (phone_number.val() != "") {

            let phcheck = /^[6-9]\d{9}$/
            let verifiedphno = phcheck.test(phone_number.val())
            if (verifiedphno) {
                conformation2 = true
                phone_number.css({
                    "border": ""
                })
                error2.innerText = ""
            }
            else {
                conformation2 = false
                phone_number.css({
                    "border": "2px solid red"
                })
                error2.innerText = "please enter valid phone number"
            }
        }

        else {
            conformation2 = false
            conformation2 = false
            phone_number.css({
                "border": "2px solid red"
            })
            error2.innerText = "please enter phone number"
        }




        if (Salary.val() != "") {
            conformation4 = true

            Salary.css({
                "border": ""
            })
            error4.innerText = ""
        }

        else {
            conformation4 = false

            Salary.css({
                "border": "2px solid red"
            })
            error4.innerText = "please enter salary"
        }


        if (conformation1 && conformation2 && conformation3 && conformation4) {


            let details = {
                id: Date.now(),
                employeename: employeename.val(),
                phone: phone_number.val(),
                designation: department.val(),
                salary: Salary.val()
            }



            array.push(details);


            setitem("employee_details", array)

            clearall()
            Swal.fire({
                title: "Employee Added to Table✅",
                icon: "success",
                draggable: true
            });


        }

        else {

        }


    })



    function setitem(key, value) {
        let set = JSON.stringify(value)
        localStorage.setItem(key, set)
    }

    function getitem(key) {
        let get = localStorage.getItem(key)
        return JSON.parse(get)
    }

    function clearall() {
        employeename.val("")
        phone_number.val("")
        department.val("")
        Salary.val("")
    }


})