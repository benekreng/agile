// Listener on the GENERATE GRAPHS button
// TODO implement charts.js link for all options
const generateGraphsButton = document.getElementById("generateGraphsButton");
// navBar2 from navigationBar.js
// navBar1 from navigationBar.js

generateGraphsButton.addEventListener("click", function(e){ 
  // set nav bar stage 2 
  navBar2.style.backgroundColor = "red"
  navBar1.style.backgroundColor = "red"

  //check to see if globalChart is in use and destroy
  if(globalChart != null){
    globalChart.destroy();
    console.log("chart destroyed");
  }

  console.log("generate graphs function activated")

  let dropDownSelection = dropDownMenu.value

  // Pre loaded Data option
  
  if(dropDownSelection == "Pre_Loaded_Data"){
    globalChart = new Chart(
      ctx,
      preLoadedConfig
    );
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
      // done in file selector
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