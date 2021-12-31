document.addEventListener("DOMContentLoaded", function callIt() {
    // var test = document.getElementById('AAAAA');
    // test.addEventListener("click", function(){ 
    //  alert("TESTTESTTESTTESTTEST");
    // });   
    //!     CELLS ANIMATION
    var x = document.getElementsByClassName('col-1-6');
    for (var j=0; j < x.length; j++) {
        x[j].addEventListener("click", function(){miniPage(this.id);});
    }

    // !   ALERT
    var btn_alert = document.getElementById('btn_alert');
    btn_alert.addEventListener("click", function(){ 
        alert("TESTTESTTESTTESTTEST");
    }); 
    
    // !    SEND
    var btn_send = document.getElementById('btn_send');
    var container = document.getElementById('container');
    var pageCounter = 1;
  
    btn_send.addEventListener("click", function() {
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');

    myRequest.onload = function() {
        // console.log(myData); //intero array
        // console.log(myData[0]); //singolo obj/element
        console.log(myRequest.status);
        //* Error handling: connection to server
        if (myRequest.status >= 200 && myRequest.status < 400) {
            var myData = JSON.parse(myRequest.responseText);
            renderHTML(myData, container);
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
        btn_send.classList.add("red");
    }
    });

}); 

    // crea e aggiunge html alla pagina
    function renderHTML(data, container) {
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
        // console.log(container);
        container.insertAdjacentHTML('afterbegin', htmlString);
    }

// animazione delle cells
function miniPage(activeTab) {
    var i, arz;
    arz = document.getElementsByClassName('col-1-6');
    for (i = 0; i < arz.length; i++) {
        arz[i].style.width = "10%";
    }
    document.getElementById(activeTab).style.width = "50%";
}


