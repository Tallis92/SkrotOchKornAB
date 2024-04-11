let selected = "no"
let vehicleprice = 0

let rentPeriodA = 1
let rentPeriodB = 1
let rentPeriodC = 1

buildMenu()
function buildMenu(){
    let links = [
        ["Om oss", "omoss.html", "infobox", "menulink"],
        ["Produkter", "produktsida.html", "infobox", "menulink"],
        ["Kontakta Oss", "kontaktaoss.html", "infobox", "menulink"],
        ["Kontaktformulär", "kontaktformular.html", "infobox", "menulink"],
        ["Media", "media.html", "infobox", "menulink"]
    ]

    for(let i = 0; i < links.length; i++){

        //List <li><a href="" target="">Länk</a></li>
        let listItem = document.createElement("li")
        let link = document.createElement("a")
        let text = document.createTextNode(links[i][0])

        link.appendChild(text)
        link.href = links[i][1]
        link.target = links[i][2]
        listItem.className = links[i][3]

        listItem.appendChild(link)

        document.getElementById("menu").appendChild(listItem)
    }
    
}

function vehiclePriceA(price){
    
    selecteda = document.getElementById("selecta").checked ? "yes" : "no"
    

    if(selecteda == "yes"){
        vehicleprice = (vehicleprice + (price * rentPeriodA))
        document.getElementById("totalprice").innerHTML = vehicleprice
    }
    else if(selecteda == "no"){
       vehicleprice = (vehicleprice - (price * rentPeriodA))
       document.getElementById("totalprice").innerHTML = vehicleprice
    }
}

function vehicleRentA(days){

    rentPeriodA = days
    document.getElementById("displaynumberofdaysa").innerHTML = days
}

function vehiclePriceB(price){

    selectedb = document.getElementById("selectb").checked ? "yes" : "no"
    if(selectedb == "yes"){
        vehicleprice = (vehicleprice + (price * rentPeriodB))
        document.getElementById("totalprice").innerHTML = vehicleprice
    }
    else if(selectedb == "no"){
        vehicleprice = (vehicleprice - (price * rentPeriodB))
        document.getElementById("totalprice").innerHTML = vehicleprice
    }
}

function vehicleRentB(days){

    rentPeriodB = days
    document.getElementById("displaynumberofdaysb").innerHTML = days
}

function vehiclePriceC(price){
    
    selectedb = document.getElementById("selectc").checked ? "yes" : "no"
    if(selectedb == "yes"){
        vehicleprice = (vehicleprice + (price * rentPeriodC))
        document.getElementById("totalprice").innerHTML = vehicleprice
    }
    else if(selectedb == "no"){
        vehicleprice = (vehicleprice - (price * rentPeriodC))
        document.getElementById("totalprice").innerHTML = vehicleprice
    }
}

function vehicleRentC(days){

    rentPeriodC = days
    document.getElementById("displaynumberofdaysc").innerHTML = days
}