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
      ],
    }]
  };

let preLoadedConfig = {
    type: 'line',
    data: preLoadedData,
    options: {}
};

// Data Changers
function randomize(){
  console.log("randomize")
  if(!globalChart) {console.log("globalChart not defined"); return};
  for (let i = 0; i < data.length; i++) {
    data[i] = getRandomInt(-10,10) 
  }
  globalChart.update();
}

function changeChart(_type) {
  console.log(`Change chart to ${_type}`)
  if(!globalChart) {console.log("globalChart not defined"); return};
  globalChart.destroy();
  console.log(preLoadedConfig)
  globalChart = new Chart(ctx,{
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
  if(globalChart) {globalChart.destroy();};
  let _labels = [];
  let _data = [];

  for (let i = 0; i < _parsedData.length; i++) {
    _labels.push(_parsedData[i][0])
    _data.push(_parsedData[i][0])
  }

  let dataForChart = {
    _labels,
    datasets: [{
      label: 'Your Data',
      _data
    }]
  };
  console.log(_data)
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


