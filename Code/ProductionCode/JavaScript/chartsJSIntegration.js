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

/*
parsed data example:
*/

let _testData = [
    [
        "firstname",
        " number"
    ],
    [
        "Melina",
        " 45"
    ],
    [
        "Berta",
        " 10"
    ],
    [
        "Dulcinea",
        " 56"
    ],
    [
        "Daphne",
        " 98"
    ],
    [
        "Margette",
        " 21"
    ],
    [
        "Ivett",
        " 23"
    ]
]

function createChartWithData(_parsedData) {
    console.log(`createChartWithData!`)
    if (globalChart) {
        globalChart.destroy();
    }
    let _labels = [];
    let _data = [];
    let _borderColor = [];
    let _backgroundColor = [];

    for (let i = 0; i < _parsedData.length; i++) {
        _labels.push(_parsedData[i][0])
        _data.push(_parsedData[i][1])
        // add colors
        let randomColor = random_rgba();
        _borderColor.push(randomColor)
        _backgroundColor.push(randomColor)
    }

    let dataForChart = {
        labels: _labels,
        datasets: [{
            label: 'Your Data',
            data: _data,
            borderColor: _borderColor,
            borderWidth: 1,
            backgroundColor: _backgroundColor
        }]
    };
    
    console.log(dataForChart);
    globalChart = new Chart(ctx,{
        type: "bar",
        data: dataForChart
    });
}


// Helpers
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


