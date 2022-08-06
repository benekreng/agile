// TODO implement charts.js link for all options
const generateGraphsButton = document.getElementById("generateGraphsButton");

generateGraphsButton.addEventListener("click", function(e){ 

    navBar2.style.backgroundColor = "red"
    navBar1.style.backgroundColor = "red"

  //check to see if globalChart is in use and destroy
  if(globalChart != null){
    globalChart.destroy();
    console.log("chart destroyed");
  }

  console.log("generate graphs function activated")

  var dropDownSelection = document.getElementById("dataSelectorDropDown").value

  // Pre loaded Data option
  
  if(dropDownSelection == "Pre_Loaded_Data"){
    // show extra options

    document.getElementById("randomize").style.display = "flex";
    document.getElementById("lineChartBtn").style.display = "flex";
    document.getElementById("barChartBtn").style.display = "flex";
    document.getElementById("doughnutChartBtn").style.display = "flex";
    document.getElementById("polarChartBtn").style.display = "flex";

    // update the navigation bar
    document.getElementById("navBar2").style.backgroundColor = "red";

    globalChart = new Chart(
      ctx,
      preLoadedConfig
    );

    document.getElementById("exportGraphicArea").style.display = "flex";
  }

  // Loaded data from file 
  else if (dropDownSelection == "Data_From_File"){
    // determine if data has been loaded yet
    if(loadedData == null){

      console.log("data generation not possible as no data has been loaded")
    }
    else{
      // TODO add charts.js link with loadedData variable here 
      console.log(loadedData)
    }
  }

  // Google Big Query
  else if (dropDownSelection == "Google_Big_Query"){
    // TODO add charts.js link here with GBQ data
    // Insert GBQ data code here
  }

  // Unknown state 
  else{
    console.log("Unknown state with charts.js Data load")
  }

  


})