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


    // TODO Fix the chart.js integration
    //check to see if globalChart is in use and destroy
    if(globalChart != null){
        globalChart.destroy();
        console.log("chart destroyed");
    }

    // core data of the charts.js chafrt
    let LoadedData = {
        userTitlesToGraph,
        datasets: [{
            label: userTitlesToGraph,
            data: userDataToGraph,
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ]
        }]
    };
    
    // configuration object to be used in the charts.js instance
    let LoadedConfig = {
        type: 'line',
        data: LoadedData,
        options: {}
    };

    // create the chart
    globalChart = new Chart(
        ctx,
        LoadedConfig
      );

    // Update the navigation bar
    document.getElementById("navBar1").style.backgroundColor = "Red"
    document.getElementById("navBar2").style.backgroundColor = "Red"
    
    // display the export option on the layer 1 side menu
    document.getElementById("exportGraphicArea").style.display = "flex";

}