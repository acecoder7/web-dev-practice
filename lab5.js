var product = [{
    id: 1,
    name: "Apples",
    price: 125,
    cate: "Fruits",
    colour: "Red",
    quat: 50
}, {
    id: 2,
    name: "Ball Pen",
    price: 15,
    cate: "Stationary",
    colour: "Blue",
    quat: 70
}]

// for (var i = 0; i < product.length; i++) {
//     console.log(product[i]);
//     console.log("name:" + product[i].name);
// }

// var rows = ""
// for (var i = 0; i < product.length; i++) {
//     rows = rows + "<tr><td>" + i + 1 + "</td><td>" + product[i].name + "</td><td>" + product[i].price + "</td><td>" + product[i].cate + "</td><td>" + product[i].colour + "</td><td>" + product[i].quat + "</td></tr>";
// }
// var tbody = document.getElementById("tabdata");
// tbody.innerHTML = rows;

function display(data) {
    var rows = "";
    for (var i = 0; i < data.length; i++) {
        rows = rows + `
        <tr>
        <td> ${i+1} </td>
        <td> ${data[i].name} </td>
        <td> ${data[i].prize} </td>
        <td> ${data[i].cate} </td>
        <td> ${data[i].colour} </td>
        <td> ${data[i].quat} </td>
        </tr>
        `;
        var tbody = document.getElementById("tabdata");
        tbody.innerHTML = rows;
    }

}

display(product);

function Searchbyname() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("Searchbyname");
    filter = input.value.toUpperCase();
    table = document.getElementsByClassName("table");
    tr = table.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}
// display(newProduct);


// function myFunction() {
//     // Declare variables
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");

//     // Loop through all table rows, and hide those who don't match the search query
//     for (i = 0; i < tr.length; i++) {
//       td = tr[i].getElementsByTagName("td")[0];
//       if (td) {
//         txtValue = td.textContent || td.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }
//     }
//   }