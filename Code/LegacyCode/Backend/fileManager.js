document.title = "Load File Test"

// select the file input on the page 
const input = document.querySelector('input[type="file"]');

// add an event listener to update with every change 
input.addEventListener('change', function(e)
{
    // display FileList object to show file is loaded
    console.log(input.files)

    // create FileReader objectm to view the file
    const reader = new FileReader()

    // display the  contents of the .csv file
    reader.onload = function()
    {
        // TODO find a way to determine file extension so multiple files can be loaded

        // full results
        // console.log(reader.result)

        // parsed results
        const lines = reader.result.split('\n').map(function(line){return line.split(',')})
        console.log(lines)
    }

    // read the data as text 
    reader.readAsText(input.files[0])

}, false)

// SOURCE https://www.youtube.com/watch?v=-AR-6X_98rM