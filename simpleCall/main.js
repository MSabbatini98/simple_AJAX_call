var animalContainer = document.getElementById("ajax-content");
var btn = document.getElementById("btn_send");
var pageCounter = 1;

var btn_try = document.getElementById("btn_try");
btn_try.addEventListener("click", function() {
    alert("HELPPPPPPPPPP !");
})

btn.addEventListener("click", function() {
  
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');

    myRequest.onload = function() {
        // console.log(myData); //intero array
        // console.log(myData[0]); //singolo obj/element

        //* Error handling: connection to server
        if (myRequest.status >= 200 && myRequest.status < 400) {
            var ourData = JSON.parse(myRequest.responseText);
            renderHTML(ourData);
        } else {
            console.log("We tryed to connect to the server, but it returned an error.");
        } 
    };

    //* Error handling: connection to server
    myRequest.onerror = function() {
        console.log("Connection error");
    };

    myRequest.send();
    pageCounter++;
  
    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }
});
// New Animals

// crea e aggiunge html alla pagina
function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
        
        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
        if (ii == 0) {
            htmlString += data[i].foods.likes[ii];
        } else {
            htmlString += " and " + data[i].foods.likes[ii];
        }
        }

        htmlString += ' and dislikes ';

        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
        if (ii == 0) {
            htmlString += data[i].foods.dislikes[ii];
        } else {
            htmlString += " and " + data[i].foods.dislikes[ii];
        }
        }
        htmlString += '.</p>';
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

// crea e aggiunge html alla pagina
function renderHTML(allData) {
    var allPostName = "";

    for (i = 0; i < allData.length; i++) {
        allPostName += "<p>" + allData[i].name + "</p>";
    }
    allPostContainer.insertAdjacentHTML('beforebegin', allPostName);
}

// var thePets = [
//     {
//         "name" : "MEOW",
//         "species" : "dog",
//         "favFood" : "tuna",
//     },
//     {
//         "name" : "Bauw",
//         "species" : "dog",
//         "favFood" : "meat",
//     }
// ]
// meat ->
// thePets[1].favFood