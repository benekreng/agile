// chart data file should be dynamic and uploaded by user - current test data file included in the git
//const chartData = 'http://127.0.0.1:5500/datafile.csv';

// setup initial data set - can be changed to blank before file upload
const data = {
  labels: ["red", "green", "purple", "orange"],
  datasets: [
    {
      label: "Weekly Sales",
      data: [12, 15, 22, 18],
      backgroundColor: [
        "rgba(255, 26, 104, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(0, 0, 0, 0.2)",
      ],
      borderColor: [
        "rgba(255, 26, 104, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(0, 0, 0, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// config
const config = {
  type: "bar",
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);

// Papa Parse JS  -  File upload by element ID and CSV>JSON file creation
const costData = [];
const soldData = [];
const labelData = [];
const uploadconfirm = document
  .getElementById("uploadconfirm")
  .addEventListener("click", () => {
    Papa.parse(document.getElementById("uploadfile").files[0], {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        //console.log(results.data[0].Fruit);
        //loop to push data from JSON to array
        for (i = 0; i < results.data.length; i++) {
          labelData.push(results.data[i].Fruit);
          costData.push(results.data[i].Cost);
          soldData.push(results.data[i].Sold);
        }
        //console.log("Fruit Data = " + fruitData);
      },
    });
    //console.log("Fruit Data outside = " + fruitData);
  });
// update the chart data with the newly obtained values
function updateChart(label) {
  myChart.data.labels = labelData;
  myChart.data.datasets[0].label = label;
  if (label === "fruitData") {
    myChart.data.datasets[0].data = fruitData;
    console.log("fruitData Clicked");
  }
  if (label === "costData") {
    myChart.data.datasets[0].data = costData;
    console.log("costData Clicked");
  }
  if (label === "soldData") {
    myChart.data.datasets[0].data = soldData;
  }
  myChart.update();
}
