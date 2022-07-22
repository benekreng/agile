// Listener on the FILE SELECTOR button 
// SOURCE https://www.youtube.com/watch?v=-AR-6X_98rM
const input = document.querySelector('input[type="file"]');

input.addEventListener('change', function(e)
{
    // create FileReader object to view the file
    const reader = new FileReader()

    // display the  contents of the .csv file
    reader.onload = function()
    {
        //? find a way to determine file extension to be used in different file parsing later 

        // parsed results
        loadedData = reader.result.split('\n').map(function(line){return line.split(',')})
        
        // TESTING display parsed results
        console.log(loadedData)

        // update the first part of the NavBar 
        const navBarElement = document.getElementById("navBar1");
        navBarElement.style.backgroundColor = "red";

    }

    // read the data as text 
    reader.readAsText(input.files[0])



}, false)