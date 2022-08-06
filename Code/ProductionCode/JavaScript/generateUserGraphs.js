function generateUserGraphs(){
    console.log("button pressed")
    let optionsArea = document.getElementById('popup');

    let children = optionsArea.children;

    indexesChecked = []

    // start at index 1 to avoid the OPTIONS title bar
    // finish -1 to avoid the generate graphs button
    for(var i = 1; i < children.length -1 ; i++){
        let child = children[i];

        let checkbox = document.getElementById(child.children[0].id)
        if(checkbox.checked)
        {
            console.log("checked")
            indexesChecked.push(i-1) // true index of data 
        }
    }
    
    // curate the data from the core data objects 
    let userTitlesToGraph = []
    let userDataToGraph = []

    for(let x = 0; x < indexesChecked.length; x++){
        userTitlesToGraph.push(titles[indexesChecked[x]]);
        userDataToGraph.push(userData[indexesChecked[x]]);
    }

    console.log("data to be passed to the charts")
    console.log(userTitlesToGraph)
    console.log(userDataToGraph)
}