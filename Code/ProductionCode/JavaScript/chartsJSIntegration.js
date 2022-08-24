// Variables are exposed to the window by having the chartJSINtegration file loaded to the page
// Thinking of keeping things simple and just update/destroy+render the chart when needed (not multiple charts)
// helper functions can be done on this file or another one is up to you

// How to update the chart
// https://www.chartjs.org/docs/latest/developers/updates.html

// Fix on how to change the chart type
// https://stackoverflow.com/questions/36949343/chart-js-dynamic-changing-of-chart-type-line-to-bar-as-example

let data = [12, 19, 3, 5, 2, 3]
let labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']

let preLoadedData = {
    labels,
    datasets: [{
        label: '# of Votes',
        data,
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

let preLoadedConfig = {
    type: 'line',
    data: preLoadedData,
    options: {
        responsive: true,
        maintainAspectRatio: true,
        onResize: (_chart, _size) => {
            console.log("New Size:", _size)
        }
    }
};

// Data Changers
function randomize(){
    console.log("randomize")
    if (!globalChart) {
        console.log("globalChart not defined");
        return;
    }
    for (let i = 0; i < data.length; i++) {
        data[i] = getRandomInt(-10,10) 
    }
    globalChart.update();
}

function changeChart(_type) {
    console.log(`Change chart to ${_type}`);
    if (!globalChart) {
        console.log("globalChart not defined");
        return;
    }
    
    globalChart.destroy();
    console.log(preLoadedConfig)
    globalChart = new Chart(ctx, {
        type: _type,
        data: preLoadedData
    });
}


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

// Helpers
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
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


