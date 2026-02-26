

$(document).ready(function () {




    let upload = () => {
        debugger
        let tbody = $("tbody")

        let datafromDb = getitem("employee_details")
        $("#counts").text(datafromDb.length)

        $("#total_salary").text(totalamt(datafromDb))
        let count = 1
        let row;
        datafromDb.forEach(element => {

            row += `

                         <tr>
                            <td>${count}</td>
                            <td>${element.employeename}</td>
                            <td>${element.id}</td>
                            <td>${element.phone}</td>
                            <td>${element.designation}</td>
                            <td>${element.salary}</td>
                            <td>
                                <i class="fa-regular fa-trash-can"></i>
                                <i class="fa-solid fa-pen-to-square"></i>
                            </td>
                        </tr>
            
            `

            count++
        });
        tbody.html(row)




    }

    let datafromDb = getitem("employee_details") || []


    if (datafromDb.length > 0) {
        debugger
        upload()
    } else {
        $("#counts").text("0")
        $("#total_salary").text("0")

        let tbody = $("tbody")
        let count = 1
        let row = `

                         <tr>
                            <td colspan=7>No data found <i class="fa-solid fa-file-circle-xmark"></i></td>
                        </tr>
            
            `
        count++

        tbody.html(row)
    }



    $("#filter").on('change', (e) => {

        let target = e.target.value

        if (target != "All") {


            let datafromDb = getitem("employee_details")
            console.log(datafromDb);
            debugger
            let find = datafromDb.find(n => target == n.designation)
            console.log(find);

            if (find != undefined) {
                let filtered = datafromDb.filter(ele => {

                    if (target == ele.designation) {

                        return ele

                    }

                })

                $("#counts").text(filtered.length)


                $("#total_salary").text(totalamt(filtered))

                let tbody = $("tbody")
                let count = 1
                let row;

                filtered.forEach(element => {

                    row += `

                         <tr>
                            <td>${count}</td>
                            <td>${element.employeename}</td>
                            <td>${element.id}</td>
                            <td>${element.phone}</td>
                            <td>${element.designation}</td>
                            <td>${element.salary}</td>
                            <td>
                                <i class="fa-regular fa-trash-can"></i>
                                <i class="fa-solid fa-pen-to-square"></i>
                            </td>
                        </tr>
            
            `

                    count++

                    tbody.html(row)
                });
            }

            else {

                $("#counts").text("0")
                $("#total_salary").text("0")

                let tbody = $("tbody")
                let count = 1
                let row = `

                         <tr>
                            <td colspan=7>No data found <i class="fa-solid fa-file-circle-xmark"></i></td>
                        </tr>
            
            `

                count++

                tbody.html(row)

            }
        }

        else {
            upload()
        }

    })




    function getitem(key) {
        let get = localStorage.getItem(key)
        return JSON.parse(get)
    }


    function totalamt(filteredarr) {
        let totalamount = filteredarr.reduce((sum, currentvalue, idx, arr) => {
            sum += Number(currentvalue.salary)
            return sum
        }, 0)

        return totalamount
    }

})

