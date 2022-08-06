function populateExtraMenu(){

    console.log("populate extra menu function");

    let optionsArea = document.getElementById('popup');
    // clear options area
    optionsArea.innerHTML = "";

    // make a title for the options area
    let title = document.createElement('div');
    title.innerText = "OPTIONS"
    title.classList.add("phase-title")

    // pull loaded data from the masterData object within fileSelector.js
    let titles = masterData[0];
    let data = masterData[1];

    for(const key in data){
        let button = document.createElement('button');
        button.innerText = key
        button.classList.add("basic-btn");
        optionsArea.append(button);
    }
    
    // add generate graphs button
    let button = document.createElement('button');
    button.innerText = "Generate Graphs"
    button.classList.add("basic-btn");
    optionsArea.append(button);
    button.onclick = console.log()

 


    console.log("titles", titles);
    console.log("data", data);


    // hide or display the menu
    var element = document.getElementById("popup");
//    element.classList.toggle("popupActive");
//    console.log('yes')
    if (element.style.left == "275px") {
        element.style.left = "0";
        element.style.boxShadow = "none";
        console.log('none')
    }
    else {
        element.style.left = "275px";
        element.style.boxShadow = "5px 0px 5px 0px rgba(0,0,0,0.2)";
        console.log('block')
    }
}