function exportGraphic() {
    
    // set nab bar stage 3
    navBar3.style.backgroundColor = "gray";
    
    document.getElementById("first-phase").style.backgroundColor = "#548235";
    document.getElementById("first-phase").style.borderColor = "#548235";
    document.getElementById("first-pass").style.color = "#548235";
    document.getElementById("second-phase").style.backgroundColor = "#548235";
    document.getElementById("second-phase").style.borderColor = "#548235";
    document.getElementById("second-pass").style.color = "#548235";
    document.getElementById("third-phase").style.backgroundColor = "#548235";
    document.getElementById("third-phase").style.borderColor = "#548235";

    // find the export option that the use has selected
    // let exportOption = document.getElementsByName('dataExport');
    // for (let x = 0; x < exportOption.length; x++) {
    //     if(exportOption[x].checked == true) {
    //         var fileExtension = exportOption[x].value;
    //         break;
    //     }
    // }

    let exportOptions = document.getElementById('dataExportOptions');
    var fileExtension = exportOptions.options[exportOptions.selectedIndex].value;

    // code taken and adapted from https://stackoverflow.com/questions/923885/capture-html-canvas-as-gif-jpg-png-pdf
    var canvas = document.getElementById("chart");

    var fileName = "export." + fileExtension

    var MIME_TYPE = "image/" + fileExtension;

    var imgURL = canvas.toDataURL(MIME_TYPE);

    var dlLink = document.createElement('a');
    dlLink.download = fileName;
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);

}


