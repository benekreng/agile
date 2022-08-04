
// Listener on the FILE SELECTOR button 
// SOURCE https://www.youtube.com/watch?v=-AR-6X_98rM
const input = document.querySelector('input[type="file"]');

var loadedData = null; // used in the load file option

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
        // createChartWithData(loadedData)

        function parser(arr){
            masterObj = {}
            // pull the titles (should be the first index)
            // this will perm remove titles from the array
            titles = arr.shift()
            for(let x = 0; x < titles.length; x++){
                if(!(titles[x] in masterObj)){
                    masterObj[titles[x]]= {}
                    masterObj[titles[x]]["MasterIndex"] = x
                    masterObj[titles[x]]["Data"] = []
                }
                else{
                    console.log("Error, duplicate column title at index,", x, " Duplicate column name: ", titles[x])
                }
            }
            for(const key in masterObj){
                masterIndex = masterObj[key].MasterIndex
                for(let x = 0; x < arr.length; x++)
                {
                    masterObj[key]["Data"].push(arr[x][masterIndex])
                }
            }
            console.log("titles of the loaded data = "+titles);
            return [titles,masterObj];
        }
        parser(loadedData);

        // update the first part of the NavBar 
        document.getElementById("navBar1").style.backgroundColor = "red";
        document.getElementById("navBar2").style.backgroundColor = "inherit";
        document.getElementById("navBar3").style.backgroundColor = "inherit";
        
        document.getElementById("first-phase").style.backgroundColor = "#548235";
        document.getElementById("first-pass").style.color = "inherit";
        document.getElementById("second-phase").style.borderColor = "inherit";

    }

    // read the data as text 
    reader.readAsText(input.files[0])



}, false)
