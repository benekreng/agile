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
    // console.log("titles of the loaded data = "+titles);
    return [titles,masterObj];
}