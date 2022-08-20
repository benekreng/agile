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
    console.log(userDataToGraph[0][0])
    console.log(userDataToGraph[1][0])


    // TODO Fix the chart.js integration
    //check to see if globalChart is in use and destroy
    if(globalChart != null){
        globalChart.destroy();
        console.log("chart destroyed");
    }

    // configuration object to be used in the charts.js instance
    let colors = getColors(userDataToGraph[0][0].length)
    let LoadedConfig = {
        labels: userDataToGraph[0][0],
        datasets: [{
            label: 'Your Data',
            data: userDataToGraph[1][0],
            borderColor: colors.border,
            borderWidth: 1,
            backgroundColor: colors.background
        }]
    };

    // create the chart
    globalChart = new Chart(ctx, {
        type: "bar",
        data: LoadedConfig
    });

    // Update the navigation bar
    document.getElementById("navBar1").style.backgroundColor = "Red"
    document.getElementById("navBar2").style.backgroundColor = "Red"
    
    // display the export option on the layer 1 side menu
    document.getElementById("exportGraphicArea").style.display = "flex";

}

function getColors(n) {
    let _borderColor = [];
    let _backgroundColor = [];

    for (let i = 0; i < n; i++) {
        let randomColor = random_rgba();
        _borderColor.push(randomColor)
        _backgroundColor.push(randomColor)
    }

    return {
        border: _borderColor,
        background: _backgroundColor
    }
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}