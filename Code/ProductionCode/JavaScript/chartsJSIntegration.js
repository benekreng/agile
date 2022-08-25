// Variables are exposed to the window by having the chartJSINtegration file loaded to the page
// Thinking of keeping things simple and just update/destroy+render the chart when needed (not multiple charts)
// helper functions can be done on this file or another one is up to you

// How to update the chart
// https://www.chartjs.org/docs/latest/developers/updates.html

// Fix on how to change the chart type
// https://stackoverflow.com/questions/36949343/chart-js-dynamic-changing-of-chart-type-line-to-bar-as-example


// mainData & mainLabels HOLDS ALL THE INFO required to generate the chart
// by default this are the preset info but are overritten on csv load
// this is made to make the process of changing chart properties easier

// global data for presets
let mainData = [12, 19, 3, 5, 2, 3]
let mainLabels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']

// default is rendered using mainConfig in generateGraphsButton.js
let mainConfig = {
    labels: mainLabels,
    datasets: [{
        label: "Preset Data",
        data: mainData,
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

// object Deep copy https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/
let presetConfig = JSON.parse(JSON.stringify(mainConfig));

// Change all values in mainData with a 50% change of +/-
// values are only changed between 1 and 5 inclusive
function randomize(){
    console.log("randomize")
    if (!globalChart) {
        console.log("globalChart not defined");
        return;
    }
    console.log(mainData)
    for (let i = 0; i < mainData.length; i++) {
        console.log(mainData[i])
        let item = Number(mainData[i])
        let offset = Math.random() < 0.5 ? item + getRandomInt(1,5) : item - getRandomInt(1,5)
        mainData[i] = offset ;
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
    console.log(mainConfig)
    globalChart = new Chart(ctx, {
        type: _type,
        data: mainConfig,
        options: updator
    });
}


function generateUserGraphs(){
    console.log("button pressed")
    let optionsArea = document.getElementById('popup');

    let children = optionsArea.children;

    indexesChecked = []

    // start at index 1 to avoid the OPTIONS title bar
    // finish -2 to avoid the generate graphs button and close btn
    for(var i = 1; i < children.length -2 ; i++){
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
    if (userDataToGraph.length == 1) {customError("You must choose at least 2 columns"); return};
    if (userDataToGraph.length > 2) {customError("You must choose at most 2 columns"); return};
    console.log(userDataToGraph[0][0])
    console.log(userDataToGraph[1][0])


    // TODO Fix the chart.js integration
    //check to see if globalChart is in use and destroy
    if(globalChart != null){
        globalChart.destroy();
        console.log("chart destroyed");
    }

    // save data to globals
    mainLabels = userDataToGraph[0][0]
    mainData = userDataToGraph[1][0]

    // configuration object to be used in the charts.js instance
    let colors = getColors(userDataToGraph[0][0].length)
    mainConfig = {
        labels: mainLabels,
        datasets: [{
            label: gFileName,
            data: mainData,
            borderColor: colors.border,
            borderWidth: 1,
            backgroundColor: colors.background
        }]
    };

    // create the chart
    globalChart = new Chart(ctx, {
        type: "bar",
        data: mainConfig,
        options: updator
    });

    // Update the navigation bar
    document.getElementById("navBar1").style.backgroundColor = "Red"
    document.getElementById("navBar2").style.backgroundColor = "Red"
    
    // display the export option on the layer 1 side menu
    document.getElementById("exportGraphicArea").style.display = "flex";

    //close the info pannel
    closeInfo()

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
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 255 + ')';
}

function displayDimensions(status) {
    let parent = document.getElementById("dimesions");
    status ? parent.style.display = 'flex' :  parent.style.display = 'none';
}

let renderDimensions = (_size) => {
    console.log(_size);
    let msg = `w: ${_size.width}, h: ${_size.height}`
    document.getElementById("dimesionsText").innerHTML = msg;
    displayDimensions(true)
}

// updator for chart dimensions
let updator = {
    responsive: true,
    maintainAspectRatio: true,
    onResize: (_chart, _size) => {
        renderDimensions(_size)
    }
}


