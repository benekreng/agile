
// Listener on the FILE SELECTOR button 
// SOURCE https://www.youtube.com/watch?v=-AR-6X_98rM
const input = document.querySelector('input[type="file"]');

var loadedData = null; // used in the load file option

var masterData = null;

input.addEventListener('change', function(e)
{
    // create FileReader object to view the file
    const reader = new FileReader()
    // read the data as text 
    reader.readAsText(input.files[0]);

    // display the  contents of the .csv file
    reader.onload = function()
    {
        //? find a way to determine file extension to be used in different file parsing later 

        // parsed results
        loadedData = reader.result.split('\n').map(function(line){return line.split(',')})
        
        // // TESTING display parsed results
        // console.log("initial load", loadedData)

        // Split the data into titles and data
        masterData = parser(loadedData)
        console.log("parsed:", masterData)

        // update the first part of the NavBar 
        document.getElementById("navBar1").style.backgroundColor = "gray";
        document.getElementById("navBar2").style.backgroundColor = "inherit";
        document.getElementById("navBar3").style.backgroundColor = "inherit";
        
        document.getElementById("first-phase").style.backgroundColor = "#548235";
        document.getElementById("first-pass").style.color = "#548235";
        document.getElementById("second-phase").style.borderColor = "#548235";

        // display options menu button
        document.getElementById("options").style.display = "block";

    }

    // // read the data as text 
    // reader.readAsText(input.files[0]);

    // populateExtraMenu(masterData)

}, false)
