var titles
var userData

function populateExtraMenu(){

    let optionsArea = document.getElementById('popup');
    // clear options area
    optionsArea.innerHTML = "";

    // make a title for the options area
    let title = document.createElement('div');
    title.innerText = "OPTIONS"
    title.classList.add("phase-title")
    optionsArea.append(title)

    // pull loaded data from the masterData object within fileSelector.js
    titles = masterData[0];

    userData = []
    for(let x in masterData[1]){
        userData.push([masterData[1][x]["Data"]])
    }

    let counter = 0;
//    for(const key in masterData[1]){
//        let container = document.createElement('div');
//
//        let checkbox = document.createElement('input');
//        checkbox.type = 'checkbox';
//        checkbox.id = key;
//        checkbox.name = key;
//        checkbox.value = counter;
//        container.append(checkbox)
// 
//        let label = document.createElement('label')
//        label.htmlFor = key;
//        label.appendChild(document.createTextNode(key));
//        container.append(label)
//
//        optionsArea.append(container)
//        counter += 1
//    }
    
    for(const key in masterData[1]){
        let container = document.createElement('label');
        container.classList.add("checkbox-container");

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = key;
        checkbox.name = key;
        checkbox.value = counter;
        container.append(checkbox);
        
        let span = document.createElement('span');
        span.classList.add("checkmark");
        container.append(span);
 
        let label = document.createElement('label')
        label.htmlFor = key;
        label.appendChild(document.createTextNode(key));
        container.append(label);

        optionsArea.append(container)
        counter += 1
    }
    
    // add generate graphs button
    let button = document.createElement('button');
    button.innerText = "Generate Graphs"
    button.classList.add("basic-btn");
    button.id = "generateUserGraphs";
    button.onclick = generateUserGraphs;
    optionsArea.append(button);
    
    let closeButton = document.createElement('img');
    closeButton.classList.add("navbutton");
    closeButton.id = "close-options";
    closeButton.onclick = populateExtraMenu;
    closeButton.src = "images/CrossButtonLight.png";
    optionsArea.append(closeButton);

    // console.log("titles", titles);
    // console.log("user data", userData);

    // hide or display the menu
    var element = document.getElementById("popup");
    if (element.style.left == "275px") {
        element.style.left = "0";
        element.style.boxShadow = "none";
        // console.log('none')
    }
    else {
        element.style.left = "275px";
        element.style.boxShadow = "5px 0px 5px 0px rgba(0,0,0,0.2)";
        // console.log('block')
    }
    
}