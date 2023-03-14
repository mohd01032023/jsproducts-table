let products = [];
let prodID = new Set([])

function addProd(){
    /* Getting values */
    let ID = document.getElementById("getinput__id").value;
    let name = document.getElementById("getinput__name").value;
    let price = document.getElementById("getinput__price").value;

    // Error checking
    let error = document.getElementById("output__err");
    if(ID=="" || name=="" || price==""){
        error.innerHTML = "Some feilds are empty"; return;
    }
    else if(prodID.has(ID)){
        error.innerHTML = "Product ID given is already in use"; return;
    }
    else{ // Data is valid
        products.push([ID, name, price]); prodID.add(ID);
        error.innerHTML = ""
        let output = "";
        for(item of products){
            output += "<tr> <td style='text-align:left'>" + item[0] + "</td><td>" + item[1] + "</td><td>USD " + item[2] + " </td> </tr>";
        }
        document.getElementById("output__tables").innerHTML = output;
    }
}